import { StoreIcon, GaugeIcon, PlugIcon, RefreshCwIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  {
    icon: StoreIcon,
    value: "180+",
    label: "Stores shipped",
    blurb: "From Shopify Plus rollouts to headless Next.js—each with performance budgets and analytics baselines.",
  },
  {
    icon: GaugeIcon,
    value: "6wk",
    label: "Typical MVP",
    blurb: "Measured from signed SOW to production cutover for focused storefronts; larger replatforms get phased milestones.",
  },
  {
    icon: PlugIcon,
    value: "40+",
    label: "Integration patterns",
    blurb: "ERP, 3PL, tax, payments, and marketing tools—idempotent jobs, alerts, and runbooks included.",
  },
  {
    icon: RefreshCwIcon,
    value: "85%",
    label: "Retainer renewal",
    blurb: "Most clients keep an embedded squad after launch for experiments, releases, and the integrations backlog.",
  },
]

export function AboutStats() {
  return (
    <SectionWrapper className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              By the numbers
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Small team. <span className="text-signal">Serious throughput.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A snapshot of how we measure delivery—not vanity hours billed.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 100} direction="up">
            <div className="group relative h-full overflow-hidden rounded-none border border-ink/10 bg-card p-7 transition hover:border-signal/40 md:p-9">
              <div className="grid w-full grid-cols-[auto_1fr] gap-7">
                <div className="flex flex-col items-start gap-3">
                  <span className="flex size-12 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <s.icon className="size-5" />
                  </span>
                  <div className="text-5xl font-bold leading-none tracking-tight text-ink md:text-6xl">
                    {s.value}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">{s.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.blurb}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
