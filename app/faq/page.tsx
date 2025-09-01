import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqData = [
  {
    question: "Is this the real extractor?",
    answer: "v1 is a demo with mocked results so you can see the UX. The API contract won't change when a real engine is added."
  },
  {
    question: "Do you store files?",
    answer: "In the demo, no. Files are processed in-memory and discarded after the response."
  },
  {
    question: "What file types are supported?",
    answer: "JPG, PNG, and PDF in the demo. More formats will be added in future versions."
  },
  {
    question: "How accurate is it?",
    answer: "Accuracy depends on input quality. Claims will be published with benchmarks once the engine is live."
  },
  {
    question: "Can I integrate via API?",
    answer: "Yes. The local API is stable; swap the engine in lib/engines when ready."
  },
  {
    question: "Will there be pricing/auth?",
    answer: "Coming next. Pricing UI is already on /pricing with placeholder plans."
  },
  {
    question: "Is this free?",
    answer: "The demo is free. Pricing plans will be available soon with enhanced features and higher limits."
  },
  {
    question: "How fast is the processing?",
    answer: "Most documents are processed in 1-3 seconds. Larger PDFs may take longer once real processing is implemented."
  },
  {
    question: "What happens if processing fails?",
    answer: "The system will return an error message and you can retry. Common issues include unsupported file formats or files that are too large."
  },
  {
    question: "Can I process multiple files at once?",
    answer: "Yes, you can upload multiple files in the demo interface. Each file is processed independently."
  },
  {
    question: "What about data privacy?",
    answer: "Currently, all processing happens locally in your browser and files are not uploaded to servers. Future versions will include privacy controls."
  },
  {
    question: "How do I download results?",
    answer: "Once processing is complete, you can download results as CSV or Excel files, or copy the data to your clipboard."
  }
]

const categories = [
  {
    title: "Getting Started",
    items: faqData.slice(0, 4)
  },
  {
    title: "Technical & API",
    items: faqData.slice(4, 8)
  },
  {
    title: "Pricing & Privacy",
    items: faqData.slice(8, 12)
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
              FAQ
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our table extraction tool. Can't find what you're looking for? Contact us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 px-10">
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow bg-brand-accent/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-ink dark:text-white mb-2">
                  Getting Started
                </h3>
                <p className="text-sm text-brand-ink-soft dark:text-gray-400">
                  Basic questions about using the tool
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow bg-brand-accent/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-ink dark:text-white mb-2">
                  Technical & API
                </h3>
                <p className="text-sm text-brand-ink-soft dark:text-gray-400">
                  Integration and development questions
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow bg-brand-accent/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-ink dark:text-white mb-2">
                  Pricing & Privacy
                </h3>
                <p className="text-sm text-brand-ink-soft dark:text-gray-400">
                  Billing and data security questions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold text-brand-ink dark:text-white mb-6">
                  {category.title}
                </h2>
                
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.items.map((faq, index) => (
                        <AccordionItem 
                          key={`${categoryIndex}-${index}`}
                          value={`${categoryIndex}-${index}`}
                          className="border-b last:border-b-0"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <span className="font-medium text-brand-ink dark:text-white">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-brand-ink-soft dark:text-gray-400">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-16 bg-brand/5 border-brand/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-brand-ink dark:text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-brand-ink-soft dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                We're here to help! Reach out to our support team for personalized assistance with your table extraction needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@extracttable.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand text-brand rounded-lg hover:bg-brand/5 transition-colors"
                >
                  Try the Demo
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
