import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

import { SeoContentSection } from "@/components/seo-content-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { FaqSection } from "@/components/faq-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />

      <UseCasesSection />
      <TestimonialsSection />

      <SeoContentSection />
      <BlogPreviewSection />
      <FaqSection />
    </>
  )
}
