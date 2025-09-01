"use client"

import { useState } from "react"
import { Download, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { downloadCSV, downloadXLSX, copyToClipboard } from "@/lib/export"
import { toast } from "sonner"

export function TablePreview({ tables, filename }) {
  const [copiedTable, setCopiedTable] = useState(null)

  const handleCopy = async (tableIndex) => {
    try {
      await copyToClipboard(tables[tableIndex])
      setCopiedTable(tableIndex)
      toast.success("Table copied to clipboard!")
      setTimeout(() => setCopiedTable(null), 2000)
    } catch (error) {
      toast.error("Failed to copy table")
    }
  }

  const handleDownloadCSV = (tableIndex) => {
    const baseFilename = filename.replace(/\.[^/.]+$/, "")
    const csvFilename = tables.length > 1 
      ? `${baseFilename}_table_${tableIndex + 1}.csv`
      : `${baseFilename}.csv`
    downloadCSV(tables[tableIndex], csvFilename)
    toast.success("CSV downloaded!")
  }

  const handleDownloadXLSX = (tableIndex) => {
    const baseFilename = filename.replace(/\.[^/.]+$/, "")
    const xlsxFilename = tables.length > 1
      ? `${baseFilename}_table_${tableIndex + 1}.xlsx`
      : `${baseFilename}.xlsx`
    downloadXLSX(tables[tableIndex], xlsxFilename)
    toast.success("Excel file downloaded!")
  }

  const renderTable = (rows, tableIndex) => {
    if (!rows || rows.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No table data available
        </div>
      )
    }

    const headers = rows[0]
    const dataRows = rows.slice(1)
    const displayRows = dataRows.slice(0, 30) // Show first 30 rows
    const hasMoreRows = dataRows.length > 30

    return (
      <div className="space-y-4">
        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            onClick={() => handleDownloadCSV(tableIndex)}
            className="bg-brand hover:bg-brand/90"
          >
            <Download className="w-4 h-4 mr-1" />
            Download CSV
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDownloadXLSX(tableIndex)}
          >
            <Download className="w-4 h-4 mr-1" />
            Download XLSX
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleCopy(tableIndex)}
          >
            {copiedTable === tableIndex ? (
              <Check className="w-4 h-4 mr-1" />
            ) : (
              <Copy className="w-4 h-4 mr-1" />
            )}
            {copiedTable === tableIndex ? "Copied!" : "Copy Table"}
          </Button>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <div className="overflow-x-auto max-h-96">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800 sticky top-0">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-3 text-left font-medium text-brand-ink dark:text-white border-r border-slate-200 dark:border-slate-700 last:border-r-0"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayRows.map((row, rowIndex) => (
                  <tr 
                    key={rowIndex}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 last:border-r-0"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {hasMoreRows && (
            <div className="bg-slate-50 dark:bg-slate-800 px-4 py-3 text-center text-sm text-brand-ink-soft dark:text-gray-400">
              Showing first 30 rows of {dataRows.length} total rows
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 text-sm text-brand-ink-soft dark:text-gray-400">
          <span>{headers.length} columns</span>
          <span>{dataRows.length} rows</span>
          <span>{headers.length * dataRows.length} cells</span>
        </div>
      </div>
    )
  }

  if (tables.length === 0) {
    return null
  }

  if (tables.length === 1) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Extracted Table</CardTitle>
        </CardHeader>
        <CardContent>
          {renderTable(tables[0], 0)}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Extracted Tables ({tables.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table-0" className="w-full">
          <TabsList className="grid w-full max-w-md" style={{ gridTemplateColumns: `repeat(${Math.min(tables.length, 4)}, 1fr)` }}>
            {tables.map((_, index) => (
              <TabsTrigger key={index} value={`table-${index}`}>
                Table {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {tables.map((table, index) => (
            <TabsContent key={index} value={`table-${index}`} className="mt-6">
              {renderTable(table, index)}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
