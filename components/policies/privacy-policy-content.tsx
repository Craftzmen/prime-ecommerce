import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "cookies", label: "Cookies" },
  { id: "data-security", label: "Data Security" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "rights", label: "Your Rights" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact" },
]

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper className="relative" padding="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">On this page</p>
            <nav aria-label="Privacy policy table of contents">
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
            <section id="information-we-collect" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                1. Information We Collect
              </h2>
              <p>
                {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you
                provide directly when you fill out contact forms, request quotes, subscribe to updates, or
                communicate with us by email or phone. This may include your name, email address, phone
                number, company name, and project details.
              </p>
              <p className="mt-4">
                We also automatically collect certain technical information when you visit our website, such
                as your IP address, browser type, device information, pages viewed, and referring URLs through
                cookies and similar technologies.
              </p>
            </section>

            <section id="how-we-use" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to respond to inquiries, provide services, send project
                updates, improve our website, and communicate relevant information about our services. We do
                not sell your personal information to third parties.
              </p>
            </section>

            <section id="cookies" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">3. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience and analyze site traffic. You
                can control cookie preferences through your browser settings.
              </p>
            </section>

            <section id="data-security" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">4. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your
                personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section id="third-party" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                5. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices of those sites and encourage you to review their policies.
              </p>
            </section>

            <section id="rights" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by
                contacting us at{" "}
                <Link
                  href={siteConfig.emailMailto}
                  className="font-semibold text-ink underline-offset-4 hover:text-signal hover:underline"
                >
                  {siteConfig.email}
                </Link>
                .
              </p>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with
                an updated effective date.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-none border border-ink/10 bg-card p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
              <p className="mb-6">
                For questions about this policy, contact us at{" "}
                <Link
                  href={siteConfig.emailMailto}
                  className="font-semibold text-ink underline-offset-4 hover:text-signal hover:underline"
                >
                  {siteConfig.email}
                </Link>{" "}
                or call{" "}
                <Link
                  href={siteConfig.phoneTel}
                  className="font-semibold text-ink underline-offset-4 hover:text-signal hover:underline"
                >
                  {siteConfig.phone}
                </Link>
                .
              </p>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <MapPinIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Address</p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      {siteConfig.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <PhoneIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Phone</p>
                    <Link
                      href={siteConfig.phoneTel}
                      className="mt-1 block text-sm font-semibold text-ink hover:text-signal"
                    >
                      {siteConfig.phone}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-signal/10 text-signal">
                    <MailIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Email</p>
                    <Link
                      href={siteConfig.emailMailto}
                      className="mt-1 block break-all text-sm font-semibold text-ink hover:text-signal"
                    >
                      {siteConfig.email}
                    </Link>
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
