import { HistoryIcon, TargetIcon, EyeIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

interface PhilosophySection {
  num: string
  label: string
  icon: typeof HistoryIcon
  title: string
  desc: string
  bullets: string[]
}

const sections: PhilosophySection[] = [
  {
    num: "01",
    label: "History",
    icon: HistoryIcon,
    title: "Founded where launches were treated like theater.",
    desc: "Prime Auto Deals began when a small crew tired of agencies that sold roadmaps and outsourced the build. We standardized discovery, pricing, and engineering quality so clients could fund outcomes—not slide decks.",
    bullets: [],
  },
  {
    num: "02",
    label: "Mission",
    icon: TargetIcon,
    title: "Make commerce delivery legible again.",
    desc: "Our job is to shrink the gap between a signed SOW and a storefront your team can run—across design, data, integrations, and the day-two backlog.",
    bullets: [
      "Written milestones and owners",
      "Staging parity before cutover",
      "Instrumentation from day one",
      "No hidden change-order traps",
    ],
  },
  {
    num: "03",
    label: "Vision",
    icon: EyeIcon,
    title: "The team your CFO trusts on renewal day.",
    desc: "We want to be the partner your peers text after a bad vendor handoff—because we document decisions, ship on schedule, and still answer when traffic spikes on Black Friday.",
    bullets: [],
  },
]

export function AboutTabs() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
            Story · Mission · Vision
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            What <span className="text-signal">drives the work.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-6 md:space-y-8">
        {sections.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100} direction="up">
            <article className="grid gap-6 rounded-none border border-ink/10 bg-card p-7 md:grid-cols-12 md:gap-10 md:p-10">
              <div className="flex items-start gap-4 md:col-span-3">
                <span className="text-5xl font-bold tracking-tight text-signal/80 md:text-6xl">{s.num}</span>
                <div className="pt-1">
                  <span className="flex size-10 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <s.icon className="size-5" />
                  </span>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>
                {s.bullets.length > 0 ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 rounded-none border border-ink/10 bg-background p-3">
                        <CheckCircle2Icon className="size-4 shrink-0 text-signal" />
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/75">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
