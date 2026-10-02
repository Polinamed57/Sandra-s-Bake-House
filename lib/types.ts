export type Category = 'cookies' | 'cheesecakes'

export type Product = {
  id: string
  name: string
  category: Category
  description: string
  image: string
  // Square crop with the cookie centred, for round previews
  thumbnail: string
  alt: string
  weight: string
  wholesalePrice: number
  minOrder: string | null
  allergens: string[]
  mayContain: string[]
  featured: boolean
  available: boolean
}

export type NavLink = {
  label: string
  href: string
}
