import type { Metadata } from "next"

import { AboutCta } from "@/components/about/about-cta"
import { AboutHeader } from "@/components/about/about-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTabs } from "@/components/about/about-tabs"

export const metadata: Metadata = {
  title: "About Prime Auto Deals | E-commerce engineering & strategy",
  description:
    "Learn how Prime Auto Deals pairs senior engineers and product leads with clear roadmaps—store builds, migrations, integrations, CRO, and long-term retainers.",
  keywords: [
    "about prime auto deals",
    "e-commerce development studio",
    "Shopify Plus partner",
    "headless commerce team",
    "commerce migration consultants",
  ],
  openGraph: {
    title: "About Us — Prime Auto Deals",
    description:
      "A privately held studio focused on measurable launches, honest estimates, and relationships that extend past go-live.",
    url: "/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <AboutTabs />
      <AboutStats />
      <AboutCta />
    </>
  )
}
