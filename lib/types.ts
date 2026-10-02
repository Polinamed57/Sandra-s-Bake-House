export type Category = 'cookies' | 'cheesecakes'

// Per-flavour colours, matching the flavour pages in the PDF catalog
export type FlavourTheme = {
  background: string
  text: string
  accent: string
}

export type ProductPhoto = {
  src: string
  alt: string
}

export type Product = {
  id: string
  name: string
  category: Category
  description: string
  image: string
  // Square crop with the cookie centred, for round previews
  thumbnail: string
  alt: string
  // Extra photos shown under the main one on the Flavours page
  gallery: ProductPhoto[]
  weight: string
  wholesalePrice: number
  minOrder: string | null
  ingredients: string
  allergens: string[]
  mayContain: string[]
  theme: FlavourTheme
  featured: boolean
  available: boolean
}

export type NavLink = {
  label: string
  href: string
}
