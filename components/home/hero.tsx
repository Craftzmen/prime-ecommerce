import Link from "next/link"
import { ArrowRightIcon, ArrowUpRightIcon, CheckCircle2Icon } from "lucide-react"

const platformChips = ["Shopify Plus", "WooCommerce", "Headless Next.js", "CRO & analytics"]

const stats: { value: string; label: string; unit?: string }[] = [
  { value: "6", unit: "wk", label: "Typical MVP launch" },
  { value: "98%", label: "Clients renew retainers" },
  { value: "40+", label: "Integrations shipped" },
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-muted pb-0 pt-6 text-ink md:pt-8"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 2.5rem), 0 100%)" }}
    >
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="relative flex flex-col gap-10 pb-12 md:flex-row md:items-stretch md:gap-12 md:pb-16 lg:gap-16">
          <div className="min-w-0 flex-1 pt-2 md:pt-6">
            <h1 className="text-[2.35rem] font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
              <span className="text-ink">Stores that convert.</span>
              <br />
              <span className="text-ink/85">Roadmaps you can fund.</span>
              <br />
              <span className="bg-signal/15 px-1 text-signal-dark decoration-signal/40 underline decoration-2 underline-offset-4">
                One senior squad.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
              We design, build, migrate, and optimize e-commerce—Shopify, WooCommerce, headless stacks, and the integrations that keep ops honest.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-sm font-semibold text-white transition hover:bg-signal hover:text-white md:h-14 md:px-8 md:text-base"
              >
                Book a call
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-ink/20 bg-background px-6 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal md:h-14 md:px-8 md:text-base"
              >
                See how we work
                <ArrowUpRightIcon className="size-4" aria-hidden />
              </Link>
            </div>

            <ul className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-8 text-sm text-ink/60 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 shrink-0 text-signal" aria-hidden />
                Instrumented funnels from day one
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 shrink-0 text-signal" aria-hidden />
                Milestones tied to scope, not vibes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 shrink-0 text-signal" aria-hidden />
                Same-day replies on business days
              </li>
            </ul>
          </div>

          <aside className="relative w-full shrink-0 md:w-[min(100%,320px)] lg:w-[340px]">
            <div className="relative flex flex-col gap-3 md:sticky md:top-32">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-4 border border-ink/10 bg-background px-4 py-3 shadow-sm md:flex-col md:items-start md:py-4"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{s.value}</span>
                    {s.unit ? <span className="text-sm font-semibold text-signal">{s.unit}</span> : null}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">{s.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 border-t border-ink/10 bg-ink/[0.04]">
        <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6 md:py-10">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/40">Platforms & focus</p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {platformChips.map((label) => (
              <span
                key={label}
                className="inline-flex items-center border border-ink/15 bg-background px-3 py-2 text-xs font-semibold tracking-tight text-ink md:text-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
