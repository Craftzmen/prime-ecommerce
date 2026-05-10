import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { UNSPLASH } from "@/lib/remote-images"

const stats = [
  { value: "2019", label: "Founded" },
  { value: "180+", label: "Stores shipped" },
  { value: "4.9", label: "Avg. client rating" },
  { value: "2", label: "Week sprint cadence" },
]

export function AboutSnapshot() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-none border border-signal/25 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              <UsersIcon className="size-3" />
              Who we are
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Engineers and PMs. <span className="text-signal">Partners, not ticket takers.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A senior-led studio that ships commerce work with clear milestones, documented handoffs, and the same people on your Slack thread after launch.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <div className="flex flex-col overflow-hidden rounded-none border border-ink/10 bg-card md:flex-row">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-1 flex-col items-start gap-3 p-6 md:p-8 lg:p-10 ${
                i > 0 ? "border-t border-ink/10 md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
        <ScrollReveal direction="left" className="md:col-span-7">
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-none border border-ink/10 shadow-lg">
            <Image
              src={`${UNSPLASH.aboutWorkspace}&w=1400`}
              alt="Team reviewing e-commerce analytics on monitors in a modern office"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={55}
              loading="lazy"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="md:col-span-5">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {`We built Prime Auto Deals around a simple rule: treat every storefront like a product company would—instrumented releases, honest estimates, and no bait-and-switch scope.`}
            </p>
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-none bg-ink px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-signal"
            >
              Discover our story
              <ArrowRightIcon className="ml-2 size-4" aria-hidden />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
