export type Category = 'cookies' | 'cheesecakes'

export type Product = {
  id: string
  name: string
  category: Category
  description: string
  image: string
  alt: string
  minOrder: string | null
  allergens: string[]
  featured: boolean
  available: boolean
}

export type NavLink = {
  label: string
  href: string
}