import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

export function PricingHeader() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-8 text-white md:pt-32 md:pb-10">
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-none border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60"
        >
          <Link href="/" className="transition hover:text-signal">
            Home
          </Link>
          <ChevronRightIcon className="size-3 text-white/25" aria-hidden />
          <span className="text-signal">Pricing</span>
        </nav>

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">Plans</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Simple one-time <span className="text-signal">pricing.</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
          Three fixed packages—pick the coverage you need and we get to work.
        </p>
      </div>
    </section>
  )
}
