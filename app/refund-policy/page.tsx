import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"

export const metadata: Metadata = {
  title: "Refund Policy | Prime Auto Deals",
  description:
    "Refund, deposit, milestone, and retainer terms for Prime Auto Deals professional services engagements.",
  keywords: ["refund policy", "agency deposit policy", "prime auto deals refunds", "milestone billing"],
  openGraph: {
    title: "Refund Policy — Prime Auto Deals",
    description: "Refund and deposit policy for Prime Auto Deals professional services.",
    url: "/refund-policy",
    type: "website",
  },
  alternates: {
    canonical: "/refund-policy",
  },
}

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Refund Policy"
        description="Terms for deposits, returns, and third-party services on Prime Auto Deals engagements."
        lastUpdated="May 10, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Refund Policy" },
        ]}
      />
      <RefundPolicyContent />
    </>
  )
}
