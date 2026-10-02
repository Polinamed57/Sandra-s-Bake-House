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

export const wholesale = {
  minimum: '12 cookies per flavour, mix and match all five',
  leadTime: '5–7 days preferred (negotiable)',
  delivery: 'Edmonton area only, fee depends on location',
  packaging: 'Individually wrapped and labelled',
  shelfLife: '4 days on the counter, 2 months in the freezer',
  payment: 'Invoice or e-Transfer',
} as const
