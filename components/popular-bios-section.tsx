import { Copy } from "lucide-react"

const bioCategories = [
  {
    category: "Stylish Bios",
    bios: [
      "✨ Living life in my own lane \n🌟 Dreamer by night, achiever by day \n👑 Unstoppable",
      "🎨 Creating my own sunshine \n✨ Designer of my own reality \n💫 Chasing stars",
      "🖤 Elegance is an attitude \n✨ Minimalist soul \n🌟 Less perfection, more authenticity",
      "✨ Radiating positive vibes only \n🌟 Living for the moments you can't put into words",
      "👑 Masterpiece in progress \n✨ Painting life with my own colors \n🌟 Unique edition",
      "💫 Turning dreams into vision \n✨ Vision into reality \n🌟 Watch me glow",
      "🎨 Art is my middle name \n✨ Living a life colored by imagination",
      "✨ Always dressed in confidence \n🌟 Wearing my invisible crown daily",
    ]
  },
  {
    category: "Attitude Bios",
    bios: [
      "🔥 Born to stand out \n⚡ Rule breaker \n💯 Zero apologies given",
      "💯 I don't follow trends, I set them \n🔥 Unleashing my inner beast",
      "⚡ They told me I couldn't \n🔥 So I did \n💯 Watch me do it again",
      "🔥 No permission needed \n💯 Simply living by my own rules",
      "⚡ Excellence is not an act, it's my habit \n🔥 Born ready",
      "💯 Not here to fit in \n🔥 Here to take over \n⚡ Legacy builder",
      "🔥 My attitude reflects your behavior \n💯 Choose wisely",
      "⚡ Speak less, act more \n🔥 Let success make the noise",
    ]
  },
  {
    category: "Cool Bios",
    bios: [
      "🌊 Going with the flow \n🤙 Keeping it real since day one \n🌴 Chill vibes only",
      "🎮 Professional over-thinker \n🎧 Music addict \n✌️ Pizza enthusiast",
      "🤙 I put the 'Elation' in Public Relations \n🌊 Enjoying the ride",
      "🌴 Collecting memories \n✌️ Not things \n🌊 Wanderlust soul",
      "🎧 Life is short \n🤙 Smile while you still have teeth",
      "✌️ Too cool for your rules \n🌊 Riding the waves of adventure",
      "🌴 Sun-kissed and totally blessed \n🤙 Taking life one day at a time",
      "🎧 Soundtrack of my life currently playing \n✌️ Do not disturb",
    ]
  },
  {
    category: "VIP Bios",
    bios: [
      "💎 Premium edition \n🏆 Born to lead \n👑 Operating at the highest level",
      "👑 CEO of my own life \n💎 Exclusive access only \n🏆 Making history",
      "🏆 Focus on the vision \n💎 Ignore the noise \n👑 Future billionaire",
      "💎 Top tier mindset \n👑 Building an empire \n🏆 Elite standards",
      "👑 Rare breed \n💎 Adding value daily \n🏆 Strictly business",
      "🏆 Playing the long game \n💎 High value, low tolerance for drama",
      "💎 Master of my fate \n👑 Captain of my soul \n🏆 Unlimited access",
      "🏆 Setting the gold standard \n💎 Elevating everyone around me",
    ]
  }
]

export function PopularBiosSection() {
  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            Popular Instagram Bio Ideas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our hand-picked selection of top-performing Instagram bios. Use our generator to create thousands more combinations tailored just for you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bioCategories.map((group) => (
            <div key={group.category} className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-primary border-b border-border pb-2">
                {group.category}
              </h3>
              <div className="flex flex-col gap-4">
                {group.bios.map((bio, idx) => (
                  <div key={idx} className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                    <p className="whitespace-pre-line text-sm text-muted-foreground">
                      {bio}
                    </p>
                    <button 
                      className="absolute top-2 right-2 p-1.5 rounded-md bg-muted text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
