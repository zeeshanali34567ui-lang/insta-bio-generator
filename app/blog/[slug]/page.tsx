import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { getBlogPost, getAllSlugs, blogPosts } from "@/lib/blog-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://profilebiogenerator.site/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://profilebiogenerator.site/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

function renderContent(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let listKey = 0

  function flushList() {
    if (currentList.length > 0) {
      elements.push(
        <ul
          key={`list-${listKey++}`}
          className="flex flex-col gap-2 pl-6 list-disc text-muted-foreground"
        >
          {currentList.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )
      currentList = []
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()

    if (trimmed.startsWith("## ")) {
      flushList()
      elements.push(
        <h2
          key={`h2-${index}`}
          className="mt-8 text-2xl font-bold text-foreground"
        >
          {trimmed.replace("## ", "")}
        </h2>
      )
    } else if (trimmed.startsWith("### ")) {
      flushList()
      elements.push(
        <h3
          key={`h3-${index}`}
          className="mt-6 text-xl font-semibold text-foreground"
        >
          {trimmed.replace("### ", "")}
        </h3>
      )
    } else if (trimmed.startsWith("- ")) {
      currentList.push(trimmed.replace("- ", ""))
    } else if (trimmed.match(/^\d+\./)) {
      flushList()
      const text = trimmed.replace(/^\d+\.\s*/, "")
      const formatted = text.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-foreground">$1</strong>'
      )
      currentList.push(formatted)
    } else if (trimmed === "") {
      flushList()
    } else {
      flushList()
      elements.push(
        <p
          key={`p-${index}`}
          className="leading-relaxed text-muted-foreground"
        >
          {trimmed}
        </p>
      )
    }
  })

  flushList()
  return elements
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "InstaBioGen",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://profilebiogenerator.site",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://profilebiogenerator.site/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://profilebiogenerator.site/blog/${post.slug}`,
      },
    ],
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Blog
          </Link>

          <header>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>

            <h1
              className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {post.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          </header>

          <div className="mt-10 flex flex-col gap-4">
            {renderContent(post.content)}
          </div>

          {post.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="mt-6">
                {post.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {otherPosts.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="text-2xl font-bold text-foreground">
                Related Articles
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
                  >
                    <h3 className="text-sm font-semibold leading-snug text-foreground hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {new Date(related.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
