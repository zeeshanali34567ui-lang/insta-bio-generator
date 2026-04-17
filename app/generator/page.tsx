import { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Instagram Bio Generator Tool | Create Stylish Bios",
  description: "Create stylish, aesthetic, and cool Instagram bios instantly using our free AI powered generator. No sign-up required.",
  alternates: {
    canonical: "/generator",
  },
}

export default function GeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Instagram Bio Generator Tool",
            url: "https://profilebiogenerator.site/generator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description: "Free AI-powered Instagram bio generator to create stylish and cool bios.",
          }),
        }}
      />
      <HeroSection />
    </>
  )
}
