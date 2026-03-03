import { Zap, Copy, Users } from "lucide-react"
import { BioGeneratorTool } from "@/components/bio-generator-tool"

export function HeroSection() {
  return (
    <section id="generator" className="relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_50%)] opacity-[0.08]" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            #1 Instagram Bio Generator for Boys
          </span>
          <h1
            className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Instagram Bio Generator
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Generate cool, attitude, stylish, and professional Instagram bios
            for boys instantly. Choose your tone, add emojis, and copy-paste
            ready bios in seconds - 100% free.
          </p>
        </div>

        {/* Bio Generator Tool */}
        <div className="mx-auto mt-12 max-w-2xl">
          <BioGeneratorTool />
        </div>

        {/* Feature cards below the tool */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "AI-Powered",
              description: "Smart bio generation using advanced algorithms",
            },
            {
              icon: Copy,
              title: "Copy & Paste",
              description:
                "One-click copy for all generated Instagram bios",
            },
            {
              icon: Users,
              title: "10+ Tones",
              description:
                "Attitude, cool, stylish, VIP, swag, and more",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
