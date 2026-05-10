import type { LucideIcon } from "lucide-react"
import {
  ArrowRightLeftIcon,
  LayersIcon,
  LineChartIcon,
  PlugIcon,
  RocketIcon,
  StoreIcon,
} from "lucide-react"

import { servicePillars } from "@/lib/service-pillars"

const iconById: Record<string, LucideIcon> = {
  "store-build": StoreIcon,
  migration: ArrowRightLeftIcon,
  cro: LineChartIcon,
  integrations: PlugIcon,
  headless: LayersIcon,
  support: RocketIcon,
}

const platformsById: Record<string, string[]> = {
  "store-build": ["Shopify Plus", "WooCommerce", "BigCommerce", "Liquid / theme app"],
  migration: ["Magento", "Wix", "Custom", "CSV / API"],
  cro: ["GA4", "Hotjar", "Optimizely", "Shopify Scripts"],
  integrations: ["NetSuite", "ShipStation", "Klaviyo", "Stripe"],
  headless: ["Next.js", "Hydrogen", "Sanity", "Contentful"],
  support: ["Slack", "Linear", "GitHub", "Sentry"],
}

const narrativeById: Record<string, string> = {
  "store-build":
    "We start from your catalog and brand guidelines, then ship a storefront your team can operate without filing a ticket for every tweak.",
  migration:
    "We treat SEO and order history as first-class citizens—no surprise 404 waves or orphaned customer records on launch day.",
  cro:
    "Every experiment ships with measurement baked in so you can defend wins to finance and iterate on what did not move the needle.",
  integrations:
    "We write defensive integrations: retries, idempotency keys, and alerts before a silent failure costs you a weekend.",
  headless:
    "We pair a fast front end with a commerce engine you already trust—so marketing moves at editorial speed without forking checkout.",
  support:
    "Most clients keep us after launch for roadmap velocity—same engineers who built it, not a rotating offshore queue.",
}

export type ServicePageRow = {
  num: string
  icon: LucideIcon
  title: string
  desc: string
  engagement: string
  slug: string
  platforms: string[]
  includes: string[]
}

export function getServicePageRows(): ServicePageRow[] {
  return servicePillars.map((p) => ({
    num: p.index,
    icon: iconById[p.id] ?? StoreIcon,
    title: p.title,
    desc: `${narrativeById[p.id] ?? ""} ${p.summary}`.trim(),
    engagement: p.cadence,
    slug: p.id,
    platforms: platformsById[p.id] ?? [],
    includes: [...p.bullets],
  }))
}
