import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

import { SeoContentSection } from "@/components/seo-content-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { FaqSection } from "@/components/faq-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"

import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "InstaBioGen",
            url: "https://profilebiogenerator.site/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://profilebiogenerator.site/generator?category={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
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
