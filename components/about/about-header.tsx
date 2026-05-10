import { CalendarIcon, MapPinIcon, UsersIcon, StoreIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"
import { siteConfig } from "@/lib/site-nav"

const facts = [
  { icon: CalendarIcon, label: "Founded", value: "2019" },
  { icon: UsersIcon, label: "Team", value: "PMs, engineers & design" },
  { icon: MapPinIcon, label: "HQ", value: siteConfig.addressLines[1] ?? "Brooklyn, NY" },
  { icon: StoreIcon, label: "Focus", value: "E-commerce build & growth" },
]

export function AboutHeader() {
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
      eyebrow="Who we are"
      title={
        <>
          We&apos;re Prime Auto <br />
          <span className="text-signal">Deals.</span>
        </>
      }
      description="A privately held e-commerce studio—clear scopes, instrumented releases, and one accountable lead from discovery through your next sprint after launch."
      variant="split"
      aside={
        <div className="rounded-none border border-white/15 bg-white/5 p-2">
          <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">At a glance</p>
          <dl className="grid divide-y divide-white/10">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[auto_1fr] items-center gap-4 px-4 py-3">
                <span className="flex size-9 items-center justify-center rounded-none bg-signal/15 text-signal">
                  <f.icon className="size-4" />
                </span>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-white/55">{f.label}</dt>
                  <dd className="text-right text-sm font-semibold text-white">{f.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      }
    />
  )
}
