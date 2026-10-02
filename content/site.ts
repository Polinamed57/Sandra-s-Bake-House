import type { NavLink } from '@/lib/types'

export const site = {
  name: "Sandra's Bake House",
  tagline: 'Big, soft NYC-style cookies, baked in small batches in Edmonton',
  description:
    'Small-batch NYC-style cookies for Edmonton cafés and coffee shops. Individually wrapped, delivered fresh-frozen.',
  url: 'https://sandrasbakehouse.ca',
  city: 'Edmonton, AB',
} as const

export const contact = {
  email: 'olek.sandrasbakehouse@gmail.com',
  phone: '+1 825 977 6550',
  instagramDm: 'https://ig.me/m/sandras_bake_house',
} as const

export const orderEmail = {
  subject: 'Wholesale inquiry',
  body: 'Hi Sandra,\n\nCafé name:\nFlavours and quantities:\nPreferred delivery date:\n\nThanks!',
} as const

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

// Draft copy for Sandra to rewrite in her own words
export const about = {
  heading: 'Big cookies, small batches.',
  intro:
    "Sandra's Bake House makes big, soft, NYC-style cookies for Edmonton cafés and coffee shops.",
  story: [
    'Every batch is mixed, scooped and baked by hand in a licensed commercial kitchen that follows all food safety standards.',
    'Each cookie weighs around 110–120 g, so it looks generous in your display case and feels like a real treat next to a latte.',
    'Sandra keeps the line-up small on purpose: five flavours, each one tested until it was exactly right.',
  ],
  tip: {
    title: 'Unwrap & warm me up',
    text: 'A quick warm-up brings back that soft, fresh-from-the-oven feel. Your staff get simple handling and storage instructions with every order.',
  },
} as const

export const wholesale = {
  minimum: '12 cookies per flavour, mix and match all five',
  leadTime: '5–7 days preferred (negotiable)',
  delivery: 'Edmonton area only, fee depends on location',
  pickup: 'Available on request',
  packaging: 'Individually wrapped and labelled',
  shelfLife: '4 days on the counter, 2 months in the freezer',
  payment: 'Invoice or e-Transfer',
} as const
