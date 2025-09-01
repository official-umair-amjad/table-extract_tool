import { Container } from "@/components/layout/container"
import { content } from "@/content/copy"
import Image from "next/image"

const stepImages = [
  "/shutter_ss_file.png",
  "/shutter_ss_converted.png",
  "/shutter_ss_dowload.png"
]

export function StepsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand dark:text-white mb-4">
            How it works
          </h2>
          <p className="text-lg text-brand-ink-soft dark:text-gray-400 max-w-2xl mx-auto">
            Three simple steps to extract tables from any image or PDF
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.steps.map((step, index) => {
            const imagePath = stepImages[index]
            return (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={imagePath}
                        alt={step.title}
                        width={step.width}
                        height={step.height}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-ink-soft dark:text-gray-400">
                    {step.description}
                  </p>
                </div>

                {/* {index < content.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand to-transparent transform translate-x-4" />
                )} */}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
