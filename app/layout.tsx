import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const siteUrl = "https://profilebiogenerator.site"

export const metadata: Metadata = {
  title: {
    default: "10,000+ Best Instagram Bio Ideas for Boys & Girls (2026)",
    template: "%s | InstaBioGen",
  },
  description:
    "Copy & paste the best Instagram bios! Get 10,000+ attitude, cool, stylish, motivational, and aesthetic bio ideas for boys, girls, and businesses. Generate unique bios instantly for free.",
  keywords: [
    "instagram bio ideas for boys",
    "cool instagram bio for boys",
    "attitude bio for boys instagram",
    "stylish instagram bio for boys",
    "instagram bio for girls",
    "aesthetic instagram bio",
    "best instagram bio 2026",
    "instagram bio generator"
  ],
  authors: [{ name: "InstaBioGen" }],
  creator: "InstaBioGen",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "InstaBioGen",
    title: "10,000+ Best Instagram Bio Ideas & Free AI Generator",
    description:
      "Stand out on Instagram! Copy & paste 10,000+ attitude, cool, stylish, and aesthetic bios instantly with our free AI generator tool.",
  },
  twitter: {
    card: "summary_large_image",
    title: "10,000+ Best Instagram Bio Ideas for Boys & Girls",
    description:
      "Copy & paste the best Instagram bios! Get 10,000+ attitude, stylish, and aesthetic ideas instantly.",
    creator: "@instabiogen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
