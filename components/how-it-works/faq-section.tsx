import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    q: "Do we have to use your hosting?",
    a: "No. We work in your Git org, your Shopify or cloud accounts, and your observability stack. We document handoffs so you are never locked in.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Yes—that is our default. We embed in your rituals (Slack, Linear, GitHub) and leave runbooks so your engineers can own day-two operations.",
  },
  {
    q: "How do you handle SEO during migrations?",
    a: "Redirect maps, parity checks, and staged crawl comparisons before DNS moves. We do not flip traffic until both teams sign the cutover checklist.",
  },
  {
    q: "What if scope changes mid-project?",
    a: "We track change requests in writing with impact on timeline and budget. No surprise invoices—if it is not approved, it is not in sprint.",
  },
  {
    q: "What does a retainer include?",
    a: "A monthly bucket of hours with a named lead, prioritized backlog grooming, incident response where contracted, and quarterly roadmap reviews.",
  },
  {
    q: "How fast do you respond?",
    a: "We target same-day replies during business hours and always within one business day for structured inquiries through the contact form.",
  },
]

export function FaqSection() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Common <span className="text-signal">questions.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-6 md:self-end md:text-base">
            Short answers to what commerce leaders ask before they sign. If yours is not here, message us—we reply within one business day.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {faqs.map((faq, i) => (
          <ScrollReveal key={faq.q} delay={i * 80} direction="up">
            <div className="group relative h-full rounded-none border border-ink/10 bg-card p-6 transition hover:border-signal/40 md:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-signal">Q.0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink md:text-xl">{faq.q}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{faq.a}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
