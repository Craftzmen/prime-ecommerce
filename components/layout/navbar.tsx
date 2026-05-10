"use client"

import * as React from "react"
import { startTransition } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  MenuIcon,
  PhoneIcon,
  ChevronDownIcon,
  XIcon,
  ArrowRightIcon,
  StoreIcon,
  ArrowRightLeftIcon,
  LineChartIcon,
  PlugIcon,
  LayersIcon,
  RocketIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { mainNav, policyNav, siteConfig } from "@/lib/site-nav"
import logoImage from "@/app/assets/images/logo.png"

const serviceMenu = [
  {
    icon: StoreIcon,
    label: "Store design & build",
    href: "/services#store-build",
    desc: "Shopify, Woo, and custom themes that convert.",
  },
  {
    icon: ArrowRightLeftIcon,
    label: "Platform migration",
    href: "/services#migration",
    desc: "Data, SEO, and cutover without drama.",
  },
  {
    icon: LineChartIcon,
    label: "Conversion optimization",
    href: "/services#cro",
    desc: "Funnel fixes tied to revenue.",
  },
  {
    icon: PlugIcon,
    label: "Integrations & APIs",
    href: "/services#integrations",
    desc: "ERP, 3PL, tax, and marketing wired right.",
  },
  {
    icon: LayersIcon,
    label: "Headless commerce",
    href: "/services#headless",
    desc: "Composable stacks on Next.js.",
  },
  {
    icon: RocketIcon,
    label: "Growth & support",
    href: "/services#support",
    desc: "Retainers with the same engineers.",
  },
] as const

type OpenMenu = "services" | null

const primaryNav = mainNav.filter((item) => item.href !== "/services")

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  /** Drives slide-in / slide-out; `mobileOpen` stays true until exit animation finishes. */
  const [mobileSlideIn, setMobileSlideIn] = React.useState(false)
  const mobilePanelRef = React.useRef<HTMLDivElement>(null)
  /** True while a user-initiated close is in progress (slide-out). Used so a timeout can unlock if `transitionend` never fires. */
  const mobileClosingUserRef = React.useRef(false)
  const navWrapRef = React.useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = React.useRef<number | null>(null)
  const lastScrollYRef = React.useRef(0)
  const closeMobile = React.useCallback(() => {
    mobileClosingUserRef.current = true
    setMobileSlideIn((slideIn) => {
      if (!slideIn) {
        queueMicrotask(() => setMobileOpen(false))
      }
      return false
    })
  }, [])

  const openMobile = React.useCallback(() => {
    mobileClosingUserRef.current = false
    setMobileOpen(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideIn(true))
    })
  }, [])

  const toggleMobile = React.useCallback(() => {
    if (mobileOpen) {
      closeMobile()
    } else {
      openMobile()
    }
  }, [mobileOpen, closeMobile, openMobile])
  const closeMenus = React.useCallback(() => setOpenMenu(null), [])

  React.useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 8
      const wasScrolled = lastScrollYRef.current > scrollThreshold
      const isScrolled = currentScrollY > scrollThreshold

      if (wasScrolled !== isScrolled) {
        lastScrollYRef.current = currentScrollY
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = window.setTimeout(() => {
          setScrolled(isScrolled)
        }, 0)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navWrapRef.current && !navWrapRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  React.useEffect(() => {
    startTransition(() => {
      setOpenMenu(null)
      setMobileSlideIn(false)
      setMobileOpen(false)
    })
  }, [pathname])

  React.useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    html.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile()
    }
    document.addEventListener("keydown", onKey)
    return () => {
      html.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen, closeMobile])

  /** If the slide-out transition never fires `transitionend`, still drop `mobileOpen` so scroll lock is cleared. */
  React.useEffect(() => {
    if (!mobileOpen || mobileSlideIn || !mobileClosingUserRef.current) return
    const id = window.setTimeout(() => {
      mobileClosingUserRef.current = false
      setMobileOpen(false)
    }, 400)
    return () => window.clearTimeout(id)
  }, [mobileOpen, mobileSlideIn])

  React.useEffect(() => {
    if (!mobileOpen) return
    const panel = mobilePanelRef.current
    if (!panel) return

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== "transform") return
      setMobileSlideIn((current) => {
        if (!current) {
          mobileClosingUserRef.current = false
          queueMicrotask(() => setMobileOpen(false))
        }
        return current
      })
    }

    panel.addEventListener("transitionend", onTransitionEnd)
    return () => panel.removeEventListener("transitionend", onTransitionEnd)
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  const isServicesActive = pathname.startsWith("/services")

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-ink/10 bg-background text-ink shadow-sm transition-shadow",
        scrolled && "shadow-md"
      )}
    >
      <div className="border-b border-ink/5 bg-ink text-[11px] text-white/85 md:text-xs">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 md:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="text-white/70">{siteConfig.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href={siteConfig.phoneTel} className="inline-flex items-center gap-1.5 font-medium hover:text-signal-light">
              <PhoneIcon className="size-3.5 text-signal" />
              {siteConfig.phone}
            </Link>
          </div>
        </div>
      </div>

      <div ref={navWrapRef} className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenus}
            aria-label={`${siteConfig.name} — home`}
            className="group flex shrink-0 items-center"
          >
            <Image
              src={logoImage}
              alt=""
              className="h-28 w-auto transition-opacity group-hover:opacity-90"
              sizes="(max-width: 768px) 160px, 200px"
              priority
            />
          </Link>

          <div className="hidden items-stretch lg:flex">
            {primaryNav.map((item, i) => (
              <React.Fragment key={item.href}>
                {i > 0 ? <span className="w-px self-stretch bg-ink/10" aria-hidden /> : null}
                <NavRailLink href={item.href} label={item.label} active={isActive(item.href)} />
              </React.Fragment>
            ))}
            <span className="w-px self-stretch bg-ink/10" aria-hidden />
            <div className="relative flex items-stretch">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "services"}
                onClick={() => setOpenMenu((v) => (v === "services" ? null : "services"))}
                className={cn(
                  "flex items-center gap-1.5 px-4 text-sm font-semibold transition hover:bg-ink/[0.03]",
                  isServicesActive || openMenu === "services" ? "text-signal" : "text-ink/65 hover:text-ink"
                )}
              >
                Services
                <ChevronDownIcon className={cn("size-4 transition-transform", openMenu === "services" && "rotate-180")} />
              </button>

              {openMenu === "services" ? (
                <div
                  role="menu"
                  aria-label="Services"
                  className="absolute left-0 top-full z-30 mt-1 w-[min(100vw-2rem,380px)] border border-ink/10 bg-background shadow-xl"
                >
                  <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Service pillars</p>
                    <Link
                      href="/services"
                      onClick={closeMenus}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-ink/50 hover:text-signal"
                    >
                      Overview
                      <ArrowRightIcon className="size-3" />
                    </Link>
                  </div>
                  <ul className="max-h-[min(70vh,520px)] overflow-y-auto py-1">
                    {serviceMenu.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={closeMenus}
                          className="flex items-start gap-3 px-4 py-3 transition hover:bg-muted/80"
                        >
                          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm bg-signal/10 text-signal">
                            <s.icon className="size-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-bold text-ink">{s.label}</span>
                            <span className="mt-0.5 block text-xs text-ink/55">{s.desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <span className="w-px self-stretch bg-ink/10" aria-hidden />
            {policyNav.map((item) => (
              <React.Fragment key={item.href}>
                <NavRailLink href={item.href} label={item.label} active={isActive(item.href)} />
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/contact"
              className="hidden rounded-sm border-2 border-ink bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-signal hover:border-signal sm:inline-flex md:px-5"
            >
              Book a call
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen && mobileSlideIn}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen && mobileSlideIn ? "Close menu" : "Open menu"}
              onClick={toggleMobile}
              className="inline-flex size-10 items-center justify-center rounded-sm border border-ink/15 text-ink hover:bg-muted lg:hidden"
            >
              {mobileOpen && mobileSlideIn ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>

        </nav>
      </div>

      {typeof document !== "undefined" && mobileOpen
        ? createPortal(
            <div className="lg:hidden" role="presentation">
              <button
                type="button"
                aria-label="Close menu"
                className={cn(
                  "fixed inset-0 z-[600] bg-ink/50 transition-opacity duration-300 ease-out",
                  mobileSlideIn ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                )}
                onClick={closeMobile}
              />
              <div
                ref={mobilePanelRef}
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className={cn(
                  "fixed inset-y-0 right-0 z-[610] flex h-dvh max-h-dvh w-full max-w-full flex-col bg-background shadow-2xl transition-transform duration-300 ease-out",
                  mobileSlideIn ? "translate-x-0" : "translate-x-full"
                )}
              >
                <div className="flex h-14 shrink-0 items-center justify-between border-b border-ink/10 px-4">
                  <span className="text-sm font-bold text-ink">Menu</span>
                  <button
                    type="button"
                    className="rounded-sm p-2 text-ink hover:bg-muted"
                    onClick={closeMobile}
                    aria-label="Close menu"
                  >
                    <XIcon className="size-6" />
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain px-4 pb-8 [-webkit-overflow-scrolling:touch]">
                  <ul className="mt-4 space-y-0 divide-y divide-ink/10 border-y border-ink/10">
                    {mainNav.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            "flex items-center justify-between py-4 text-lg font-bold tracking-tight",
                            isActive(link.href) ? "text-signal" : "text-ink"
                          )}
                        >
                          {link.label}
                          <ArrowRightIcon className="size-4 text-ink/25" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Services</p>
                  <ul className="mt-2 space-y-1">
                    {serviceMenu.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={closeMobile}
                          className="flex items-center gap-3 rounded-sm py-2.5 pl-1 hover:bg-muted/60"
                        >
                          <s.icon className="size-4 shrink-0 text-signal" />
                          <span className="text-sm font-semibold text-ink">{s.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Policies</p>
                  <ul className="mt-2 space-y-1">
                    {policyNav.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            "block rounded-sm py-2.5 pl-1 text-sm font-semibold hover:bg-muted/60",
                            isActive(link.href) ? "text-signal" : "text-ink/80"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-3 pt-10">
                    <Link
                      href="/contact"
                      onClick={closeMobile}
                      className="flex h-12 w-full items-center justify-center rounded-sm bg-ink text-sm font-semibold uppercase tracking-wide text-white"
                    >
                      Book a call
                    </Link>
                    <Link
                      href={siteConfig.phoneTel}
                      onClick={closeMobile}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-sm border-2 border-ink/15 text-sm font-semibold text-ink"
                    >
                      <PhoneIcon className="size-4 text-signal" />
                      {siteConfig.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}

function NavRailLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 text-sm font-semibold transition hover:bg-ink/[0.03]",
        active ? "bg-signal/10 text-signal" : "text-ink/65 hover:text-ink"
      )}
    >
      <span className="relative py-1">
        {label}
        {active ? (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-signal" aria-hidden />
        ) : null}
      </span>
    </Link>
  )
}
