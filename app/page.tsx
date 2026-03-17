import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

import { SeoContentSection } from "@/components/seo-content-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { FaqSection } from "@/components/faq-section"
import { FeaturesSection } from "@/components/features-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />

      <SeoContentSection />
      <BlogPreviewSection />
      <FaqSection />
    </>
  )
}
