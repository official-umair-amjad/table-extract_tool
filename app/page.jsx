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
  bg-gradient-to-b from-brand-accent/60 to-transparent
  overflow-hidden transition-colors duration-300"
      >
        {/* Background table grid */}
        <div
  className="
    absolute inset-0 opacity-[0.15]
    bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
    bg-[length:100px_40px]
    transition-opacity duration-300
  "
/>

        {/* Hero content */}



        <Container className="relative">
          <div className="text-center space-y-2 lg:flex md:px-10">
            <div className="md:p-10 p-5 lg:w-2/3">
              <h1 className="text-2xl md:text-5xl text-shadow-sm font-bold text-brand dark:text-foreground leading-tight transition-colors duration-300">
                {content.hero.h1}
              </h1>
              <p className="mt-4 text-lg text-brand-ink-soft dark:text-muted-foreground max-w-3xl mx-auto transition-colors duration-300">
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
