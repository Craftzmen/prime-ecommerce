import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  StoreIcon,
  ArrowRightLeftIcon,
  LineChartIcon,
  PlugIcon,
  LayersIcon,
  RocketIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react"
import { mainNav, policyNav, siteConfig } from "@/lib/site-nav"
import logoImage from "@/app/assets/images/logo.png"

const exploreLinks = mainNav.map((item) => ({ label: item.label, href: item.href }))

const serviceLinks = [
  { icon: StoreIcon, label: "Store design & build", href: "/services#store-build" },
  { icon: ArrowRightLeftIcon, label: "Platform migration", href: "/services#migration" },
  { icon: LineChartIcon, label: "Conversion optimization", href: "/services#cro" },
  { icon: PlugIcon, label: "Integrations & APIs", href: "/services#integrations" },
  { icon: LayersIcon, label: "Headless commerce", href: "/services#headless" },
  { icon: RocketIcon, label: "Growth & support", href: "/services#support" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 md:px-6 md:pt-20">
        <div className="grid items-end gap-8 border-b border-white/10 pb-14 md:grid-cols-12 md:gap-10 md:pb-16">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
              Launch and scale <br />
              <span className="text-signal">commerce that performs.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none bg-signal px-7 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-signal/25 hover:bg-signal-light sm:w-auto"
            >
              Book a call
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex h-11 items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60 hover:text-signal"
            >
              <PhoneIcon className="size-4 text-signal" />
              {siteConfig.phone}
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="space-y-6 md:col-span-4">
            <Link href="/" className="inline-flex" aria-label={`${siteConfig.name} — home`}>
              <Image
                src={logoImage}
                alt=""
                className="h-9 w-auto md:h-28 brightness-0 invert"
                sizes="200px"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2.5 text-sm font-medium text-white/55 transition hover:text-white"
                  >
                    <s.icon className="size-3.5 text-signal/55 transition group-hover:text-signal" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">Reach us</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-signal/15 text-signal">
                  <MapPinIcon className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-white/55">
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <Link href={siteConfig.phoneTel} className="group flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-signal/15 text-signal transition group-hover:bg-signal group-hover:text-white">
                    <PhoneIcon className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium text-white/55 transition group-hover:text-white">
                    {siteConfig.phone}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={siteConfig.emailMailto} className="group flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-signal/15 text-signal transition group-hover:bg-signal group-hover:text-white">
                    <MailIcon className="size-3.5" />
                  </span>
                  <span className="break-all text-sm font-medium text-white/55 transition group-hover:text-white">
                    {siteConfig.email}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row md:gap-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Demo marketing site; details are illustrative.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {policyNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 transition hover:text-signal"
              >
                {link.label}
              </Link>
            ))}
            <span aria-hidden className="hidden h-3 w-px bg-white/15 md:inline-block" />
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Team online now
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
