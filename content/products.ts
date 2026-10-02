import type { Product } from '@/lib/types'

const mayContain = ['peanuts', 'tree nuts', 'sesame']

export const products: Product[] = [
  {
    id: 'maple-cinnamon-crunch',
    name: 'Maple Cinnamon Crunch',
    category: 'cookies',
    description:
      'Soft cinnamon dough under a maple glaze, topped with crunchy honey oats.',
    image: '/images/products/maple-cinnamon-crunch.jpg',
    thumbnail: '/images/products/thumbs/maple-cinnamon-crunch.jpg',
    alt: 'Stack of Maple Cinnamon Crunch cookies with granola topping',
    weight: '115–120 g',
    wholesalePrice: 3.5,
    minOrder: '12 cookies',
    allergens: ['wheat', 'milk', 'egg'],
    mayContain,
    featured: true,
    available: true,
  },
  {
    id: 'lemon-drizzle',
    name: 'Lemon Drizzle',
    category: 'cookies',
    description:
      'A soft, buttery cookie with real lemon, finished with a sweet lemon glaze.',
    image: '/images/products/lemon-drizzle.jpg',
    thumbnail: '/images/products/thumbs/lemon-drizzle.jpg',
    alt: 'Stack of Lemon Drizzle cookies with lemon glaze, broken to show the soft centre',
    weight: '115 g',
    wholesalePrice: 3,
    minOrder: '12 cookies',
    allergens: ['wheat', 'milk', 'egg'],
    mayContain,
    featured: true,
    available: true,
  },
  {
    id: 'milk-chocolate-chip',
    name: 'Milk Chocolate Chip',
    category: 'cookies',
    description:
      'The classic, done NYC-style: thick and golden outside, soft in the middle.',
    image: '/images/products/milk-chocolate-chip.jpg',
    thumbnail: '/images/products/thumbs/milk-chocolate-chip.jpg',
    alt: 'Four Milk Chocolate Chip cookies on crinkled baking paper',
    weight: '110 g',
    wholesalePrice: 3.75,
    minOrder: '12 cookies',
    allergens: ['wheat', 'milk', 'egg', 'soy'],
    mayContain,
    featured: true,
    available: true,
  },
  {
    id: 'double-chocolate-salted-caramel',
    name: 'Double Chocolate Salted Caramel',
    category: 'cookies',
    description:
      'Rich cocoa dough, semi-sweet chocolate and a gooey salted caramel centre.',
    image: '/images/products/double-chocolate-salted-caramel.jpg',
    thumbnail: '/images/products/thumbs/double-chocolate-salted-caramel.jpg',
    alt: 'Double Chocolate Salted Caramel cookie broken in half, with a caramel drizzle',
    weight: '110–115 g',
    wholesalePrice: 3.75,
    minOrder: '12 cookies',
    allergens: ['wheat', 'milk', 'egg', 'soy'],
    mayContain,
    featured: true,
    available: true,
  },
  {
    id: 'walnut-chocolate-chip',
    name: 'Walnut Chocolate Chip',
    category: 'cookies',
    description:
      'Golden, chewy dough packed with semi-sweet chocolate and crunchy walnuts.',
    image: '/images/products/walnut-chocolate-chip.jpg',
    thumbnail: '/images/products/thumbs/walnut-chocolate-chip.jpg',
    alt: 'Walnut Chocolate Chip cookies broken open to show chocolate and walnuts',
    weight: '110 g',
    wholesalePrice: 3.5,
    minOrder: '12 cookies',
    allergens: ['wheat', 'milk', 'egg', 'soy', 'walnuts'],
    mayContain: ['peanuts', 'other tree nuts', 'sesame'],
    featured: true,
    available: true,
  },
]

export const categoryLabels: Record<Product['category'], string> = {
  cookies: 'Cookies',
  cheesecakes: 'Cheesecakes',
}

export function getFeatured(limit = 5): Product[] {
  return products.filter((p) => p.featured && p.available).slice(0, limit)
}

export function getLowestPrice(): number {
  return Math.min(...products.map((p) => p.wholesalePrice))
}
