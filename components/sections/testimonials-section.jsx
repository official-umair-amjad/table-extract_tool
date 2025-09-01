import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"
import Image from "next/image"

const logos = [
  "/testimonial-logos/google.png",
  "/testimonial-logos/Contrario.png",
  "/testimonial-logos/y-combinator.png",
  "/testimonial-logos/transparent.png"
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand dark:text-white mb-4">
            Trusted by teams everywhere
          </h2>
          <p className="text-lg text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
            See what our users are saying about our table extraction tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border-2 border-brand dark:border-slate-700">
              <blockquote className="text-lg text-brand-ink dark:text-white mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <cite className="text-brand-ink-soft dark:text-gray-400 font-medium not-italic">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>

        {/* Trust strip placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-brand-ink-soft dark:text-gray-400 mb-8">
            Used by teams at
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-75">
            {logos.map((logo, index) => (
              <div key={index} className="w-32 h-12 relative">
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  fill
                  className="object-contain filter dark:invert"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
