import { SendIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactMessageForm } from "@/components/forms/contact-message-form"

export function ContactForm() {
  return (
    <ScrollReveal direction="left" className="lg:col-span-7">
      <div className="rounded-none border border-ink/10 bg-card p-7 shadow-sm md:p-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-none bg-signal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-signal">
              Vehicle inquiry
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Tell us about <span className="text-signal">your short list.</span>
            </h2>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">* Required fields</p>
        </div>

        <ContactMessageForm />

        <p className="text-muted-foreground mt-6 flex items-center gap-2 text-xs">
          <SendIcon className="size-3.5 text-signal" aria-hidden />
          Submitting opens your mail client with this message prefilled.
        </p>
      </div>
    </ScrollReveal>
  )
}
