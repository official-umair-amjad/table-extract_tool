"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface CodeExample {
  language: string
  label: string
  code: string
}

interface CodeTabsProps {
  examples: CodeExample[]
  title?: string
}

export function CodeTabs({ examples, title }: CodeTabsProps) {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const handleCopy = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedTab(language)
      setTimeout(() => setCopiedTab(null), 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-brand-ink dark:text-white">
          {title}
        </h3>
      )}
      
      <Tabs defaultValue={examples[0]?.language} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {examples.map((example) => (
            <TabsTrigger key={example.language} value={example.language}>
              {example.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {examples.map((example) => (
          <TabsContent key={example.language} value={example.language} className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-sm font-medium text-brand-ink-soft dark:text-gray-400">
                      {example.label}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy(example.code, example.language)}
                      className="h-8"
                    >
                      {copiedTab === example.language ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  
                  <pre className="p-4 overflow-x-auto bg-slate-50 dark:bg-slate-900 text-sm">
                    <code className="text-brand-ink dark:text-gray-300">
                      {example.code}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
