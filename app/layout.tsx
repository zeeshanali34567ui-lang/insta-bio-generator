import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import Script from "next/script"
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
    default: "Instagram Bio Generator 2026 – Create Stylish Bios",
    template: "%s | InstaBioGen",
  },
  icons: {
    icon: "/fav_icon.png",
  },
  description:
    "Create stylish Instagram bios instantly with our free AI Bio Generator. Explore top ideas for boys & girls, including attitude, cool, and VIP styles.",
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
    title: "Instagram Bio Generator 2026 – Create Stylish Bios",
    description:
      "Create stylish Instagram bios instantly with our free AI Bio Generator. Explore top ideas for boys & girls, including attitude, cool, and VIP styles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Bio Generator 2026 – Create Stylish Bios",
    description:
      "Create stylish Instagram bios instantly with our free AI Bio Generator. Explore top ideas for boys & girls, including attitude, cool, and VIP styles.",
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
  verification: {
    google: "g4UN8qZBakpycCcAlG-QrqwigzDDGs3HvJZB3Su1iLA",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2YJ572314"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X2YJ572314');
          `}
        </Script>
      </head>
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
