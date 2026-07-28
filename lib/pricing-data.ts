export type PricingPlan = {
  id: "basic" | "standard" | "premium"
  name: string
  price: number
  description: string
  features: string[]
  featured?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 300,
    description: "Keep an existing storefront healthy with maintenance and app coverage.",
    features: ["Website Maintenance", "App Support"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 600,
    description: "Ship web work alongside site care and app support in one fixed package.",
    features: ["Web Development", "Website Maintenance", "App Support"],
  },
  {
    id: "premium",
    name: "Premium",
    price: 1500,
    description: "Full stack—build, maintain, support, and commerce delivery under one lead.",
    features: [
      "Web Development",
      "Website Maintenance",
      "App Support",
      "Technical Support",
      "E-commerce Solutions",
    ],
    featured: true,
  },
]
