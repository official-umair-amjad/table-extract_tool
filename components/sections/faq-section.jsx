import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"

export function FAQSection() {
  return (
    <section className="py-20 bg-surface-variant">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our table extraction tool
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {content.faqTeaser.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
