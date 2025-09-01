"use client"

import { Container } from "@/components/layout/container"
import { Uploader } from "@/components/demo/uploader"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20 px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Table Extraction Demo
            </h1>
            <p className="text-xl text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
              Upload your images or PDFs to see the magic happen. Extract tables in seconds.
            </p>
          </div>

          <Uploader />
        </div>
      </Container>
    </div>
  )
}
