import type { Product } from '@/lib/types'

export const products: Product[] = [
  {
    id: 'classic-chocolate-chip',
    name: 'Classic chocolate chip',
    category: 'cookies',
    description:
      'Brown butter base, dark chocolate chunks, finished with flaky sea salt.',
    image: '/images/products/classic-chocolate-chip.jpg',
    alt: 'Stack of chocolate chip cookies on a plate',
    minOrder: '5 dozen',
    allergens: ['wheat', 'dairy', 'egg', 'soy'],
    featured: true,
    available: true,
  },
  {
    id: 'brown-butter-pecan',
    name: 'Brown butter pecan',
    category: 'cookies',
    description: 'Toasted pecans, maple notes, soft centre with crisp edges.',
    image: '/images/products/brown-butter-pecan.jpg',
    alt: 'Pecan cookies on parchment paper',
    minOrder: '5 dozen',
    allergens: ['wheat', 'dairy', 'egg', 'nuts'],
    featured: true,
    available: true,
  },
  {
    id: 'double-dark-cocoa',
    name: 'Double dark cocoa',
    category: 'cookies',
    description: 'Deep cocoa dough with a molten dark chocolate centre.',
    image: '/images/products/double-dark-cocoa.jpg',
    alt: 'Dark chocolate cookies broken to show a soft centre',
    minOrder: '5 dozen',
    allergens: ['wheat', 'dairy', 'egg', 'soy'],
    featured: false,
    available: true,
  },
  {
    id: 'nyc-classic-cheesecake',
    name: 'NYC classic cheesecake',
    category: 'cheesecakes',
    description: 'Dense New York style bake on a graham base, 9 inch.',
    image: '/images/products/nyc-classic-cheesecake.jpg',
    alt: 'Whole New York cheesecake with one slice cut',
    minOrder: '3 cakes',
    allergens: ['wheat', 'dairy', 'egg'],
    featured: true,
    available: true,
  },
  {
    id: 'basque-burnt-cheesecake',
    name: 'Basque burnt cheesecake',
    category: 'cheesecakes',
    description: 'Crustless, caramelised top, custard centre, 8 inch.',
    image: '/images/products/basque-burnt-cheesecake.jpg',
    alt: 'Basque burnt cheesecake with a deeply browned top',
    minOrder: '3 cakes',
    allergens: ['dairy', 'egg'],
    featured: false,
    available: true,
  },
  {
    id: 'cheesecake-bar-tray',
    name: 'Cheesecake bar tray',
    category: 'cheesecakes',
    description: 'Pre cut bars sized for counter display, ships chilled.',
    image: '/images/products/cheesecake-bar-tray.jpg',
    alt: 'Tray of square cheesecake bars for a display case',
    minOrder: '2 trays of 24',
    allergens: ['wheat', 'dairy', 'egg'],
    featured: false,
    available: true,
  },
]

export const categoryLabels: Record<Product['category'], string> = {
  cookies: 'Cookies',
  cheesecakes: 'Cheesecakes',
}

export function getFeatured(limit = 3): Product[] {
  return products.filter((p) => p.featured && p.available).slice(0, limit)
}