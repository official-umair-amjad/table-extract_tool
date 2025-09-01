import { Container } from "@/components/layout/container";
import { HeroUpload } from "@/components/sections/hero-upload";
import { SampleStrip } from "@/components/sections/sample-strip";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { StepsSection } from "@/components/sections/steps-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { content } from "@/content/copy";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-10 lg:py-25 
  bg-gradient-to-b from-brand-accent/60 to-white 
  dark:from-slate-900 dark:to-slate-800
  overflow-hidden"
      >
        {/* Background table grid */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-20"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
      `,
            backgroundSize: "100px 40px",
          }}
        />

        <Container className="relative">
          <div className="text-center space-y-2 lg:flex px-10">
            <div className="p-10 lg:w-2/3">
              <h1 className="text-xl md:text-5xl text-shadow-sm font-bold text-brand dark:text-white leading-tight">
                {content.hero.h1}
              </h1>
              <p className="mt-4 text-xl text-brand-ink-soft dark:text-gray-400 max-w-3xl mx-auto">
                {content.hero.subhead}
              </p>
            </div>
            <HeroUpload className="mb-5 lg:w-1/3" />
          </div>
        </Container>
      </section>

      {/* Sample Strip */}
      <SampleStrip />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Steps Section */}
      <StepsSection />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
