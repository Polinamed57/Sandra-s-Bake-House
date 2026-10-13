import type { NavLink } from '@/lib/types'

export const site = {
  name: "Sandra's Bake House",
  tagline: 'Big, soft NYC-style cookies, baked in small batches in Edmonton',
  description:
    'Small-batch NYC-style cookies for Edmonton cafés and coffee shops. Individually wrapped, delivered fresh-frozen.',
  // Until Sandra buys a domain, share links must point at the live Vercel address
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  city: 'Edmonton, AB',
} as const

export const contact = {
  email: 'olek.sandrasbakehouse@gmail.com',
  phone: '+1 825 977 6550',
  phoneHref: 'tel:+18259776550',
  instagramDm: 'https://ig.me/m/sandras_bake_house',
} as const

export const orderEmail = {
  subject: 'Wholesale inquiry',
  body: 'Hi Sandra,\n\nCafé name:\nFlavours and quantities:\nPreferred delivery date:\n\nThanks!',
} as const

export const tastingEmail = {
  subject: 'Tasting box request',
  body: "Hi Sandra,\n\nWe'd love to try your cookies before ordering.\n\nCafé name:\nAddress:\nBest time to drop off:\n\nThanks!",
} as const

// Answers come from the wholesale catalog, except the tasting box wording, which Sandra should confirm
export const faq = [
  {
    question: 'Can we try the cookies before ordering?',
    answer: "Yes. Ask us for a tasting box and we'll arrange it, so you can try the flavours with your team before placing a first order.",
  },
  {
    question: 'How small can a first order be?',
    answer: 'The minimum is 12 cookies per flavour. You can order just one flavour or mix and match all five.',
  },
  {
    question: 'How should we store the cookies?',
    answer: 'They arrive fresh-frozen. Keep them in the freezer for up to 2 months, and thaw what you need: they stay fresh for 4 days on the counter. A short warm-up brings back that fresh-from-the-oven feel.',
  },
  {
    question: 'Do you deliver outside Edmonton?',
    answer: 'Yes, we deliver across Edmonton and surrounding areas. The delivery fee depends on your location, and pick-up is available on request.',
  },
  {
    question: 'How do we pay?',
    answer: 'By invoice or e-Transfer.',
  },
] as const

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/sandras_bake_house' },
  { label: 'YouTube', href: 'https://youtube.com/@sandras_bake_house' },
]

export const navLinks: NavLink[] = [
  { label: 'Flavours', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const perks = [
  {
    id: 'ready',
    title: 'Ready to sell',
    text: 'Every cookie arrives individually wrapped and labelled with full ingredients. Straight from the box to your counter.',
  },
  {
    id: 'waste',
    title: 'Less waste',
    text: 'Delivered fresh-frozen. Thaw only what you need and keep the rest in the freezer for up to 2 months.',
  },
  {
    id: 'local',
    title: 'Proudly local',
    text: 'Baked by hand in small batches in a licensed Edmonton kitchen. A local story your customers will love.',
  },
] as const

export const wholesale = {
  minimum: '12 cookies per flavour, mix and match all five',
  leadTime: '5–7 days preferred (negotiable)',
  delivery: 'Edmonton and surrounding areas, fee depends on location',
  pickup: 'Available on request',
  packaging: 'Individually wrapped and labelled',
  shelfLife: '4 days on the counter, 2 months in the freezer',
  payment: 'Invoice or e-Transfer',
} as const
