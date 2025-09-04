"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { useDropzone } from "react-dropzone"
import { Upload, FileImage, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroUpload({ className }) {
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      // Store files in sessionStorage temporarily and navigate to demo
      sessionStorage.setItem('pendingFiles', JSON.stringify(
        acceptedFiles.map(file => ({
          name: file.name,
          size: file.size,
          type: file.type,
        }))
      ))
      router.push('/demo')
    }
  }, [router])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxSize: 15 * 1024 * 1024, // 15MB
  })

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed border-brand/60 bg-card rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl",
          isDragActive
            ? "bg-primary/5 scale-105"
            : "hover:border-brand/60  hover:bg-brand-accent/10 hover:scale-[1.05]"
        )}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center space-y-5">
          <div className="relative">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
              isDragActive ? "bg-brand text-primary-foreground shadow-lg" : "bg-brand/80 text-primary-foreground shadow-md hover:bg-primary"
            )}>
              <Upload className="w-8 h-8" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-card-foreground">
              {isDragActive ? "Drop your files here" : "Drop files or click to upload"}
            </h3>
            <p className="text-muted-foreground">
              JPG, PNG, or PDF up to 15MB each
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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

      {/* <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          size="lg" 
          className="bg-brand hover:bg-brand/90"
          onClick={() => document.querySelector('input')?.click()}
        >
          Upload a file
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={() => router.push('/demo')}
        >
          Use a sample
        </Button>
      </div> */}
    </div>
  )
}
