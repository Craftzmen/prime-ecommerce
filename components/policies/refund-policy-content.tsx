import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "deposits", label: "Deposits & kickoff" },
  { id: "milestones", label: "Milestones & retainers" },
  { id: "cancellation", label: "Cancellation" },
  { id: "third-party-services", label: "Third-party fees" },
  { id: "disputes", label: "Disputes & chargebacks" },
  { id: "contact", label: "Contact" },
]

export function RefundPolicyContent() {
  return (
    <SectionWrapper className="relative" padding="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">On this page</p>
            <nav aria-label="Refund policy table of contents">
              <ol className="space-y-1.5 border-l border-ink/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="group -ml-px flex items-baseline gap-3 border-l-2 border-transparent py-2 pl-5 text-sm font-medium text-muted-foreground transition hover:border-signal hover:text-signal"
                    >
                      <span className="text-[10px] font-bold tracking-wider text-signal/70 group-hover:text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        <article className="lg:col-span-8">
          <div className="space-y-12 text-sm leading-relaxed text-muted-foreground md:text-base">
            <section id="overview" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Overview</h2>
              <p>
                This Refund Policy applies to Prime Auto Deals professional services engagements—custom
                software, migrations, packages, and retainers. Specific commercial terms in your master
                services agreement or statement of work control when they differ from this page.
              </p>
            </section>

            <section id="deposits" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Deposits & kickoff</h2>
              <p>
                When a deposit is collected to reserve a squad or calendar window, we disclose whether it is
                credited toward the first invoice, refundable until a kickoff milestone, or non-refundable
                after work begins. Any non-refundable portion is listed before you authorize payment.
              </p>
            </section>

            <section id="milestones" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Milestones & retainers</h2>
              <p>
                Fixed-fee projects typically invoice against documented milestones (for example, discovery
                sign-off, staging acceptance, production cutover). Monthly retainers bill in advance for a
                defined hour bucket; rollover rules, if any, appear in the SOW.
              </p>
            </section>

            <section id="cancellation" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Cancellation</h2>
              <p>
                Either party may terminate per the notice period in the governing agreement. Fees for work
                already performed, licensed third-party tools, and non-cancelable vendor commitments remain
                due as described in the contract. Unused prepaid retainer hours, if applicable, are handled
                per the SOW.
              </p>
            </section>

            <section id="third-party-services" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Third-party fees</h2>
              <p>
                Commerce platform subscriptions, app licenses, infrastructure, and payment processing are
                billed by their vendors. We pass through those costs only when agreed, with receipts or admin
                access so you can audit charges.
              </p>
            </section>

            <section id="disputes" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Disputes & chargebacks</h2>
              <p>
                If a billing dispute arises, contact your engagement lead first so we can reconcile
                timesheets, milestones, and pass-through expenses. Chargebacks may pause work in progress
                until the dispute is resolved.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-none border border-ink/10 bg-card p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
              <p className="mb-6">For questions about this policy:</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <MailIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Email</p>
                    <Link
                      href={siteConfig.emailMailto}
                      className="mt-1 block break-all text-sm font-semibold text-ink hover:text-signal md:text-base"
                    >
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <MapPinIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Address</p>
                    <p className="mt-1 text-sm font-semibold text-ink md:text-base">
                      {siteConfig.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </SectionWrapper>
  )
}
