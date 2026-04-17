import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog - Instagram Bio Ideas, Tips & Guides",
  description:
    "Explore our blog for the latest Instagram bio ideas for boys, girls, and businesses. Get tips, guides, and inspiration for a perfect social media profile.",
  alternates: {
    canonical: "https://profilebiogenerator.site/blog",
  },
  openGraph: {
    title: "Blog - Instagram Bio Ideas, Tips & Guides | InstaBioGen",
    description:
      "Explore our blog for Instagram bio ideas, tips, and guides for every personality and style.",
    url: "https://profilebiogenerator.site/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Instagram Bio Ideas, Tips & Guides",
    description: "Explore our blog for the latest Instagram bio ideas for boys, girls, and businesses.",
  },
}

export default function BlogPage() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Instagram Bio Ideas Blog
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore our collection of Instagram bio ideas for boys, girls,
            businesses, gamers, and more. Fresh content, updated regularly for
            2026.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    {post.category}
                  </span>
                </div>

                <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
