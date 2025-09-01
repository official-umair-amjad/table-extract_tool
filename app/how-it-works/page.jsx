import { Zap, Shield, Cpu } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const steps = [
  {
    image: "/shutter_ss_file.png",
    width: 100,
    height: 100,
    title: "Upload",
    description: "Drag & drop a JPG/PNG or PDF",
    details: "Simply upload your image or PDF file. We support common formats and files up to 15MB in size.",
    color: "bg-blue-500"
  },
  {
    image: "/shutter_ss_converted.png",
    width: 160,
    height: 160,
    title: "Detect", 
    description: "We find the grid and read cell text",
    details: "Our engine analyzes your document to identify table structures and extract text from each cell with high accuracy.",
    color: "bg-green-500"
    
  },
  {
    image: "/shutter_ss_dowload.png",
    width: 100,
    height: 128,
    title: "Export",
    description: "Preview and download CSV/XLSX",
    details: "Get your data in the format you need. Preview results, copy to clipboard, or download as CSV or Excel files.",
    color: "bg-purple-500"
  }
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes. Our optimized pipeline processes most documents instantly."
  },
  {
    icon: Shield,
    title: "Privacy First", 
    description: "Your files are processed locally and never stored on our servers. Complete privacy guaranteed."
  },
  {
    icon: Cpu,
    title: "Smart Detection",
    description: "Advanced algorithms detect tables automatically without manual configuration or templates."
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20 px-10">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-brand/10 text-brand border-brand/20">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Extract tables in 3 simple steps
            </h1>
            <p className="text-xl text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
              Our streamlined process makes table extraction effortless. From upload to export in seconds.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="relative overflow-hidden shadow-lg h-min bg-brand-accent/20">
                  <CardContent className="p-8 text-center ">
                    <div className="relative mb-6">
                      <div className="w-48 h-32 mx-auto relative rounded-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={step.width}
                          height={step.height}
                          className="object-contain"
                          style={{ margin: 'auto' }}
                          priority
                        />
                      </div>
                      <div className="absolute -top-8 -left-2 w-8 h-8 bg-brand/80 text-white text-lg font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-brand-ink-soft dark:text-gray-400 font-medium mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm text-brand-ink-soft dark:text-gray-400">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-brand-ink dark:text-white mb-12">
              Why choose our solution?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-brand-ink-soft dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Technical Details */}
          <Card className="bg-brand-accent/20 dark:bg-slate-800 border-0 ">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-brand-ink dark:text-white mb-6 text-center">
                Technical Pipeline
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-brand-ink dark:text-white mb-3">
                      Supported Formats
                    </h3>
                    <ul className="space-y-2 text-brand-ink-soft dark:text-gray-400">
                      <li>• JPG, JPEG, PNG images</li>
                      <li>• PDF documents (single/multi-page)</li>
                      <li>• File size up to 15MB</li>
                      <li>• High-resolution scans supported</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-brand-ink dark:text-white mb-3">
                      Output Formats
                    </h3>
                    <ul className="space-y-2 text-brand-ink-soft dark:text-gray-400">
                      <li>• CSV (Comma-Separated Values)</li>
                      <li>• XLSX (Microsoft Excel)</li>
                      <li>• Copy to clipboard</li>
                      <li>• Preview with pagination</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg">
                  <h3 className="font-semibold text-brand-ink dark:text-white mb-3">
                    Current Status: Demo Mode
                  </h3>
                  <p className="text-brand-ink-soft dark:text-gray-400 mb-3">
                    This version includes mocked table extraction to demonstrate the user experience. 
                    The API contract and integration points are designed for easy engine swapping.
                  </p>
                  <div className="text-sm text-brand-ink-soft dark:text-gray-400">
                    <strong>Next:</strong> Integration with real OCR engines (AWS Textract, Azure Document Intelligence, Tesseract)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
