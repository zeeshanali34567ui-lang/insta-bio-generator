import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - InstaBioGen",
  description:
    "Get in touch with InstaBioGen. Have questions about our Instagram bio generator? Send us a message and we will get back to you within 24-48 hours.",
  alternates: {
    canonical: "https://profilebiogenerator.site/contact",
  },
  openGraph: {
    title: "Contact Us - InstaBioGen",
    description:
      "Get in touch with InstaBioGen. Questions about our Instagram bio generator? We are here to help.",
    url: "https://profilebiogenerator.site/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
