import { Zap, Target, Download } from "lucide-react"
import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"

const icons = [Zap, Target, Download]

export function BenefitsSection() {
  return (
    <section className="py-10 bg-brand/30 dark:bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-ink dark:text-white mb-4">
            Why choose our table extractor?
          </h2>
          <p className="text-lg text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
            Designed for speed and accuracy, no complex setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-5 md:px-10">
          {content.benefits.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <div key={benefit.title} className="text-center bg-white/80 dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-brand-ink-soft dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
