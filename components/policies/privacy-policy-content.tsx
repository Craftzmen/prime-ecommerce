import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "sharing", label: "Sharing Your Information" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact" },
]

const personalInfo = [
  "Name and contact details (email, phone, mailing address)",
  "Company name, role, and project context you share with us (platforms, timelines, technical constraints)",
  "Billing-related information when you purchase professional services (processed by payment partners)",
  "Messages, call notes, and documents you send through forms or email",
  "Optional analytics or credentials you provide for audits and integrations (handled under separate agreements when applicable)",
]

const autoCollected = [
  "IP address and approximate location",
  "Browser type, device type, and pages viewed",
  "Cookies and similar technologies used for analytics and site preferences",
]

const howWeUse = [
  "Respond to inquiries and schedule strategy or technical working sessions",
  "Prepare proposals, statements of work, and engagement artifacts for professional services",
  "Operate, secure, and improve our website and internal tools",
  "Comply with legal obligations and enforce our agreements",
]

const sharing = [
  "Service providers (hosting, analytics, email delivery, CRM)",
  "Subprocessors engaged to deliver contracted work (for example, infrastructure or monitoring), only as needed and under appropriate agreements",
  "Legal authorities when required by law",
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
            <section id="introduction" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Introduction</h2>
              <p>
                Prime Auto Deals (&ldquo;Prime,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website.
                This Privacy Policy describes how we collect, use, and protect personal information when you
                visit our site or engage with us for professional services.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Information We Collect</h2>
              <p className="mb-6">We may collect the following categories of information:</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-none border border-ink/10 bg-card p-5 md:p-6">
                  <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Personal information</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {personalInfo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-none border border-ink/10 bg-card p-5 md:p-6">
                  <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-signal">Automatically collected</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {autoCollected.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">How We Use Your Information</h2>
              <p className="mb-3">We use information to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {howWeUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Cookies and Tracking</h2>
              <p>
                We may use cookies to remember preferences, measure traffic, and improve the site. You can disable cookies in your browser; some features may not work as intended.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Sharing Your Information</h2>
              <p className="mb-3">We may share data with:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {sharing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">We do not sell personal information.</p>
            </section>

            <section id="third-party" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Third-Party Links</h2>
              <p>
                This site may link to commerce platforms, tools, or partners with separate privacy practices. We are not responsible for their policies or content.
              </p>
            </section>

            <section id="retention" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Data Retention</h2>
              <p>We retain information only as long as needed for the purposes above or as required by law, then delete or de-identify it.</p>
            </section>

            <section id="rights" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, delete, or export personal data. Contact us using the details below to exercise those rights.
              </p>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Changes to This Policy</h2>
              <p>We may update this policy; the last updated date at the top of this page reflects the latest version.</p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-none border border-ink/10 bg-card p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
              <p className="mb-6">Questions about this policy:</p>
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
