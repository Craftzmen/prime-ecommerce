import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"

export const metadata: Metadata = {
  title: "Refund Policy | Prime Auto Deals",
  description:
    "Illustrative refund, deposit, milestone, and retainer terms for the Prime Auto Deals demo—replace with counsel-approved professional services language.",
  keywords: ["refund policy", "agency deposit policy", "prime auto deals refunds", "milestone billing"],
  openGraph: {
    title: "Refund Policy — Prime Auto Deals",
    description: "Demo refund and deposit policy for the Prime Auto Deals marketing site.",
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
        description="Illustrative terms for deposits, returns, and third-party services. Not legal advice—engage counsel before retail launch."
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
