"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, FileImage, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const samples = [
  {
    id: 1,
    title: "Receipt Processing",
    type: "image",
    description: "Transform receipt photos into structured data",
    before: {
      filename: "receipt.jpg",
      preview: "Coffee Shop Receipt - handwritten items and prices"
    },
    after: {
      rows: [
        ["Item", "Qty", "Price", "Total"],
        ["Americano", "2", "$4.50", "$9.00"],
        ["Croissant", "1", "$3.25", "$3.25"],
        ["Tax", "", "", "$0.98"],
        ["Total", "", "", "$13.23"]
      ]
    }
  },
  {
    id: 2,
    title: "Invoice Extraction",
    type: "image", 
    description: "Extract line items from business invoices",
    before: {
      filename: "invoice.pdf",
      preview: "Professional invoice with company header and itemized billing"
    },
    after: {
      rows: [
        ["Description", "Qty", "Rate", "Amount"],
        ["Web Development", "40", "$125.00", "$5,000.00"],
        ["Design Services", "20", "$100.00", "$2,000.00"],
        ["Subtotal", "", "", "$7,000.00"],
        ["Tax (8%)", "", "", "$600.00"],
        ["Total", "", "", "$7,600.00"]
      ]
    }
  },
  {
    id: 3,
    title: "Bank Statement",
    type: "pdf",
    description: "Convert bank statements to spreadsheet format", 
    before: {
      filename: "statement.pdf",
      preview: "Monthly bank statement with transaction details"
    },
    after: {
      rows: [
        ["Date", "Description", "Amount", "Balance"],
        ["01/03", "Direct Deposit", "+$2,500.00", "$3,750.00"],
        ["01/05", "Online Purchase", "-$85.43", "$3,664.57"],
        ["01/07", "ATM Withdrawal", "-$100.00", "$3,564.57"],
        ["01/12", "Monthly Fee", "-$12.00", "$3,552.57"]
      ]
    }
  }
]

export function SampleStrip() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % samples.length)
    }, 5000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSample = () => {
    setCurrentIndex((prev) => (prev + 1) % samples.length)
    setIsAutoPlaying(false)
  }

  const prevSample = () => {
    setCurrentIndex((prev) => (prev - 1 + samples.length) % samples.length)
    setIsAutoPlaying(false)
  }

  const currentSample = samples[currentIndex]

  return (
    <section className="py-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
            See It In Action
          </Badge>
          <h2 className="text-3xl font-bold text-brand dark:text-white mb-4">
            From chaos to clean data
          </h2>
          <p className="text-lg text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
            Watch how complex documents become structured spreadsheets in seconds
          </p>
        </div>

        <div className="relative">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-brand-ink dark:text-white">
                {currentSample.title}
              </h3>
              <Badge variant="outline" className="text-xs bg-brand text-white border-brand-accent/20">
                {currentSample.type === 'image' ? 'Image' : 'PDF'}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={prevSample}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-brand-ink-soft dark:text-gray-400 px-2">
                {currentIndex + 1} / {samples.length}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={nextSample}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-slate-100 dark:bg-slate-700 p-4 border-b">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-ink dark:text-white">
                      Before: Original Document
                    </span>
                    <div className="flex items-center space-x-1 text-brand-ink-soft dark:text-gray-400">
                      {currentSample.type === 'image' ? (
                        <FileImage className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                      <span className="text-xs">{currentSample.before.filename}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 min-h-64 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-600 flex items-center justify-center mx-auto">
                      {currentSample.type === 'image' ? (
                        <FileImage className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                      ) : (
                        <FileText className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-brand-ink dark:text-white mb-1">
                        {currentSample.before.filename}
                      </p>
                      <p className="text-sm text-brand-ink-soft dark:text-gray-400">
                        {currentSample.before.preview}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="overflow-hidden border-2 border-brand dark:border-slate-700">
              <CardContent className="p-0">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 border-b border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">
                      After: Structured Data
                    </span>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 text-xs">
                      CSV/XLSX Ready
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800">
                          {currentSample.after.rows[0].map((header, index) => (
                            <th
                              key={index}
                              className="px-3 py-2 text-left font-medium text-brand-ink dark:text-white border border-slate-200 dark:border-slate-700"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentSample.after.rows.slice(1).map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-3 py-2 border border-slate-200 dark:border-slate-700 text-brand-ink dark:text-gray-300"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {samples.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-brand' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Description */}
          <div className="text-center mt-6">
            <p className="text-brand-ink-soft dark:text-gray-400">
              {currentSample.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
