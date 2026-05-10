import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutIntro() {
  return (
    <SectionWrapper className="relative">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
            Our approach
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <p className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            We are builders first—senior engineers and PMs who have shipped{" "}
            <span className="text-signal">high-traffic storefronts</span>,{" "}
            <span className="text-signal">messy migrations</span>, and{" "}
            <span className="text-signal">integrations that cannot fail quietly</span>. That shows up in every roadmap and every release note.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120}>
          <div className="mt-12 grid gap-8 border-t border-ink/10 pt-10 md:grid-cols-2 md:gap-12">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Every engagement starts with catalog reality, platform constraints, and the metrics you need to defend internally—then we sequence work so you get value before the
              big-bang launch.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Faster answers, documented decisions, and a post-launch thread that does not vanish. The stacks change; the bar for delivery does not.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
