import { SendIcon, MailCheckIcon, CalendarCheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const stages = [
  {
    num: "01",
    icon: SendIcon,
    title: "You send your brief",
    desc: "Use the form below or call. A few lines about platform, catalog, and deadline is enough to get started.",
  },
  {
    num: "02",
    icon: MailCheckIcon,
    title: "We reply within 1 business day",
    desc: "A lead responds with milestone ideas, a rough estimate band, or questions to de-risk scope.",
  },
  {
    num: "03",
    icon: CalendarCheckIcon,
    title: "We schedule a working session",
    desc: "Video workshop or technical deep dive—whatever fits how your team decides.",
  },
]

export function ContactCards() {
  return (
    <SectionWrapper id="next-steps" className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              What happens next
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Three short steps. <span className="text-signal">No runaround.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every inquiry gets the same treatment—fast, transparent, and grounded in what you need to fund internally.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {stages.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100} direction="up">
            <div className="group relative h-full rounded-none border border-ink/10 bg-card p-7 transition hover:border-signal/40 md:p-8">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold tracking-tight text-signal/70 md:text-5xl">{s.num}</span>
                <span className="flex size-11 items-center justify-center rounded-none bg-ink text-white">
                  <s.icon className="size-5" />
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-ink md:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
