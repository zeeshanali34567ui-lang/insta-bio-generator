import { Brain, Clock, ShieldCheck, Flame, RefreshCcw, SmilePlus } from "lucide-react"

const reasons = [
  { icon: Clock, title: "Saves You Time", desc: "Instantly create high-quality bio ideas instead of spending hours brainstorming lines. Get the perfect profile summary in seconds." },
  { icon: Flame, title: "Highly Engaging Options", desc: "Engineered to maximize follower conversion rates and overall profile visibility with psychology-backed cool bios." },
  { icon: Brain, title: "AI-Powered Creativity", desc: "Utilizes massive data models to guarantee fresh, completely original attitude bios that haven't been overused on the platform." },
  { icon: RefreshCcw, title: "Always Updated", desc: "Constantly reflecting the absolute newest 2026 social media trends, popular hashtags, and emerging digital aesthetics." },
  { icon: ShieldCheck, title: "100% Free Forever", desc: "No restrictive paywalls, no required signups, no credit cards. Generate unlimited stylish bios entirely free of cost." },
  { icon: SmilePlus, title: "Multi-Tone Varieties", desc: "Access perfectly tailored vibes—VIP, Swag, Professional, Funny, Motivation—all organized under one clean ecosystem." }
]

export function WhyUseSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            Why Use Our Tool
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exactly why over 50,000+ top users choose our generator as their ultimate secret weapon for Instagram bio ideas.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
