import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Suspense } from "react"

import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://primeauto.deals"),
  title: {
    default: `${siteConfig.name} | E-commerce solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  keywords: [
    "prime auto deals",
    "e-commerce agency",
    "Shopify development",
    "headless commerce",
    "platform migration",
  ],
}

async function DeferredFooter() {
  const { SiteFooter } = await import("@/components/layout/site-footer")
  return <SiteFooter />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased", jakarta.variable, "font-sans")}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Suspense fallback={<footer className="min-h-40 bg-ink" aria-hidden />}>
          <DeferredFooter />
        </Suspense>
      </body>
    </html>
  )
}
