import type { Metadata } from "next"

import { ServicesBooking } from "@/components/services/services-booking"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesHeader } from "@/components/services/services-header"
import { ServicesUrgentCta } from "@/components/services/services-urgent-cta"

export const metadata: Metadata = {
  title: "Services | Store build, migration, CRO, integrations & support",
  description:
    "Six tracks: store design and build, platform migration, conversion optimization, integrations and APIs, headless commerce, and growth retainers—end to end.",
  keywords: [
    "Shopify agency services",
    "WooCommerce migration",
    "e-commerce CRO",
    "commerce API integrations",
    "headless Next.js storefront",
  ],
  openGraph: {
    title: "Services — Prime Auto Deals",
    description:
      "Six pillars covering how we design, migrate, optimize, integrate, compose, and support modern online stores.",
    url: "/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesGrid />
      <ServicesBooking />
      <ServicesUrgentCta />
    </>
  )
}
