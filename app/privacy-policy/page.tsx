import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Auto Deals",
  description:
    "How Prime Auto Deals collects, uses, and protects personal information for visitors and prospective clients.",
  keywords: ["privacy policy", "data protection", "prime auto deals privacy", "e-commerce agency privacy"],
  openGraph: {
    title: "Privacy Policy — Prime Auto Deals",
    description: "Privacy policy for the Prime Auto Deals website and client engagements.",
    url: "/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect personal information when you use our website or contact us."
        lastUpdated="October 23, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Privacy Policy" },
        ]}
      />
      <PrivacyPolicyContent />
    </>
  )
}
