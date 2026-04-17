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
      <HeroSection />
    </>
  )
}
