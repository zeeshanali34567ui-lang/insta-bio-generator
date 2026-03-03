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

const siteUrl = "https://instabiogen.com"

export const metadata: Metadata = {
  title: {
    default: "Instagram Bio Generator | InstaBioGen",
    template: "%s | InstaBioGen",
  },
  description:
    "Generate cool Instagram bio for boys instantly with our AI-powered tool. Get 100+ attitude, stylish, professional, funny & motivational Instagram bio ideas for boys in 2026.",
  keywords: [
    "instagram bio ideas for boys",
    "cool instagram bio for boys",
    "attitude bio for boys instagram",
    "stylish instagram bio for boys",
    "instagram bio for boys 2026",
  ],
  authors: [{ name: "InstaBioGen" }],
  creator: "InstaBioGen",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "InstaBioGen",
    title: "Instagram Bio Generator",
    description:
      "Generate cool Instagram bio for boys instantly with our AI-powered tool. Perfect for attitude, stylish, professional, funny, and motivational bios.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Bio Generator",
    description:
      "Generate cool Instagram bio for boys instantly with our AI-powered tool.",
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
