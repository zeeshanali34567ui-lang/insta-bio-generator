import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "Alex M.",
        role: "Content Creator",
        content:
            "This generator changed the game for me. I was struggling to find the right words to sound professional yet edgy, and this gave me the perfect bio in seconds.",
        rating: 5,
        avatar: "AM",
        color: "bg-blue-500",
    },
    {
        name: "Rahul Sharma",
        role: "Fitness Coach",
        content:
            "Absolutely love the motivational bios! It perfectly captures the vibe of my fitness page. I copied one and my follower engagement is already up.",
        rating: 5,
        avatar: "RS",
        color: "bg-green-500",
    },
    {
        name: "James T.",
        role: "Gamer & Streamer",
        content:
            "The 'Attitude' and 'Gaming' tones are fire. Seriously the best free tool out there. I didn't even have to sign up.",
        rating: 5,
        avatar: "JT",
        color: "bg-purple-500",
    },
]

export function TestimonialsSection() {
    return (
        <section className="bg-card py-16 lg:py-24 border-t border-border">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Wall of Love
                    </span>
                    <h2
                        className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Loved by Thousands of Creators Globally
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        See what thousands of boys, influencers, and professionals are saying about our bio generator.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                        >
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                                <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${testimonial.color}`}
                                >
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
