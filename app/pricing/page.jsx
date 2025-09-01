import { Check } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out the service",
    features: [
      "10 demo files per day",
      "Basic table extraction",
      "CSV/XLSX export",
      "Community support",
      "Local processing (demo)",
      "No account required"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro", 
    price: "$29",
    period: "/month",
    description: "For professionals and small teams",
    features: [
      "Unlimited file processing",
      "Priority processing queue",
      "Large file support (up to 100MB)",
      "Advanced table detection",
      "API access",
      "Email support",
      "Batch processing",
      "Cloud storage integration"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Shared workspace",
      "Team management",
      "Usage analytics",
      "Custom integrations",
      "Priority support",
      "SLA guarantee",
      "White-label options"
    ],
    cta: "Contact Sales",
    popular: false,
    premium: true
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20 px-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any time.
            </p>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl max-w-2xl mx-auto">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                🚀 <strong>Coming Soon:</strong> Authentication and paid plans are in development. 
                The demo is currently free for everyone!
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-brand shadow-xl scale-105 bg-brand/20' : plan.premium? 'bg-brand-accent/20' : 'shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-brand text-white px-3 py-1 rounded-b-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-brand dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-brand dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-brand-ink-soft dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-brand-ink-soft dark:text-gray-400 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-ink dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-brand hover:bg-brand/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      disabled
                      title="Authentication coming soon"
                    >
                      {plan.cta}
                    </Button>
                    <p className="text-xs text-center text-brand-ink-soft dark:text-gray-400 mt-2">
                      Auth coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-brand-ink dark:text-white mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <h3 className="font-semibold text-brand-ink dark:text-white mb-2">
                  When will paid plans be available?
                </h3>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  We&apos;re working on authentication and billing integration. Paid plans will be available soon with enhanced features and higher limits.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <h3 className="font-semibold text-brand-ink dark:text-white mb-2">
                  What happens to my data?
                </h3>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  Currently, all processing happens locally and files are not stored. In future paid plans, you&apos;ll have options for cloud storage and processing.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <h3 className="font-semibold text-brand-ink dark:text-white mb-2">
                  Can I upgrade or downgrade plans?
                </h3>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  Yes, once billing is available, you&apos;ll be able to change plans at any time. Changes will be prorated automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
