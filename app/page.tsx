import { Metadata } from "next"
import { BioGeneratorTool } from "@/components/bio-generator-tool"
import { FaqSection } from "@/components/faq-section"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "InstaBioGen",
            url: "https://profilebiogenerator.site/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://profilebiogenerator.site/generator?category={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 bg-background text-foreground space-y-24">
        
        {/* 1. HERO SECTION */}
        <section id="generator" className="text-center space-y-8 mt-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            🚀 The #1 Free Tool
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Instagram Bio Generator: Transform Your Profile Instantly
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground text-pretty">
            Generate high-converting, aesthetic, and wildly unique Instagram bios in seconds. Claim your digital identity, stand out from the algorithmic noise, and turn casual profile visitors into fiercely loyal followers.
          </p>
          
          <div className="pt-2">
             <a href="#generator-tool" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
               Generate your bio now 🚀
             </a>
          </div>

          <div id="generator-tool" className="pt-8">
            <BioGeneratorTool />
          </div>
        </section>

        {/* 2. INTRO (PATTERN INTERRUPT / PAS) */}
        <section className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The Silent Killer of Your Social Growth</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Be brutally honest with yourself for a moment: When was the exact last time you critically analyzed, updated, and optimized your Instagram bio?
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you are like the vast majority of social media users, creators, and even seasoned business owners, the answer is probably "months ago," or maybe even "years ago." You spend countless hours obsessing over the perfect photo, editing short-form video reels until 2 AM, researching trending audio tracks, and strategically selecting the most optimal hashtags. You pour your heart, soul, and endless energy into the content you create. Yet, you completely, dangerously neglect the one single element that every single profile visitor is mathematically guaranteed to read: your bio.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We live in an ecosystem completely ruled by one-second attention spans. If your bio is generic, visually cluttered, overly complicated, or simply boring, people bounce. They leave immediately. You are leaving highly engaged followers, lucrative brand deals, and valuable real-world connections on the table every single day.
          </p>
          <p className="text-lg font-medium text-foreground bg-accent/10 p-4 rounded-lg border border-accent/20">
            An average, unoptimized bio is a silent killer for your growth. It acts as a massive, invisible wall between your amazing content and the "Follow" button. It’s time to stop blending into the background of a crowded platform. It’s time to step into the spotlight and demand the attention your content deserves.
          </p>
        </section>

        {/* 3. STORY-DRIVEN INTRO */}
        <section className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The True Cost of a Missed Connection</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Imagine this very real, very common scenario: A user is mindlessly scrolling through their explore page. The algorithm is serving them endless content. Suddenly, your content pops up. It's a masterpiece. It's an incredible reel that perfectly aligns with their exact interests. They watch it twice. They hit like. Intrigued, their curiosity is peaked, and they click on your profile picture to see who created this amazing piece of content.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Their thumb is hovering right over the "Follow" button. They are primed, ready, and willing to join your community. They <em>want</em> to be a fan. But then... their eyes dart to your bio.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            It’s the exact same tired, overused motivational quote that millions of other uninspired users are using. The spacing is a chaotic, hard-to-read mess. It says absolutely nothing compelling about who you are, what unique perspective you stand for, or why they should care enough to let you into their highly curated daily feed.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Within milliseconds, the psychological magic completely fades. The curiosity dies instantaneously. The momentum you worked so incredibly hard to build is destroyed in a fraction of a second. They hit the back button, returning to their endless scroll, and they are gone forever. You didn't just lose a view; you lost a highly engaged follower, a potential customer, or a true, dedicated fan.
          </p>
        </section>

        {/* 4. CORE UNDERSTANDING */}
        <section className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What is an Instagram Bio Generator?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Think of our platform as your personal, highly-trained digital architect, your brand strategist, and an elite Silicon Valley copywriter all rolled into one entirely free tool. Instead of staring blankly at a blinking cursor, feeling overwhelmed and wondering how you are supposed to summarize your entire complex existence, your deep passions, and your unique value proposition in a mere 150 characters, our tool does the heavy lifting for you.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              By analyzing your specific desired vibe, your exact niche, and your ultimate growth goals, our proprietary system crafts the absolute perfect pitch. From mesmerizing <strong>aesthetic instagram bio ideas</strong> that capture a mood, to incredibly sharp, professional summaries that drive leads, it delivers exactly what you need to transform your profile from amateur to elite.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Why Bios Matter Psychologically</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To understand why our tool is so devastatingly effective, you must understand the behavioral psychology of social media engagement. Humans are biologically wired for snap judgments. It’s an evolutionary survival mechanism adapted for the hyper-fast digital age. When a stranger lands on your profile, their brain subconsciously asks three rapid-fire questions in under two seconds:
            </p>
            <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground mt-4 mb-6 ml-4">
              <li><strong>Who is this person?</strong> (Identity & Niche Clarity)</li>
              <li><strong>What is their vibe or social status?</strong> (Aesthetic & Social Proof)</li>
              <li><strong>Why should I follow them right now?</strong> (Value Proposition & FOMO)</li>
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground">
              If your bio fails to answer all three of these questions instantly and effortlessly, cognitive friction occurs. You lose the psychological game, and you lose the follow.
            </p>
            <div className="my-8 text-center text-2xl font-bold text-primary">
              ✨ Your bio is your digital identity. ✨
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              It is the exact digital equivalent of how you dress, how you speak, and how you carry yourself when you walk into a crowded room. It signals your tribe to find you, establishes your social status, and communicates your immense value before you ever have to say a single word. When you use the right psychological triggers—infusing deep curiosity, demonstrating unshakeable authority, and showcasing magnetic relatability—you stop being just another random account. You become a magnetic, must-follow personality that people are actively afraid to miss out on.
            </p>
          </div>
        </section>

        {/* 5. CATEGORY AUTHORITY SECTIONS */}
        <section className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dominate Your Specific Niche</h2>
            <div className="mt-4 text-xl font-medium text-primary">
              ✨ Turn visitors into followers. ✨
            </div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Generic, one-size-fits-all advice fails because context is absolutely everything. No matter your specific niche, your background, or your ultimate goals, we have developed the perfect, mathematically proven high-converting formula. Let's explore exactly how the right words and intentional formatting will change everything for your specific profile.
            </p>
          </div>

          {/* Aesthetic */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-2xl font-bold">🌸 Aesthetic Instagram Bio Ideas</h3>
            <p className="text-lg text-muted-foreground">
              In the modern, hyper-visual web, aesthetics aren't just about pretty pictures; they are about creating a cohesive, deeply immersive, and emotional mood. An <strong>aesthetic instagram bio</strong> utilizes minimalist formatting, delicate and deliberate symbols, and poetic brevity to create a powerful sense of mystery, allure, and refined taste. When someone sees a perfectly crafted aesthetic bio, they immediately, subconsciously assume the content will be high-quality, curated, and worth their time.
            </p>
            <div className="bg-muted p-4 rounded-xl font-mono text-sm border-l-4 border-primary">
              chasing sunsets & slow mornings ☁️ | creating my own sunshine ✨ | art, life & everything in between 🕊️
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Why it works:</strong> It creates an immediate, visceral emotional connection. It doesn't aggressively beg for attention; rather, it gently pulls the reader in, setting a calming, highly aspirational tone that makes the user literally want to live in that reality.
            </p>
          </div>

          {/* Girls & Boys */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-2xl font-bold">👑 Instagram Bio for Girls & Boys</h3>
            <p className="text-lg text-muted-foreground">
              Your personal profile is your digital handshake to the world. It fundamentally dictates how your peers, potential partners, and friends perceive you before they ever meet you. Whether you want to project fierce confidence, sharp humor, undeniable intelligence, or quiet mystery, our system generates the perfect <strong>instagram bio for girls</strong> and the absolute sharpest <strong>instagram bio for boys</strong>.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">For the Girls</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm border-l-4 border-pink-500">
                  living fiercely 🦋 | romanticizing the ordinary ☕ | fashion & lifestyle 🤍
                </div>
                <p className="text-xs text-muted-foreground">Balances approachability with incredibly high standards. Projects high value and curation.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">For the Boys</h4>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                  building an empire 🚀 | less talk, more action ⚡ | fitness & finance 📈
                </div>
                <p className="text-xs text-muted-foreground">Communicates decisive action, unyielding drive, and clear, masculine interests.</p>
              </div>
            </div>
          </div>

          {/* Gamers */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-2xl font-bold">🎮 Gamer Bios</h3>
            <p className="text-lg text-muted-foreground">
              The global gaming community is highly perceptive and fiercely tribal. They instantly recognize authenticity and skill, and they violently reject fakes and try-hards. <strong>Gamer bios</strong> need to act as a highly specialized digital resume. They must instantly communicate your main games, your preferred platform, your streaming schedule, and your unique, highly entertaining personality.
            </p>
            <div className="bg-muted p-4 rounded-xl font-mono text-sm border-l-4 border-purple-500">
              headshots & high scores 🎯 | twitch partner 👾 | surviving in the digital world 🕹️ | catch me live 👉 [Link]
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Why it works:</strong> It uses highly relevant, niche-specific emojis that gamers recognize. It instantly tells other gamers exactly what you do, establishes massive authority (Twitch Partner), and drives immediate, trackable action to the stream link.
            </p>
          </div>

          {/* Business */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-2xl font-bold">💼 Business & Brand Bios</h3>
            <p className="text-lg text-muted-foreground">
              For driven entrepreneurs, ambitious founders, scaling startups, and established global companies, a <strong>business bio for instagram</strong> is arguably the most important 150 characters of marketing copy you will ever write. It is a hyper-condensed, high-stakes sales pitch. It absolutely must establish iron-clad authority, explicitly state the undeniable value proposition (exactly what is in it for the customer), and aggressively drive traffic to a conversion mechanism (a link).
            </p>
            <div className="bg-muted p-4 rounded-xl font-mono text-sm border-l-4 border-green-500">
              helping you scale to 6-figures without burnout 💸 | trusted by 10k+ elite founders 🏆 | grab your free growth guide below 👇
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Why it works:</strong> It utilizes a massive, undeniable hook. It actively eliminates a common objection ("without burnout"). It deploys massive, quantifiable social proof, and it features a clear, undeniable call to action pointing directly to the revenue-generating link.
            </p>
          </div>

          {/* Travel */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-2xl font-bold">🌍 Travel Bios for Instagram</h3>
            <p className="text-lg text-muted-foreground">
              Wanderlust requires incredibly compelling, visual storytelling. A great <strong>travel bio for instagram</strong> should trigger immediate, intense FOMO (Fear Of Missing Out) and make people desperately want to pack their bags, quit their boring 9-to-5 jobs, and join your global adventure.
            </p>
            <div className="bg-muted p-4 rounded-xl font-mono text-sm border-l-4 border-orange-500">
              collecting passport stamps, not things ✈️ | 35 countries and counting 🌎 | currently eating my way through: Tokyo 🗼🍣
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Why it works:</strong> It establishes a clear, relatable philosophy ("not things"). It builds massive, numerical authority (35 countries). It creates an open, highly engaging curiosity loop (currently in Tokyo), making followers psychologically need to watch your stories <em>right now</em> to see what you are doing.
            </p>
          </div>
        </section>

        {/* 6. STYLE & TREND SECTION */}
        <section className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Stylish & Unique Bios</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Social media trends move at an absolutely breakneck speed. What worked flawlessly and looked incredibly aesthetic in 2022 looks tired, wildly outdated, and "cheugy" today. To truly dominate your niche and stand out from the millions of active users, you need <strong>stylish, cool, unique bios</strong> that deeply reflect the very current pulse of digital culture.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If your bio looks like everyone else's, you become invisible to the algorithm and to users.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you are looking for <strong>cool instagram bios</strong> that utilize clever, unexpected formatting techniques, or <strong>unique instagram bio ideas</strong> that shatter the mold entirely with custom fonts, rare unicode symbols, and disruptive vertical spacing, staying ahead of the curve is an absolute necessity, not an option.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our system doesn't just randomly generate text; it generates <em>culture</em>. We constantly, algorithmically analyze platform trends, viral accounts, and subtle demographic shifts to update our massive, ever-evolving <strong>instagram bio template</strong> library. Evolve your aesthetic. Upgrade your style. Command unyielding attention.
          </p>
        </section>

        {/* 7. PRACTICAL VALUE SECTION (Tips and Mistakes) */}
        <section className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Tips to Write Better Bios</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Even with the absolute best <strong>instagram bio generator free</strong> at your fingertips, deeply understanding the anatomical structure of a perfect, highly-optimized bio gives you the ultimate competitive edge over your rivals.
            </p>
            <ul className="list-inside list-decimal space-y-3 text-lg text-muted-foreground ml-4">
              <li><strong>The Hook (Line 1):</strong> Your very first line is your digital headline. It must grab attention instantly. State exactly who you are, or more importantly, the massive value you provide to the viewer. Make it mathematically impossible to ignore.</li>
              <li><strong>The Authority/Relatability Anchor (Line 2):</strong> Back up your bold hook. Add a line that proves beyond a shadow of a doubt that you are worth listening to, OR a line that makes you deeply human, vulnerable, and relatable.</li>
              <li><strong>The Format (Structural Engineering):</strong> Never, ever write a massive, intimidating block of text. Use strategic vertical spacing (line breaks). Break up the text to make it highly, effortlessly skimmable.</li>
              <li><strong>The CTA (Line 4):</strong> Never leave your audience guessing about what to do next. Tell them exactly what to click, and explicitly tell them <em>why</em> they should click it right now.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Common Mistakes You Must Avoid at All Costs</h3>
            <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground ml-4">
              <li><strong>Aggressive Keyword Stuffing:</strong> Do not just list random words like a malfunctioning robot. While semantic keywords are important for SEO discoverability, human readability comes first.</li>
              <li><strong>Emoji Overload:</strong> Emojis are powerful visual cues, but using 15 of them in a row makes your profile look like cheap spam. Use them strategically as bullet points or emotional accents.</li>
              <li><strong>The "Vague Identity" Trap:</strong> Phrases like "Living life," "Wanderer," or "Just a girl" mean absolutely nothing. Be hyper-specific. Be unapologetically, intensely you.</li>
              <li><strong>Ignoring the Link Real Estate:</strong> Instagram gives you very few places to place a clickable, trackable link. If your bio does not point directly to that link with a highly compelling reason to click, you are failing fundamentally.</li>
            </ul>
          </div>
        </section>

        {/* 8. WHY CHOOSE US */}
        <section className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold flex items-center gap-2">⚡ Blazing Fast AI Speed</h3>
              <p className="mt-2 text-muted-foreground">Don't waste precious hours brainstorming. Generate hundreds of hyper-relevant, beautifully formatted, psychologically primed ideas in under 3 seconds flat.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold flex items-center gap-2">🧬 100% Unique Outputs</h3>
              <p className="mt-2 text-muted-foreground">We hate cliché, copy-pasted quotes as much as you do. Our engine guarantees no recycled garbage. You get fresh, custom-tailored copy that fits your exact, unique persona and niche.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold flex items-center gap-2">🎯 Conversion-Optimized</h3>
              <p className="mt-2 text-muted-foreground">This isn't just a random word generator. Our tool is engineered alongside top-tier SaaS copywriters. Every single template is psychologically designed to actually drive measurable clicks.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold flex items-center gap-2">🔓 Completely Free</h3>
              <p className="mt-2 text-muted-foreground">We deeply believe elite branding tools shouldn't be gatekept behind massive paywalls. Access the ultimate <strong>instagram bio generator free</strong> of charge, forever.</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FaqSection />

        {/* 9. FINAL CTA */}
        <section className="mx-auto max-w-3xl text-center space-y-8 py-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">The Unforgiving Cost of Inaction</h2>
          <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Listen closely: Your profile is actively getting views right now, at this very moment. Someone is looking at your page. They are judging your brand.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Every single second you wait, every moment you delay optimizing your profile, another visitor bounces. Another potential super-fan leaves. Another high-paying customer goes to your direct competitor simply because your bio failed to capture their attention and articulate your true value.
          </p>
          <p className="text-xl font-semibold text-foreground max-w-2xl mx-auto">
            Take complete control of your digital identity. Claim your space. Demand attention. Stand out, be unique, be noticed.
          </p>
          <div className="pt-8">
             <a href="#generator-tool" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
               Generate your bio now 🚀
             </a>
          </div>
        </section>

      </main>
    </>
  )
}
