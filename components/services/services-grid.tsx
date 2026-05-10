import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { getServicePageRows } from "@/lib/services-page-data"

export function ServicesGrid() {
  const services = getServicePageRows()

  return (
    <SectionWrapper id="services" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
            What we offer
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Pick a pillar. <span className="text-signal">Or use them all.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-6 md:space-y-8">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.slug} delay={i * 80} direction="up">
            <article
              id={svc.slug}
              className="group grid scroll-mt-28 gap-8 rounded-none border border-ink/10 bg-card p-7 transition hover:border-signal/40 md:grid-cols-12 md:gap-10 md:p-10"
            >
              <div className="flex items-start gap-5 md:col-span-5">
                <span className="text-5xl font-bold tracking-tight text-signal/70 md:text-6xl">{svc.num}</span>
                <div className="min-w-0 flex-1">
                  <span className="flex size-12 items-center justify-center rounded-none bg-ink text-white">
                    <svc.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">{svc.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-none border border-ink/10 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink/70"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{svc.desc}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {svc.includes.map((inc) => (
                    <div key={inc} className="flex items-start gap-3 rounded-none border border-ink/10 bg-background p-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-none bg-signal/15 text-signal">
                        <CheckIcon className="size-3" />
                      </span>
                      <span className="text-xs font-medium leading-snug text-ink/80">{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">{svc.engagement}</span>
                  <Link
                    href={`/contact?topic=${svc.slug}`}
                    className="inline-flex items-center gap-2 rounded-none bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-signal"
                  >
                    Talk to us
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
