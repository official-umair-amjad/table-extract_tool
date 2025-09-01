import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-brand-ink-soft dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  At ExtractTable, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, and protect your information when you use our table extraction service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <h4>Demo Version</h4>
                <p>
                  In the current demo version, we do not collect or store any personal information or uploaded files. 
                  All processing happens locally in your browser.
                </p>
                
                <h4>Future Versions</h4>
                <p>When authentication and paid plans are introduced, we may collect:</p>
                <ul>
                  <li>Account information (email, name)</li>
                  <li>Usage analytics and metrics</li>
                  <li>Uploaded files (temporarily, for processing)</li>
                  <li>Billing information for paid plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>We use collected information to:</p>
                <ul>
                  <li>Provide and improve our table extraction service</li>
                  <li>Process your files and return extracted data</li>
                  <li>Communicate with you about service updates</li>
                  <li>Handle billing and account management</li>
                  <li>Analyze usage patterns to improve performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  We implement appropriate security measures to protect your data:
                </p>
                <ul>
                  <li>Files are processed in-memory and not permanently stored</li>
                  <li>All data transmission is encrypted (HTTPS)</li>
                  <li>Access controls and monitoring for our systems</li>
                  <li>Regular security audits and updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  <strong>Demo Version:</strong> No data is retained. Files are processed and immediately discarded.
                </p>
                <p>
                  <strong>Future Versions:</strong> We will retain your data only as long as necessary to provide 
                  our services, comply with legal obligations, and resolve disputes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  We may use third-party services for:
                </p>
                <ul>
                  <li>Analytics and performance monitoring</li>
                  <li>Payment processing (for paid plans)</li>
                  <li>Cloud infrastructure and storage</li>
                  <li>Customer support tools</li>
                </ul>
                <p>
                  These services have their own privacy policies and we encourage you to review them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:privacy@extracttable.com" className="text-brand hover:underline">
                    privacy@extracttable.com
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
