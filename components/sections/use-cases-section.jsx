import { Receipt, FileText, CreditCard, FlaskConical, MenuIcon, DollarSign } from "lucide-react"
import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"

const icons = [Receipt, FileText, CreditCard, FlaskConical, MenuIcon, DollarSign]

export function UseCasesSection() {
  return (
    <section className="py-20 bg-brand-accent/30 dark:bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-ink dark:text-white mb-4">
            Perfect for any document type
          </h2>
          <p className="text-lg text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
            Works with all kinds of tabular data from various sources
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {content.useCases.map((useCase, index) => {
            const Icon = icons[index]
            return (
              <div key={useCase} className="flex flex-col items-center p-4 rounded-xl hover:bg-white hover:shadow-sm dark:hover:bg-slate-800 transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand text-brand flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-brand-ink dark:text-white text-center">
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
