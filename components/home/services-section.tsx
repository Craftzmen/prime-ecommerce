import Link from "next/link"
import {
  ArrowRightIcon,
  StoreIcon,
  ArrowRightLeftIcon,
  LineChartIcon,
  PlugIcon,
  LayersIcon,
  RocketIcon,
} from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const featured = {
  icon: StoreIcon,
  title: "Store design & build",
  desc: "Design systems, performant themes, and checkout flows your merchandising team can run without filing a ticket for every tweak.",
  engagement: "From 4 weeks",
  highlights: ["Core Web Vitals focus", "Accessible components", "GA4 & events wired in"],
} as const

const services = [
  {
    icon: ArrowRightLeftIcon,
    title: "Platform migration",
    desc: "Catalog, customers, and SEO preserved—staging you can sign off before DNS flips.",
    engagement: "Project-based",
  },
  {
    icon: LineChartIcon,
    title: "Conversion optimization",
    desc: "Hypothesis-led tests on PDP, cart, and checkout with reporting your CFO can read.",
    engagement: "Retainer",
  },
  {
    icon: PlugIcon,
    title: "Integrations & APIs",
    desc: "ERP, 3PL, tax, and marketing automation with retries, alerts, and runbooks.",
    engagement: "From 2 weeks",
  },
  {
    icon: LayersIcon,
    title: "Headless commerce",
    desc: "Next.js storefronts on your commerce backend—editorial speed without forking checkout.",
    engagement: "From 6 weeks",
  },
  {
    icon: RocketIcon,
    title: "Growth & support",
    desc: "Embedded squad for releases, integrations, and performance on a predictable retainer.",
    engagement: "Ongoing",
  },
] as const

export function HomeServices() {
  return (
    <SectionWrapper id="services" className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              <StoreIcon className="size-3" />
              What we do
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Commerce delivery <span className="text-signal">without the agency theater.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether you are launching a net-new brand or replatforming a seven-figure catalog, we keep scope legible and ship in slices you can measure.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden items-center gap-2 self-end text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 hover:text-signal lg:inline-flex"
          >
            All services
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-3 lg:grid-rows-3">
        <ScrollReveal direction="up" className="lg:col-span-2 lg:row-span-2">
          <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-none bg-ink p-7 text-white md:p-9">
            <div className="relative flex items-start justify-between">
              <div className="flex size-14 items-center justify-center rounded-none bg-signal text-white shadow-lg shadow-signal/30">
                <featured.icon className="size-7" />
              </div>
              <span className="rounded-none border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal">
                Discovery & roadmap
              </span>
            </div>

            <h3 className="relative mt-8 text-3xl font-bold tracking-tight md:text-4xl">{featured.title}</h3>
            <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">{featured.desc}</p>

            <ul className="relative mt-6 space-y-2">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-xs font-medium text-white/65">
                  <span className="size-1 rounded-full bg-signal" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm font-bold text-signal">{featured.engagement}</span>
              <Link
                href="/services#store-build"
                className="flex size-11 items-center justify-center rounded-none bg-signal text-white transition group-hover:translate-x-1"
                aria-label={`Learn more about ${featured.title}`}
              >
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={(i + 1) * 70} direction="up">
            <div className="group relative flex h-full min-h-[200px] flex-col rounded-none border border-ink/10 bg-card p-6 transition hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg md:p-7">
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-none bg-signal/10 text-signal">
                  <svc.icon className="size-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink/40">
                  0{i + 2}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-ink md:text-xl">{svc.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-signal">{svc.engagement}</span>
                <Link
                  href="/services"
                  className="flex size-9 items-center justify-center rounded-none border border-ink/15 text-ink/60 transition hover:bg-signal hover:text-white group-hover:border-signal"
                  aria-label={`Learn more about ${svc.title}`}
                >
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-8 lg:hidden">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:text-signal"
        >
          All services
          <ArrowRightIcon className="size-4" />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
