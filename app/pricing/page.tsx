import type { Metadata } from "next"

import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingTiers } from "@/components/pricing/pricing-tiers"

export const metadata: Metadata = {
  title: "Pricing | One-time packages for maintenance, development & support",
  description:
    "Three one-time packages from Prime Auto Deals—Basic $300, Standard $600, and Premium $1500—covering website maintenance, web development, app support, and e-commerce solutions.",
  keywords: [
    "e-commerce package pricing",
    "website maintenance pricing",
    "Shopify support packages",
    "web development pricing",
  ],
  openGraph: {
    title: "Pricing — Prime Auto Deals",
    description:
      "Clear one-time packages for maintenance, development, and full commerce support.",
    url: "/pricing",
    type: "website",
  },
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <PricingTiers />
    </>
  )
}
