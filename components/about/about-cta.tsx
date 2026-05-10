import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <ScrollReveal>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-12 md:px-6 md:py-20 lg:py-24">
          <div className="md:col-span-7">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-signal">Get in touch</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Ready for a clearer <br />
              <span className="text-signal">commerce roadmap?</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Tell us what you sell today and what needs to change. We reply within one business day with next steps or sharp questions—not a generic brochure.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none bg-signal px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-signal/25 hover:bg-signal-light sm:w-auto"
            >
              Book a call
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none border border-white/20 bg-white/5 px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 sm:w-auto"
            >
              <PhoneIcon className="size-4 text-signal" />
              {siteConfig.phone}
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
