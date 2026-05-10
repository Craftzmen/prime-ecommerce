import Link from "next/link"
import { PhoneIcon, MailIcon, ArrowRightIcon, ClockIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

export function CtaBanner() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <ScrollReveal>
          <div className="overflow-hidden rounded-none border border-ink/10 shadow-2xl shadow-ink/10">
            <div className="grid lg:grid-cols-5">
              <div className="relative overflow-hidden bg-ink p-8 text-white md:p-12 lg:col-span-3 lg:p-14">
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-none border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
                    Ready when you are
                  </div>
                  <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                    Tell us the <span className="text-signal">commerce problem next.</span>
                  </h2>
                  <p className="mb-8 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                    Share platform, timeline, and what “done” looks like—we reply with a scoped next step or a short list of clarifying questions.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-none bg-signal px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-signal/25 hover:bg-signal-light"
                  >
                    Start a project
                    <ArrowRightIcon className="size-4" />
                  </Link>

                  <div className="mt-8 flex items-center gap-2 text-xs text-white/60">
                    <ClockIcon className="size-4 text-signal" aria-hidden />
                    {`Replies within one business day · ${siteConfig.hours}`}
                  </div>
                </div>
              </div>

              <div className="relative bg-signal p-8 text-white md:p-12 lg:col-span-2 lg:p-14">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                  Or reach us directly
                </p>

                <Link
                  href={siteConfig.phoneTel}
                  className="group mb-4 flex items-center justify-between gap-4 rounded-none border border-white/20 bg-white/10 p-5 transition hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-none bg-ink text-white">
                      <PhoneIcon className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/70">Direct line</div>
                      <div className="text-base font-bold text-white">{siteConfig.phone}</div>
                    </div>
                  </div>
                  <ArrowRightIcon className="size-5 text-white/70 transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>

                <Link
                  href={siteConfig.emailMailto}
                  className="group flex items-center justify-between gap-4 rounded-none border border-white/20 bg-white/10 p-5 transition hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-none bg-ink text-white">
                      <MailIcon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/70">Email</div>
                      <div className="truncate text-sm font-bold text-white">{siteConfig.email}</div>
                    </div>
                  </div>
                  <ArrowRightIcon className="size-5 shrink-0 text-white/70 transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>

                <p className="mt-6 text-xs font-medium text-white/80">Strategy calls by appointment.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
