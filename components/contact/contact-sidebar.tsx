import { ClockIcon, MapPinIcon, ShieldCheckIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

export function ContactSidebar() {
  return (
    <div className="space-y-6 lg:col-span-5">
      <ScrollReveal direction="right">
        <div className="relative overflow-hidden rounded-none border border-white/10 bg-ink p-7 text-white md:p-8">
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-none bg-signal text-white shadow-md shadow-signal/30">
                <ClockIcon className="size-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Coverage</p>
                <h3 className="mt-1 text-lg font-bold tracking-tight">Team availability</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/70">{siteConfig.hours}</p>
            <p className="mt-4 text-xs text-white/55">
              Messages received outside those hours are queued for the next business morning.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={120}>
        <div className="rounded-none border border-ink/10 bg-card p-7 md:p-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Visit</p>
          <h3 className="mb-4 text-lg font-bold tracking-tight text-ink">Office address</h3>
          <div className="flex gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-signal/10 text-signal">
              <MapPinIcon className="size-4" />
            </span>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              {siteConfig.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={180}>
        <div className="rounded-none border border-signal/25 bg-signal/5 p-7 md:p-8">
          <div className="flex gap-3">
            <ShieldCheckIcon className="size-5 shrink-0 text-signal" />
            <p className="text-sm leading-relaxed text-ink/80">
              Demo marketing site—phone and email route to placeholder endpoints. Replace with production CRM and counsel-approved policies before launch.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
