import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-brand-ink-soft dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  By accessing and using ExtractTable, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  ExtractTable is a table extraction service that converts images and PDFs containing 
                  tables into structured data formats (CSV, XLSX).
                </p>
                
                <h4>Demo Version</h4>
                <p>
                  The current version is a demonstration with mocked results. It is provided for 
                  evaluation purposes and should not be used for production workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>You agree to:</p>
                <ul>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not upload copyrighted material without permission</li>
                  <li>Not attempt to reverse engineer or compromise the service</li>
                  <li>Not use the service to process sensitive personal data in the demo version</li>
                  <li>Respect file size and usage limits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  The ExtractTable service, including its design, functionality, and underlying 
                  technology, is owned by us and protected by intellectual property laws.
                </p>
                <p>
                  You retain ownership of the files you upload and the data extracted from them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  We strive to maintain service availability but cannot guarantee uninterrupted access. 
                  The service may be temporarily unavailable for maintenance, updates, or due to 
                  circumstances beyond our control.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  The demo service is provided "as is" without warranties of any kind. We are not 
                  liable for any damages arising from the use of the service, including but not 
                  limited to data loss, processing errors, or service interruptions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Future Changes</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  When we transition from demo to production service:
                </p>
                <ul>
                  <li>Paid plans and authentication will be introduced</li>
                  <li>Service level agreements will be established</li>
                  <li>Enhanced features and support will become available</li>
                  <li>These terms will be updated accordingly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted 
                  on this page with an updated revision date. Continued use of the service 
                  constitutes acceptance of modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:legal@extracttable.com" className="text-brand hover:underline">
                    legal@extracttable.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
