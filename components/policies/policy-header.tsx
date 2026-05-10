import Link from "next/link"
import { ChevronRightIcon, FileTextIcon } from "lucide-react"

export type PolicyBreadcrumb = { label: string; href?: string }

type PolicyHeaderProps = {
  title: string
  eyebrow: string
  description: string
  lastUpdated: string
  breadcrumbs: PolicyBreadcrumb[]
}

export function PolicyHeader({ title, eyebrow, description, lastUpdated, breadcrumbs }: PolicyHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-12 text-white md:pt-36 md:pb-16">
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

        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <p className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">
              <FileTextIcon className="size-3.5" aria-hidden />
              {eyebrow}
            </p>
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              {title}
              <span className="text-signal">.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
