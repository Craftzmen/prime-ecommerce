import type { Metadata } from "next"

import { CtaHowItWorks } from "@/components/how-it-works/cta-section"
import { FaqSection } from "@/components/how-it-works/faq-section"
import { HowItWorksHeader } from "@/components/how-it-works/how-it-works-header"
import { Timeline } from "@/components/how-it-works/timeline"

export const metadata: Metadata = {
  title: "How It Works | Five-step e-commerce delivery at Prime Auto Deals",
  description:
    "Discover, design, build, launch, and grow—with one lead, written milestones, and staging you sign off before production cutover.",
  keywords: [
    "e-commerce project process",
    "Shopify launch checklist",
    "commerce staging workflow",
    "agency discovery to launch",
  ],
  openGraph: {
    title: "How It Works — Prime Auto Deals",
    description:
      "Five clear steps from first call to production, with engineering and PM coverage throughout.",
    url: "/how-it-works",
    type: "website",
  },
  alternates: {
    canonical: "/how-it-works",
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHeader />
      <Timeline />
      <FaqSection />
      <CtaHowItWorks />
    </>
  )
}
