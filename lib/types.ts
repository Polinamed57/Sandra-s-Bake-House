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

// One cut-out photo on the About page. `className` positions and sizes it inside
// its photo area (corner, height, rotation), so every block can be tuned in data.
export type AboutPhoto = {
  src: string
  width: number
  height: number
  // Empty string marks a decorative photo
  alt: string
  className: string
  // Soft-fades the edge where an arm leaves its block, so neither the cut nor its shadow shows
  fade?: 'top' | 'bottom'
  // Classes for a round disc behind the photo (position, size, colour)
  backdrop?: string
}

export type AboutBlock = {
  id: string
  heading: string
  paragraphs: string[]
  quote?: { text: string; attribution: string }
  link?: { label: string; href: string }
  // Which side of the page the photos sit on; the text takes the other side
  side: 'left' | 'right'
  photos: AboutPhoto[]
}
