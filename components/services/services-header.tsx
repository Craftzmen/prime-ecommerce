import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"
import { getServicePageRows } from "@/lib/services-page-data"

export function ServicesHeader() {
  const quickLinks = getServicePageRows()

  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
      eyebrow="Capabilities"
      title={
        <>
          Full-stack <br />
          <span className="text-signal">commerce delivery.</span>
        </>
      }
      description="Six service tracks from storefront build through ongoing support—same lead thread, written milestones, and staging you can sign off before cutover."
      variant="split"
      aside={
        <div className="rounded-none border border-white/15 bg-white/5 p-2">
          <p className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Jump to a pillar</p>
          <ul className="grid divide-y divide-white/10">
            {quickLinks.map((q) => (
              <li key={q.slug}>
                <Link
                  href={`#${q.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 transition hover:bg-white/5"
                >
                  <span className="flex size-9 items-center justify-center rounded-none bg-signal/15 text-signal">
                    <q.icon className="size-4" />
                  </span>
                  <span className="min-w-0 text-sm font-semibold text-white">{q.title}</span>
                  <ArrowUpRightIcon className="size-4 shrink-0 text-white/35 transition group-hover:text-signal" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  )
}
