"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the best Instagram bio ideas for boys?",
    answer:
      "The best Instagram bio ideas for boys include attitude bios, cool bios, stylish bios, and motivational quotes. Our AI-powered generator creates unique bio ideas tailored to your personality. Choose from 10+ tones including VIP, swag, professional, funny, and creative styles.",
  },
  {
    question: "How do I create a cool Instagram bio for boys?",
    answer:
      "To create a cool Instagram bio for boys, use our free bio generator tool. Simply select the 'Cool' tone, optionally enter your name, toggle emojis and hashtags, and click Generate. You'll get 5 unique copy-paste ready bios instantly. You can regenerate as many times as you like.",
  },
  {
    question:
      "Can I generate attitude bio for boys Instagram profiles for free?",
    answer:
      "Yes, our Instagram bio generator is completely free to use. You can generate unlimited attitude bios for boys by selecting the 'Attitude' tone. Each generation provides 5 unique variations with one-click copy functionality.",
  },
  {
    question: "What makes a stylish Instagram bio for boys?",
    answer:
      "A stylish Instagram bio for boys typically includes elegant wording, fashion-related references, and a touch of class. Use our generator with the 'Stylish' tone to get bios that combine sophistication with personality. Add emojis for extra flair.",
  },
  {
    question: "How often should I change my Instagram bio?",
    answer:
      "It's recommended to update your Instagram bio every few weeks or whenever you achieve something new. A fresh bio keeps your profile interesting and can attract new followers. Use our generator to get trending Instagram bio ideas for boys in 2026.",
  },
  {
    question: "Can I use these bios for other social media platforms?",
    answer:
      "Absolutely! While our tool specializes in Instagram bio ideas for boys, the generated bios work great on Facebook, Twitter, LinkedIn, and other social media platforms. They are versatile enough for any profile description.",
  },
  {
    question:
      "What is the best short Instagram bio for boys?",
    answer:
      "Short Instagram bios are impactful and memorable. Select the 'Simple' tone in our generator for concise one-liner bios. Examples include motivational quotes, attitude statements, and cool one-word descriptions with emojis.",
  },
  {
    question:
      "How do I make a professional Instagram bio for boys?",
    answer:
      "For a professional Instagram bio, choose the 'Professional' tone in our generator. Add your real name, select 'Entrepreneur' or 'Student' category, and the tool will create bios that highlight your career goals and achievements.",
  },
]

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about Instagram bio ideas for boys and
            our free bio generator tool.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => (
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
    </section>
  )
}
