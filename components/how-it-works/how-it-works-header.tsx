import Link from "next/link"
import { MessageSquareIcon, PaletteIcon, Code2Icon, RocketIcon, LineChartIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"

const previewSteps = [
  { num: "01", icon: MessageSquareIcon, label: "Discover", phase: "Week 0" },
  { num: "02", icon: PaletteIcon, label: "Design", phase: "Weeks 1–2" },
  { num: "03", icon: Code2Icon, label: "Build", phase: "Weeks 2–5" },
  { num: "04", icon: RocketIcon, label: "Launch", phase: "Cutover" },
  { num: "05", icon: LineChartIcon, label: "Grow", phase: "Post-live" },
]

export function HowItWorksHeader() {
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "How It Works" },
      ]}
      eyebrow="Process"
      title={
        <>
          From discovery to <br />
          <span className="text-signal">recurring value.</span>
        </>
      }
      description="A clear five-step delivery lane—scaled to your risk tolerance. Same lead thread whether you are migrating a catalog or shipping a net-new brand."
      variant="center"
      className="pb-16 md:pb-24"
      below={
        <div className="relative mt-14 md:mt-20">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-white/15 md:block" />
          <ol className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {previewSteps.map((s) => (
              <li key={s.num} className="flex flex-col items-center gap-3 text-center">
                <Link
                  href={`#step-${s.num}`}
                  className="group flex size-14 items-center justify-center rounded-none border border-white/15 bg-ink text-white transition hover:border-signal hover:bg-signal"
                >
                  <s.icon className="size-5 transition group-hover:text-white" />
                </Link>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">
                    {s.num} · {s.phase}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      }
    />
  )
}
