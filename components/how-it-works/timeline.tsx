import Link from "next/link"
import {
  MessageSquareIcon,
  PaletteIcon,
  Code2Icon,
  RocketIcon,
  LineChartIcon,
  CheckCircle2Icon,
  HeadphonesIcon,
  ArrowRightIcon,
} from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Step {
  num: string
  icon: typeof MessageSquareIcon
  phase: string
  duration: string
  title: string
  desc: string
  subItems: string[]
}

const steps: Step[] = [
  {
    num: "01",
    icon: MessageSquareIcon,
    phase: "Week 0",
    duration: "2–4 hrs",
    title: "Discover & scope",
    desc: "We map catalog complexity, integrations, analytics gaps, and launch risks—then produce a milestone plan your stakeholders can approve.",
    subItems: [],
  },
  {
    num: "02",
    icon: PaletteIcon,
    phase: "Weeks 1–2",
    duration: "1–2 weeks",
    title: "Design & prototype",
    desc: "Design system, templates, and checkout UX in Figma and staging—reviewed with your team before we harden the theme.",
    subItems: ["Component library", "Content model", "CRO hypotheses"],
  },
  {
    num: "03",
    icon: Code2Icon,
    phase: "Weeks 2–5",
    duration: "Varies",
    title: "Build & integrate",
    desc: "Theme or headless front end, middleware jobs, and QA against real catalog slices—performance budgets enforced in CI.",
    subItems: ["Staging parity", "Webhook retries", "Accessibility pass"],
  },
  {
    num: "04",
    icon: RocketIcon,
    phase: "Cutover",
    duration: "Planned window",
    title: "Launch & stabilize",
    desc: "DNS cutover, redirect validation, smoke tests on payments and tax, and a war-room channel until metrics flatten.",
    subItems: ["Rollback plan", "Monitoring dashboards", "Hypercare window"],
  },
  {
    num: "05",
    icon: LineChartIcon,
    phase: "Post-live",
    duration: "Retainer",
    title: "Grow & optimize",
    desc: "Experiment backlog, integration hardening, and quarterly roadmap reviews with the same engineers who shipped v1.",
    subItems: ["A/B tests", "Release train", "Incident runbooks"],
  },
]

export function Timeline() {
  return (
    <SectionWrapper id="process" className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              The engagement
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Five steps. <span className="text-signal">Same lead.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sized to fit—from a focused theme refresh to a multi-system migration with ERP cutover.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-5 md:space-y-6">
        {steps.map((step, i) => {
          const isSignal = i % 2 === 1
          return (
            <ScrollReveal key={step.num} delay={i * 80} direction="up">
              <article
                id={`step-${step.num}`}
                className={`grid scroll-mt-28 gap-8 rounded-none border p-7 md:grid-cols-12 md:gap-10 md:p-10 ${
                  isSignal ? "border-signal/25 bg-signal/5" : "border-ink/10 bg-card"
                }`}
              >
                <div className="flex items-start gap-5 md:col-span-5">
                  <span className="text-5xl font-bold tracking-tight text-signal/80 md:text-6xl">{step.num}</span>
                  <div className="min-w-0 flex-1">
                    <span className="flex size-12 items-center justify-center rounded-none bg-ink text-white">
                      <step.icon className="size-5" />
                    </span>
                    <div className="mt-4 flex flex-wrap items-baseline gap-3">
                      <span className="rounded-none border border-signal/30 bg-signal/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-signal">
                        {step.phase}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">{step.title}</h3>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step.desc}</p>
                  {step.subItems.length > 0 ? (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                      {step.subItems.map((item) => (
                        <li key={item} className="flex items-start gap-2 rounded-none border border-ink/10 bg-background p-3">
                          <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-signal" />
                          <span className="text-xs font-medium leading-snug text-ink/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </ScrollReveal>
          )
        })}
      </div>

      <ScrollReveal>
        <div className="mt-12 grid gap-8 rounded-none bg-ink p-8 text-white md:mt-16 md:grid-cols-12 md:gap-10 md:p-12">
          <div className="md:col-span-2">
            <div className="flex size-16 items-center justify-center rounded-none bg-signal text-white shadow-lg shadow-signal/30">
              <HeadphonesIcon className="size-7" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">After launch</p>
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">Most clients keep the same Slack thread.</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Releases, experiments, and integration debt—we batch and ship so your internal team is not stuck firefighting checkout every Friday.
            </p>
          </div>
          <div className="md:col-span-3 md:flex md:items-center md:justify-end">
            <Link
              href="/services#support"
              className="inline-flex h-11 items-center gap-2 rounded-none bg-white px-5 text-xs font-semibold uppercase tracking-wide text-ink hover:bg-signal hover:text-white"
            >
              Growth & support
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
