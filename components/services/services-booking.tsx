import Link from "next/link"
import { ArrowRightIcon, FileTextIcon, MailCheckIcon, CalendarCheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

const nextSteps = [
  {
    num: "01",
    icon: FileTextIcon,
    title: "Send your brief",
    desc: "Platform, catalog size, integrations, and timeline—use the contact form or call.",
  },
  {
    num: "02",
    icon: MailCheckIcon,
    title: "Reply within 1 business day",
    desc: "A lead engineer or PM with next steps, a rough milestone map, or a few sharp questions.",
  },
  {
    num: "03",
    icon: CalendarCheckIcon,
    title: "Working session",
    desc: "We align on scope and risks, then book a discovery workshop or technical deep dive.",
  },
]

export function ServicesBooking() {
  return (
    <SectionWrapper background="muted" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
            Next steps
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Start your <span className="text-signal">engagement.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <ScrollReveal direction="left" className="lg:col-span-5">
          <div className="space-y-4">
            {nextSteps.map((s, i) => (
              <div
                key={s.num}
                className="group relative grid grid-cols-[auto_1fr] items-start gap-5 rounded-none border border-ink/10 bg-card p-5 transition hover:border-signal/40 md:p-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight text-signal/80 md:text-3xl">{s.num}</span>
                  <span className="flex size-10 items-center justify-center rounded-none bg-ink text-white">
                    <s.icon className="size-4" />
                  </span>
                  {i < nextSteps.length - 1 ? (
                    <span aria-hidden className="mt-2 h-6 w-px bg-ink/15" />
                  ) : null}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-bold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-none border border-white/10 bg-ink p-8 text-white shadow-lg md:p-10">
            <div className="relative">
              <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                Tell us about <span className="text-signal">your stack.</span>
              </h3>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-white/65">
                A few structured fields on our contact page is enough for us to route you to build, migration, CRO, or integrations—whichever gate you are at.
              </p>

              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-signal">—</span>
                  Current platform and catalog order of magnitude
                </li>
                <li className="flex gap-2">
                  <span className="text-signal">—</span>
                  Must-have integrations (ERP, 3PL, tax, ESP)
                </li>
                <li className="flex gap-2">
                  <span className="text-signal">—</span>
                  Target launch or migration window
                </li>
              </ul>

              <Button
                asChild
                className="h-12 w-full rounded-none bg-signal text-sm font-semibold uppercase tracking-wide text-white hover:bg-signal-light"
              >
                <Link href="/contact">
                  Open contact form
                  <ArrowRightIcon className="ml-2 size-5" />
                </Link>
              </Button>

              <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                Prefer voice? Call the number in the header—we pick up during business hours.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
