import Link from "next/link"
import { PhoneIcon, ZapIcon, ClockIcon, ShieldCheckIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

const metrics = [
  {
    icon: ClockIcon,
    label: "Avg. callback",
    value: "<45 min",
  },
  {
    icon: ZapIcon,
    label: "Coverage",
    value: siteConfig.hours,
  },
  {
    icon: ShieldCheckIcon,
    label: "Incident triage",
    value: "Retainer SLAs",
  },
]

export function ServicesUrgentCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white md:py-24">
      <ScrollReveal>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:grid-cols-12 md:gap-12 md:px-6">
          <div className="md:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-none border border-signal/30 bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              Production issue?
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Checkout down or <br />
              <span className="text-signal">integration flapping?</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Call the line—we triage with whoever is on-call for your account, pull logs, and coordinate rollback or hotfix paths without a ticket black hole.
            </p>

            <Link
              href={siteConfig.phoneTel}
              className="mt-7 inline-flex h-12 items-center gap-3 rounded-none bg-signal px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-signal/25 hover:bg-signal-light"
            >
              <PhoneIcon className="size-4" />
              {siteConfig.phone}
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-none border border-white/10 bg-white/5 p-5 md:p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-none bg-signal/15 text-signal">
                    <m.icon className="size-4" />
                  </span>
                  <div className="mt-4 text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
