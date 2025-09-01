"use client"

import { useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, FileImage, FileText, X, Download, Copy, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useUploadStore } from "@/lib/store"
import { TablePreview } from "@/components/demo/table-preview"
import { toast } from "sonner"

export function Uploader() {
  const { items, addFiles, updateItem, removeItem, clearAll } = useUploadStore()

  // Handle pending files from sessionStorage (from home page)
  useEffect(() => {
    const pendingFiles = sessionStorage.getItem('pendingFiles')
    if (pendingFiles) {
      try {
        const fileData = JSON.parse(pendingFiles)
        // We can't recreate File objects from sessionStorage, so we'll show a message
        toast.info("Please re-upload your files to process them")
        sessionStorage.removeItem('pendingFiles')
      } catch (error) {
        console.error('Error parsing pending files:', error)
      }
    }
  }, [])

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      addFiles(acceptedFiles)
      
      // Process each file
      acceptedFiles.forEach(async (file) => {
        const item = items.find(i => i.file === file) || 
          { id: Math.random().toString(36).substr(2, 9), file, status: 'queued' }
        
        updateItem(item.id, { status: 'processing' })
        
        try {
          const formData = new FormData()
          formData.append('file', file)
          
          const response = await fetch('/api/process', {
            method: 'POST',
            body: formData,
          })
          
          if (!response.ok) {
            throw new Error('Processing failed')
          }
          
          const result = await response.json()
          updateItem(item.id, { 
            status: 'completed',
            tables: [result.rows] // Wrap single table in array
          })
        } catch (error) {
          updateItem(item.id, { 
            status: 'error',
            error: 'Failed to process file'
          })
        }
      })
    }
  }, [addFiles, updateItem, items])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxSize: 15 * 1024 * 1024, // 15MB
  })

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600'
      case 'error': return 'text-red-600'
      case 'processing': return 'text-blue-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'error': return 'Error'
      case 'processing': return 'Processing...'
      default: return 'Queued'
    }
  }

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <Card className="border-2 border-dashed border-brand">
        <CardContent className="p-5">
          <div
            {...getRootProps()}
            className={cn(
              "text-center cursor-pointer transition-all duration-200",
              isDragActive && "scale-105"
            )}
          >
            <input {...getInputProps()} />
            
            <div className="flex flex-col items-center space-y-6">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center transition-colors bg-brand text-white",
                isDragActive ? "" : "dark:bg-slate-800 dark:text-slate-400"
              )}>
                <Upload className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-brand-ink dark:text-white">
                  {isDragActive ? "Drop your files here" : "Drop files or click to upload"}
                </h3>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  JPG, PNG, or PDF up to 15MB each
                </p>
              </div>

              <div className="flex items-center space-x-4 text-sm text-brand-ink-soft dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <FileImage className="w-4 h-4" />
                  <span>Images</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>PDFs</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Queue */}
      {items.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-brand-ink dark:text-white">
              Processing Queue ({items.length})
            </h2>
            <Button 
              variant="outline" 
              onClick={clearAll}
              className="text-red-600 hover:text-red-700"
            >
              Clear All
            </Button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {item.file.type.startsWith('image/') ? (
                          <FileImage className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                        ) : (
                          <FileText className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-brand-ink dark:text-white truncate">
                          {item.file.name}
                        </h3>
                        <p className="text-sm text-brand-ink-soft dark:text-gray-400">
                          {formatFileSize(item.file.size)}
                        </p>
                        <p className={cn("text-sm font-medium", getStatusColor(item.status))}>
                          {getStatusText(item.status)}
                        </p>
                        
                        {item.status === 'processing' && (
                          <Progress value={50} className="mt-2 w-48" />
                        )}
                        
                        {item.error && (
                          <p className="text-sm text-red-600 mt-1">{item.error}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {item.status === 'error' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            updateItem(item.id, { status: 'queued', error: undefined })
                            // Re-trigger processing logic here
                          }}
                        >
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Retry
                        </Button>
                      )}
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Table Preview */}
                  {item.status === 'completed' && item.tables && item.tables.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                      <TablePreview
                        tables={item.tables}
                        filename={item.file.name}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {/* {items.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="p-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto">
                <FileImage className="w-8 h-8 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-brand-ink dark:text-white mb-2">
                  Ready to extract tables
                </h3>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  Upload files above or try our sample files
                </p>
              </div>
              <div className="flex justify-center space-x-3">
                <Button variant="outline">
                  Upload Sample Receipt
                </Button>
                <Button variant="outline">
                  Upload Sample Invoice
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )} */}
    </div>
  )
}
