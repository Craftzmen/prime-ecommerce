export const siteConfig = {
  name: "Prime Auto Deals",
  tagline: "E-commerce solutions that ship on time and convert.",
  description:
    "Prime Auto Deals designs, builds, migrates, and grows online stores—Shopify, WooCommerce, headless stacks, integrations, CRO, and long-term engineering support for brands that need a senior partner.",
  phone: "802 242 0583",
  phoneTel: "tel:+18022420583",
  email: "query@primeautodeals.live",
  emailMailto: "mailto:query@primeautodeals.live",
  addressLines: ["1916 E 51ST Street 2FL", "Brooklyn, NY 11234"],
  hours: "Mon–Sat, 9am–7pm ET",
} as const

export type NavItem = { href: string; label: string }

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
]

export const policyNav: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
]

export const serviceLinks: NavItem[] = [
  { href: "/services#store-build", label: "Store design & build" },
  { href: "/services#migration", label: "Platform migration" },
  { href: "/services#cro", label: "Conversion optimization" },
  { href: "/services#integrations", label: "Integrations & APIs" },
  { href: "/services#headless", label: "Headless commerce" },
  { href: "/services#support", label: "Growth & support" },
]
