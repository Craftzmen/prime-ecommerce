export type ServicePillar = {
  id: string
  index: string
  title: string
  summary: string
  bullets: [string, string, string]
  cadence: string
}

export function getServicePillar(id: string): ServicePillar {
  const pillar = servicePillars.find((p) => p.id === id)
  if (!pillar) {
    throw new Error(`Unknown service pillar: ${id}`)
  }
  return pillar
}

export const servicePillars: ServicePillar[] = [
  {
    id: "store-build",
    index: "01",
    title: "Store design & build",
    summary:
      "Custom storefronts on Shopify, WooCommerce, and BigCommerce—performance-first, on-brand, and built to convert.",
    bullets: [
      "Design system and component library",
      "Core Web Vitals and accessibility hardening",
      "Analytics, SEO, and tracking from day one",
    ],
    cadence: "From 4 weeks",
  },
  {
    id: "migration",
    index: "02",
    title: "Platform migration",
    summary:
      "Replatform with a documented data plan, preserved SEO, and staging you can sign off before cutover.",
    bullets: [
      "Catalog, customer, and order migration",
      "Redirect maps and parity checks",
      "Zero-downtime launch playbooks",
    ],
    cadence: "Project-based",
  },
  {
    id: "cro",
    index: "03",
    title: "Conversion optimization",
    summary:
      "Analytics-led experiments on PDP, cart, and checkout—hypotheses tied to revenue, not guesswork.",
    bullets: [
      "Funnel audits and event instrumentation",
      "A/B tests and personalization hooks",
      "Quarterly readouts on lift and learnings",
    ],
    cadence: "Retainer",
  },
  {
    id: "integrations",
    index: "04",
    title: "Integrations & APIs",
    summary:
      "Connect ERPs, 3PLs, tax, payments, and marketing tools with reliable middleware and monitoring.",
    bullets: [
      "Webhook and REST design",
      "Idempotent jobs and error budgets",
      "Runbooks and on-call handoff",
    ],
    cadence: "From 2 weeks",
  },
  {
    id: "headless",
    index: "05",
    title: "Headless commerce",
    summary:
      "Composable storefronts on Next.js with your commerce backend—editorial freedom without sacrificing checkout trust.",
    bullets: [
      "Cart and checkout integration",
      "CMS and preview workflows",
      "Edge caching and ISR strategy",
    ],
    cadence: "From 6 weeks",
  },
  {
    id: "support",
    index: "06",
    title: "Growth & support",
    summary:
      "An embedded squad for releases, content updates, integrations, and performance—on a predictable retainer.",
    bullets: [
      "Dedicated lead and weekly demos",
      "Backlog grooming with your team",
      "Incident response SLAs where needed",
    ],
    cadence: "Retainer",
  },
]
