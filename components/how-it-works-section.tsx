import { Settings2, Sparkles, ClipboardCopy } from "lucide-react"

const steps = [
  {
    icon: Settings2,
    step: "01",
    title: "Choose Your Style",
    description:
      "Select from 10+ tones like Attitude, Cool, Stylish, VIP, Swag, Professional, Funny, and more. Pick a category that matches your vibe.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Generate Instantly",
    description:
      "Click the generate button and our AI-powered algorithm creates 5 unique, personalized Instagram bios tailored just for you.",
  },
  {
    icon: ClipboardCopy,
    step: "03",
    title: "Copy & Paste",
    description:
      "Love a bio? Simply hit the copy button and paste it directly to your Instagram profile. It is that easy - no sign up required.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Generate Your Perfect Bio in 3 Simple Steps
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our Instagram Bio Generator is designed to be fast, easy, and
              free. No sign-up, no hassle - just perfect bios in seconds.
            </p>

          </div>

            <div className="mt-10 flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.step} className="flex gap-5">
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    {step.step !== "03" && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
