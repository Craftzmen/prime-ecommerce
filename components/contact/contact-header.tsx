import Link from "next/link"
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"
import { siteConfig } from "@/lib/site-nav"

const masthead = [
  {
    icon: PhoneIcon,
    label: "Direct line",
    primary: siteConfig.phone,
    secondary: siteConfig.hours,
    href: siteConfig.phoneTel,
  },
  {
    icon: MailIcon,
    label: "Email",
    primary: siteConfig.email,
    secondary: "Reply within 1 business day",
    href: siteConfig.emailMailto,
  },
  {
    icon: MapPinIcon,
    label: "Office",
    primary: siteConfig.addressLines[1] ?? "Brooklyn, NY",
    secondary: siteConfig.addressLines.join(" · "),
  },
]

export function ContactHeader() {
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
      eyebrow="Get in touch"
      title={
        <>
          Tell us about <br />
          <span className="text-signal">your next release.</span>
        </>
      }
      description="A short brief is enough for us to route build, migration, CRO, or integrations—then we reply with a scoped next step or a few clarifying questions."
      variant="center"
      below={
        <div className="grid gap-px overflow-hidden rounded-none border border-white/15 bg-white/10 sm:grid-cols-3">
          {masthead.map((m) => {
            const inner = (
              <div className="flex h-full flex-col gap-3 bg-ink/95 p-5 transition group-hover:bg-ink md:p-6">
                <span className="flex size-10 items-center justify-center rounded-none bg-signal/15 text-signal">
                  <m.icon className="size-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">{m.label}</p>
                  <p className="mt-1 text-base font-bold tracking-tight text-white md:text-lg">{m.primary}</p>
                  <p className="mt-1 text-xs text-white/55">{m.secondary}</p>
                </div>
              </div>
            )
            return m.href ? (
              <Link key={m.label} href={m.href} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                {inner}
              </Link>
            ) : (
              <div key={m.label} className="group block">
                {inner}
              </div>
            )
          })}
        </div>
      }
    />
  )
}
