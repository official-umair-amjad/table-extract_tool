import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"

export function FAQSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-ink dark:text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
            Quick answers to common questions about our table extraction tool
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {content.faqTeaser.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-brand-ink dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-ink-soft dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">View all FAQ</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
