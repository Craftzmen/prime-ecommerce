import { QuoteIcon, StarIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const featured = {
  text: "They pushed back on scope creep from our old agency and still hit the Shopify Plus launch date. Checkout latency dropped, and the experiment backlog finally moves every sprint.",
  author: "Jordan M.",
  role: "VP E-commerce, apparel brand",
  rating: 5,
}

const secondary = {
  text: "We have run three major integrations through Prime—ERP, 3PL, and tax. Documentation is adult, on-call is real, and nobody disappears after go-live.",
  author: "Priya S.",
  role: "Director of Digital, consumer goods",
  rating: 5,
}

const trustLogos = ["Summit Outfitters", "Harbor Home Co.", "Atlas Supplements", "Red River Pantry", "Lone Star Mercantile"]

export function TestimonialsSection() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              Client stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Trusted by <span className="text-signal">teams who ship revenue, not decks.</span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 text-signal md:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-5 fill-current" />
            ))}
            <span className="ml-2 text-xs font-bold uppercase tracking-wider text-ink/60">5.0 average</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <ScrollReveal direction="left" className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-none bg-ink p-8 text-white md:p-12">
            <QuoteIcon aria-hidden className="pointer-events-none absolute -right-6 -top-6 size-44 opacity-10" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-2 text-signal">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-current" />
                ))}
              </div>

              <blockquote className="mb-10 text-2xl font-semibold leading-snug tracking-tight md:text-3xl lg:text-4xl">
                &ldquo;{featured.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex size-14 items-center justify-center rounded-none bg-signal text-lg font-bold text-white">
                  {featured.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-white">{featured.author}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-signal">{featured.role}</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <ScrollReveal direction="right">
            <div className="relative rounded-none border border-ink/10 bg-card p-6 shadow-sm md:p-8">
              <QuoteIcon aria-hidden className="absolute -left-2 -top-2 size-7 text-signal opacity-30" />

              <div className="mb-4 flex items-center gap-1.5 text-signal">
                {Array.from({ length: secondary.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5 fill-current" />
                ))}
              </div>

              <blockquote className="text-base font-medium leading-relaxed text-ink md:text-lg">
                &ldquo;{secondary.text}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-5">
                <div className="flex size-10 items-center justify-center rounded-none bg-signal text-xs font-bold text-white">
                  {secondary.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{secondary.author}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{secondary.role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="rounded-none border border-signal/30 bg-signal/5 p-6 md:p-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Recent partners</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {trustLogos.map((l) => (
                  <span key={l} className="text-sm font-bold tracking-tight text-ink/65">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
