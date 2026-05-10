import type { Metadata } from "next"

import { ContactCards } from "@/components/contact/contact-cards"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactSidebar } from "@/components/contact/contact-sidebar"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export const metadata: Metadata = {
  title: "Contact Prime Auto Deals | Book a call or send a brief",
  description:
    "Reach Prime Auto Deals by message, phone, or scheduled call—clear next steps and replies within one business day when possible.",
  keywords: [
    "contact prime auto deals",
    "e-commerce project inquiry",
    "Shopify migration quote",
    "commerce agency austin",
  ],
  openGraph: {
    title: "Contact Us — Prime Auto Deals",
    description:
      "Send a structured brief or call the line. We reply within one business day with scope, timing, or clarifying questions.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactCards />
      <SectionWrapper background="muted">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <ContactForm />
          <ContactSidebar />
        </div>
      </SectionWrapper>
    </>
  )
}
