import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type RouteHeroBreadcrumb = { label: string; href?: string }

type RouteHeroProps = {
  breadcrumbs: RouteHeroBreadcrumb[]
  eyebrow: string
  title: ReactNode
  description?: string
  variant?: "split" | "center"
  /** Right column when variant is split (e.g. facts card, jump links). */
  aside?: ReactNode
  /** Rendered below title block (e.g. contact masthead row). */
  below?: ReactNode
  className?: string
}

export function RouteHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  variant = "split",
  aside,
  below,
  className,
}: RouteHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ink pt-28 pb-14 text-white md:pt-36 md:pb-20",
        below && "pb-12 md:pb-16",
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-none border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60"
        >
          {breadcrumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? <ChevronRightIcon className="size-3 text-white/25" aria-hidden /> : null}
              {c.href ? (
                <Link href={c.href} className="transition hover:text-signal">
                  {c.label}
                </Link>
              ) : (
                <span className="text-signal">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {variant === "split" ? (
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">{eyebrow}</p>
              <div className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                {title}
              </div>
              {description ? (
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
              ) : null}
            </div>
            {aside ? <div className="lg:col-span-5">{aside}</div> : null}
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">{eyebrow}</p>
              <div className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {title}
              </div>
              {description ? (
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
              ) : null}
            </div>
            {below ? <div className="mt-12 md:mt-16">{below}</div> : null}
          </>
        )}
      </div>
    </section>
  )
}
