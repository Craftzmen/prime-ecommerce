import Link from "next/link"
import { ArrowRightIcon, MessageSquareIcon, SearchIcon, RocketIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    icon: MessageSquareIcon,
    title: "Discover",
    desc: "We align on catalog complexity, platforms, integrations, and success metrics—then produce a written roadmap with milestones and owners.",
    bullets: ["Technical audit", "Analytics baseline", "Scope & timeline"],
  },
  {
    num: "02",
    icon: SearchIcon,
    title: "Design & prototype",
    desc: "Design system, key templates, and checkout flows in staging—reviewed with your team before we pour concrete into the theme.",
    bullets: ["Figma + component spec", "CRO hypotheses", "Content model"],
  },
  {
    num: "03",
    icon: RocketIcon,
    title: "Build & grow",
    desc: "Ship in slices with QA, performance budgets, and launch playbooks—then stay on retainer for releases, experiments, and integrations.",
    bullets: ["Staging sign-off", "Cutover checklist", "Post-launch backlog"],
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper className="relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
                How we work
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
                A simple <br />
                <span className="text-signal">three-step partnership.</span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Same rhythm for a net-new DTC launch or a messy replatform—scaled to your risk tolerance, never rushed past staging.
              </p>
              <Link
                href="/how-it-works"
                className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-ink hover:text-signal"
              >
                See the full process
                <span className="flex size-9 items-center justify-center rounded-none border border-ink/15">
                  <ArrowRightIcon className="size-4" />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div
            aria-hidden
            className="pointer-events-none absolute left-7 top-2 h-[calc(100%-1rem)] w-px bg-ink/15 md:left-8"
          />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120} direction="right">
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-none bg-ink text-white shadow-md md:size-16">
                    <step.icon className="size-6 md:size-7" />
                  </div>
                  <div className="flex-1 rounded-none border border-ink/10 bg-card p-6 shadow-sm md:p-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Step {step.num}</span>
                      <span aria-hidden className="h-px flex-1 bg-ink/10" />
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-ink md:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{step.desc}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-medium text-ink/65">
                          <span className="size-1 rounded-full bg-signal" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
