import { Code, Zap, Shield, Globe } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeTabs } from "@/components/api/code-tabs"

const processExamples = [
  {
    language: "curl",
    label: "cURL",
    code: `curl -X POST http://localhost:3000/api/process \\
  -F "file=@./samples/receipt.jpg" \\
  -H "Content-Type: multipart/form-data"`
  },
  {
    language: "node",
    label: "Node.js",
    code: `const formData = new FormData();
formData.append("file", myFile);

const response = await fetch("/api/process", {
  method: "POST",
  body: formData,
});

const result = await response.json();
console.log(result);`
  },
  {
    language: "python",
    label: "Python",
    code: `import requests

files = {'file': open('samples/receipt.jpg', 'rb')}
response = requests.post(
    'http://localhost:3000/api/process', 
    files=files
)

result = response.json()
print(result)`
  }
]

const resultExamples = [
  {
    language: "curl",
    label: "cURL", 
    code: `curl -X GET "http://localhost:3000/api/result?jobId=abc123"`
  },
  {
    language: "node",
    label: "Node.js",
    code: `const response = await fetch("/api/result?jobId=abc123");
const result = await response.json();
console.log(result);`
  },
  {
    language: "python",
    label: "Python",
    code: `import requests

response = requests.get(
    'http://localhost:3000/api/result',
    params={'jobId': 'abc123'}
)

result = response.json()
print(result)`
  }
]

const features = [
  {
    icon: Zap,
    title: "Single Request",
    description: "One POST request returns extracted table data instantly"
  },
  {
    icon: Shield,
    title: "Secure Processing",
    description: "Files are processed in-memory and never stored"
  },
  {
    icon: Globe,
    title: "Standard REST",
    description: "Simple HTTP endpoints with JSON responses"
  }
]

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20 px-10">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
              API Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Extract tables with 1 API call
            </h1>
            <p className="text-xl text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
              Simple REST API for table extraction. Send a file, get structured data back.
            </p>
            
            <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl max-w-2xl mx-auto">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                📝 <strong>Demo Mode:</strong> This API currently returns mocked data. 
                Real engine integration points are ready for production deployment.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center shadow-sm">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-ink dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brand-ink-soft dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* API Endpoints */}
          <div className="space-y-12">
            {/* Process Endpoint */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    POST
                  </Badge>
                  <code className="text-lg font-mono">/api/process</code>
                </CardTitle>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  Upload a file and extract table data
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-ink dark:text-white mb-3">Request</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Content-Type:</strong> <code>multipart/form-data</code>
                    </div>
                    <div>
                      <strong>Body:</strong> <code>file</code> (File) - JPG, PNG, or PDF up to 15MB
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-ink dark:text-white mb-3">Response</h4>
                  <Card className="bg-slate-50 dark:bg-slate-900">
                    <CardContent className="p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`{
  "jobId": "abc123",
  "filename": "receipt.jpg",
  "mimetype": "image/jpeg",
  "status": "completed",
  "rows": [
    ["Item", "Qty", "Price", "Total"],
    ["Coffee", "2", "$4.50", "$9.00"],
    ["Sandwich", "1", "$8.95", "$8.95"]
  ]
}`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>

                <CodeTabs examples={processExamples} title="Code Examples" />
              </CardContent>
            </Card>

            {/* Result Endpoint */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    GET
                  </Badge>
                  <code className="text-lg font-mono">/api/result</code>
                </CardTitle>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  Retrieve processing results by job ID
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-ink dark:text-white mb-3">Parameters</h4>
                  <div className="text-sm">
                    <strong>jobId</strong> (string, required) - The job ID returned from /api/process
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-ink dark:text-white mb-3">Response</h4>
                  <Card className="bg-slate-50 dark:bg-slate-900">
                    <CardContent className="p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`{
  "jobId": "abc123",
  "filename": "receipt.jpg", 
  "mimetype": "image/jpeg",
  "status": "completed",
  "rows": [
    ["Item", "Qty", "Price", "Total"],
    ["Coffee", "2", "$4.50", "$9.00"]
  ]
}`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>

                <CodeTabs examples={resultExamples} title="Code Examples" />
              </CardContent>
            </Card>
          </div>

          {/* Error Handling */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Error Handling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-ink dark:text-white mb-2">400 Bad Request</h4>
                    <pre className="text-sm bg-slate-50 dark:bg-slate-900 p-3 rounded">
                      <code>{`{
  "error": "No file provided"
}`}</code>
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-ink dark:text-white mb-2">404 Not Found</h4>
                    <pre className="text-sm bg-slate-50 dark:bg-slate-900 p-3 rounded">
                      <code>{`{
  "error": "Job not found"
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Integration Notes
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    The API is designed for easy engine swapping. Real OCR integration will happen in 
                    <code className="mx-1 px-1 bg-blue-100 dark:bg-blue-800 rounded">lib/engines/provider.ts</code> 
                    using a strategy pattern without changing the API contract.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
