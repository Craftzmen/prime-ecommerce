import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "agreement", label: "Agreement to terms" },
  { id: "services", label: "Services" },
  { id: "accounts", label: "Website use" },
  { id: "proposals", label: "Proposals & SOWs" },
  { id: "payment", label: "Fees & payment" },
  { id: "ip", label: "Intellectual property" },
  { id: "client-materials", label: "Client materials" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "warranties", label: "Warranties & disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
]

export function TermsAndConditionsContent() {
  return (
    <SectionWrapper className="relative" padding="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">On this page</p>
            <nav aria-label="Terms and conditions table of contents">
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
            <section id="agreement" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Agreement to terms</h2>
              <p>
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to the Prime Auto Deals
                website and, together with any signed master services agreement, statement of work, or order
                form (collectively, an &ldquo;Agreement&rdquo;), your purchase of our professional services.
                By using this site or engaging us, you agree to these Terms. If an Agreement conflicts with
                these Terms, the Agreement controls for that engagement.
              </p>
            </section>

            <section id="services" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Services</h2>
              <p>
                Prime Auto Deals provides e-commerce design, development, migration, integrations,
                optimization, support packages, and related consulting. Scope, deliverables, timelines, and
                fees are defined in the applicable Agreement. Work outside that scope requires a written
                change order or amended SOW before it begins.
              </p>
            </section>

            <section id="accounts" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Website use</h2>
              <p>
                You may browse our site for lawful purposes. You agree not to misuse the site—including
                attempting unauthorized access, scraping at a rate that degrades service, introducing
                malware, or using content in a way that violates intellectual property or privacy laws. We
                may suspend access that we reasonably believe violates these Terms.
              </p>
            </section>

            <section id="proposals" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Proposals & SOWs</h2>
              <p>
                Estimates and proposals are valid for the period stated (or thirty days if none is stated)
                and may change if requirements, platforms, or third-party dependencies shift. A proposal is
                not binding until both parties sign an Agreement and any required deposit is received.
              </p>
            </section>

            <section id="payment" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Fees & payment</h2>
              <p>
                Fees, payment schedules, and deposit rules appear in your Agreement and our{" "}
                <Link href="/refund-policy" className="font-semibold text-ink underline-offset-4 hover:text-signal hover:underline">
                  Refund Policy
                </Link>
                . Invoices are due as stated. Late amounts may accrue interest or pause work where permitted
                by the Agreement. You are responsible for applicable taxes unless we collect them on your
                behalf.
              </p>
            </section>

            <section id="ip" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Intellectual property</h2>
              <p>
                Upon full payment for the related deliverables, you receive ownership or a perpetual license
                to custom work product created uniquely for you, as specified in the Agreement. We retain
                rights to our pre-existing tools, frameworks, libraries, know-how, and generic components.
                Site content (copy, branding, and media) remains ours or our licensors&apos; unless otherwise
                stated.
              </p>
            </section>

            <section id="client-materials" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Client materials</h2>
              <p>
                You represent that you have the rights to materials, credentials, brand assets, and data you
                provide, and that our use of them as directed will not infringe third-party rights. You grant
                us a limited license to use those materials solely to perform the services.
              </p>
            </section>

            <section id="confidentiality" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Confidentiality</h2>
              <p>
                Each party will protect the other&apos;s confidential information with reasonable care and use
                it only to fulfill the engagement, except where disclosure is required by law. Mutual NDAs or
                confidentiality clauses in the Agreement may add further detail.
              </p>
            </section>

            <section id="warranties" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Warranties & disclaimers</h2>
              <p>
                We perform services in a professional and workmanlike manner consistent with industry
                practice. Except as expressly stated in an Agreement, the site and services are provided
                &ldquo;as is&rdquo; without other warranties—express or implied—including merchantability,
                fitness for a particular purpose, and non-infringement. We do not guarantee specific revenue,
                ranking, or uptime outcomes unless written into the Agreement.
              </p>
            </section>

            <section id="liability" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, neither party is liable for indirect, incidental,
                special, consequential, or punitive damages, or lost profits, arising from the site or
                services. Our aggregate liability for a given engagement is limited to the fees you paid us
                for that engagement in the twelve months before the claim, unless the Agreement sets a
                different cap.
              </p>
            </section>

            <section id="termination" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Termination</h2>
              <p>
                Either party may terminate an engagement as described in the Agreement and our{" "}
                <Link href="/refund-policy" className="font-semibold text-ink underline-offset-4 hover:text-signal hover:underline">
                  Refund Policy
                </Link>
                . Upon termination, you pay for work performed and approved expenses through the effective
                date. Provisions that by nature should survive (payment, IP, confidentiality, liability)
                continue after termination.
              </p>
            </section>

            <section id="governing-law" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of New York, without regard to conflict-of-
                law rules, unless your Agreement specifies otherwise. Courts located in Kings County, New
                York have exclusive jurisdiction for disputes arising from these Terms or the site, subject
                to any dispute process in your Agreement.
              </p>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Changes</h2>
              <p>
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of
                this page reflects the current version. Continued use of the site after changes constitutes
                acceptance of the revised Terms. Material changes to an active engagement are handled through
                the Agreement amendment process.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-none border border-ink/10 bg-card p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
              <p className="mb-6">Questions about these Terms:</p>
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
