import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

export function CtaHowItWorks() {
  return (
    <SectionWrapper padding="sm">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-none bg-signal p-8 text-white shadow-lg md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Get started</p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
                Ready when you are— <span className="text-ink">let&apos;s talk.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 md:text-base">
                Send a brief or call the line. We will come back with a clear next step—never a black hole inbox.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none bg-ink px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-ink sm:w-auto"
              >
                Open contact form
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                href={siteConfig.phoneTel}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none border border-white/25 bg-white/15 px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/25 sm:w-auto"
              >
                <PhoneIcon className="size-4" />
                {siteConfig.phone}
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
