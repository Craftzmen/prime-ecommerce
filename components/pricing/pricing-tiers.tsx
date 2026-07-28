import Link from "next/link"
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { pricingPlans } from "@/lib/pricing-data"
import { cn } from "@/lib/utils"

export function PricingTiers() {
  return (
    <SectionWrapper background="muted" padding="sm" className="relative">
      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {pricingPlans.map((plan, i) => {
          const featured = Boolean(plan.featured)

          return (
            <ScrollReveal key={plan.id} direction="up" delay={i * 0.08}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-none border p-7 transition md:p-9",
                  featured
                    ? "border-signal/40 bg-ink text-white shadow-lg shadow-signal/10"
                    : "border-ink/10 bg-card hover:-translate-y-0.5 hover:border-signal/40"
                )}
              >
                {featured ? (
                  <span className="mb-5 inline-flex w-fit rounded-none border border-signal/40 bg-signal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal">
                    Most popular
                  </span>
                ) : (
                  <span className="mb-5 inline-flex w-fit text-[10px] font-bold uppercase tracking-[0.3em] text-signal">
                    Package
                  </span>
                )}

                <h2
                  className={cn(
                    "text-2xl font-bold tracking-tight md:text-3xl",
                    featured ? "text-white" : "text-ink"
                  )}
                >
                  {plan.name}
                </h2>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    featured ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight md:text-5xl",
                      featured ? "text-white" : "text-ink"
                    )}
                  >
                    ${plan.price.toLocaleString("en-US")}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold uppercase tracking-wide",
                      featured ? "text-white/50" : "text-muted-foreground"
                    )}
                  >
                    one time
                  </span>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-center gap-3 rounded-none border p-3",
                        featured
                          ? "border-white/10 bg-white/5"
                          : "border-ink/10 bg-background"
                      )}
                    >
                      <CheckCircle2Icon className="size-4 shrink-0 text-signal" />
                      <span
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-wide",
                          featured ? "text-white/80" : "text-ink/75"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-none px-7 text-sm font-semibold uppercase tracking-wide transition",
                    featured
                      ? "bg-signal text-white shadow-lg shadow-signal/25 hover:bg-signal-light"
                      : "bg-ink text-white hover:bg-ink/90"
                  )}
                >
                  Choose {plan.name}
                  <ArrowRightIcon className="size-4" />
                </Link>
              </article>
            </ScrollReveal>
          )
        })}
      </div>

      <ScrollReveal>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-10">
          All prices are one-time payments for the listed package scope. Need something custom?
          We&apos;ll scope it on a statement of work after a short discovery call.
        </p>
      </ScrollReveal>
    </SectionWrapper>
  )
}
