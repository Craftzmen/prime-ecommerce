import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { TermsAndConditionsContent } from "@/components/policies/terms-and-conditions-content"

export const metadata: Metadata = {
  title: "Terms & Conditions | Prime Auto Deals",
  description:
    "Terms and conditions for using the Prime Auto Deals website and engaging our professional services.",
  keywords: [
    "terms and conditions",
    "prime auto deals terms",
    "agency service terms",
    "e-commerce consulting terms",
  ],
  openGraph: {
    title: "Terms & Conditions — Prime Auto Deals",
    description: "Website and professional services terms for Prime Auto Deals.",
    url: "/terms-and-conditions",
    type: "website",
  },
  alternates: {
    canonical: "/terms-and-conditions",
  },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The rules that govern use of our website and how we deliver professional services engagements."
        lastUpdated="October 23, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Terms & Conditions" },
        ]}
      />
      <TermsAndConditionsContent />
    </>
  )
}
