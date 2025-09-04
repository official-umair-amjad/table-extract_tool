import { Receipt, FileText, CreditCard, FlaskConical, MenuIcon, DollarSign } from "lucide-react"
import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"

const icons = [Receipt, FileText, CreditCard, FlaskConical, MenuIcon, DollarSign]

export function UseCasesSection() {
  return (
    <section className="py-20 bg-muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Perfect for any document type
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Works with all kinds of tabular data from various sources
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {content.useCases.map((useCase, index) => {
            const Icon = icons[index]
            return (
              <div key={useCase} className="flex flex-col items-center p-4 rounded-xl hover:bg-card hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-3 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {useCase}
                </span>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
