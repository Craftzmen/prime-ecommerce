import type { Metadata } from "next"
import { Suspense } from "react"
import { Hero } from "@/components/home/hero"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "E-commerce design, build, migration & optimization",
  description: siteConfig.description,
  keywords: [
    "Shopify Plus agency",
    "WooCommerce development",
    "e-commerce migration",
    "headless commerce Next.js",
    "conversion rate optimization",
  ],
  openGraph: {
    title: `${siteConfig.name} — E-commerce solutions & engineering`,
    description: siteConfig.description,
    url: "/",
    type: "website",
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  alternates: {
    canonical: "/",
  },
}

async function DeferredHomeServices() {
  const { HomeServices } = await import("@/components/home/services-section")
  return <HomeServices />
}

async function DeferredAboutSnapshot() {
  const { AboutSnapshot } = await import("@/components/home/about-snapshot")
  return <AboutSnapshot />
}

async function DeferredProcessSection() {
  const { ProcessSection } = await import("@/components/home/process-section")
  return <ProcessSection />
}

async function DeferredTestimonialsSection() {
  const { TestimonialsSection } = await import("@/components/home/testimonials-section")
  return <TestimonialsSection />
}

async function DeferredCtaBanner() {
  const { CtaBanner } = await import("@/components/home/cta-banner")
  return <CtaBanner />
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <DeferredHomeServices />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredAboutSnapshot />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredProcessSection />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredTestimonialsSection />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredCtaBanner />
      </Suspense>
    </>
  )
}
