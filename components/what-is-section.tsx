import { Info } from "lucide-react"

export function WhatIsSection() {
  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Info className="h-4 w-4" />
          The AI Revolution in Bio Generation
        </div>
        <h2 
          className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What is an Instagram Bio Generator?
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground text-left max-w-3xl mx-auto p-8 rounded-3xl bg-card border border-border shadow-sm">
          <p>
            An <strong>Instagram Bio Generator</strong> is an advanced AI-powered tool specifically designed to help you craft the perfect social media introduction without the intense creative block. Your Instagram bio is your digital billboard—it is the first thing potential followers, brands, and friends see when they land on your profile. Relying on an outdated or generic bio means you risk losing engagement and follower growth within the crucial first 3 seconds of a profile visit.
          </p>
          <p>
            Our tool analyzes millions of highly successful profiles to curate 100% unique, engaging, and copy-paste ready bios at the click of a button. Whether your aesthetic demands a <em>stylish bio</em>, a highly-confident <em>attitude bio</em> for boys, or simply cool bio ideas to showcase your humor, our algorithm configures emojis, styling, and tone perfectly. Say goodbye to scrolling through endless lists of overused text. Generate, preview, and instantly elevate your Instagram identity completely free of charge.
          </p>
        </div>
      </div>
    </section>
  )
}
