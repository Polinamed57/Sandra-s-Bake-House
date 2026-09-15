import type { NavLink } from '@/lib/types'

export const site = {
  name: "Sandra's Bake House",
  tagline: 'NYC-style cookies and cheesecakes, baked in Edmonton',
  description:
    'Small batch cookies and Basque cheesecakes for cafes, coffee shops and specialty grocers.',
  url: 'https://sandrasbakehouse.ca',
  city: 'Edmonton, AB',
} as const

export const contact = {
  email: 'olek.sandrasbakehouse@gmail.com',
  phone: '+1 (825) 977 6550',
  address: {
    line1: '000 Example St',
  },
} as const

export const hours = [
  { days: 'Mon – Fri', time: '8:00 – 18:00' },
  { days: 'Sat', time: '9:00 – 16:00' },
  { days: 'Sun', time: 'Closed' },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/sandras_bake_house?stkn=MW1hZWZ5cmJsdjR1Yw==' },
  { label: 'YouTube', href: 'https://youtube.com/@sandras_bake_house?si=OlItWjHZD90aZReS' },
]

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const wholesale = {
  minimum: '5 dozen minimum per order',
  leadTime: '5 business days for a first delivery',
  delivery: 'Delivery across Edmonton and surrounding areas',
} as const