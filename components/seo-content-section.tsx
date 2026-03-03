import Link from "next/link"
import Image from "next/image"

export function SeoContentSection() {
  return (
    <section className="border-t border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Left: Main content (3 cols) */}
          <div className="lg:col-span-3">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Ultimate Guide to Instagram Bio Ideas for Boys
            </h2>

            <div className="mt-8 flex flex-col gap-8 text-muted-foreground">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Why a Great Instagram Bio Matters
                </h3>
                <p className="leading-relaxed">
                  Your Instagram bio is the first thing people see when they visit
                  your profile. A well-crafted Instagram bio for boys can make a
                  lasting impression and help you gain more followers. Whether you
                  are looking for an attitude bio for boys Instagram profiles or a
                  simple Instagram bio for boys, the right words can define your
                  online personality.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Cool Instagram Bio for Boys: Stand Out from the Crowd
                </h3>
                <p className="leading-relaxed">
                  A cool bio for Instagram for boys should reflect your unique
                  personality. From trendy one-liners to creative Instagram bio
                  ideas for boys, the options are endless. Our AI-powered tool helps
                  you find the best Instagram bio for boys by generating personalized
                  bios based on your preferred tone and style. Whether you want
                  something cool, professional, or funny, we have got you covered.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Trending Instagram Bio for Boys 2026
                </h3>
                <p className="leading-relaxed">
                  Staying up-to-date with trending Instagram bios is essential.
                  Instagram bio for boys 2026 trends include minimalist bios, emoji-rich
                  descriptions, and motivational quotes. Our generator is constantly
                  updated with the latest Instagram bio captions for boys and
                  Instagram bio quotes for boys that are perfect for the current year.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Instagram Bio Ideas: Copy and Paste Ready
                </h3>
                <p className="leading-relaxed">
                  Looking for Instagram bio ideas for boys copy paste ready? Our tool
                  generates bios that you can instantly copy and paste directly to
                  your Instagram profile. Each bio is unique and crafted to help you
                  stand out. Generate unique Instagram bio for boys in seconds
                  without any sign-up or hassle.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Sidebar (2 cols) */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/stats-section.jpg"
                alt="Instagram growth analytics showing increasing engagement and followers"
                width={500}
                height={350}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Explore More */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Explore More Bio Ideas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Beyond boys bios, we also cover:
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {[
                  { href: "/blog/instagram-bio-ideas-for-girls", label: "Instagram Bio Ideas for Girls" },
                  { href: "/blog/instagram-business-bio-ideas", label: "Instagram Business Bio Ideas" },
                  { href: "/blog/aesthetic-instagram-bio-ideas", label: "Aesthetic Instagram Bio Ideas" },
                  { href: "/blog/instagram-bio-ideas-for-gamers", label: "Gaming Instagram Bio Ideas" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
