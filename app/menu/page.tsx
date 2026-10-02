import type { Metadata } from 'next'
import { getAvailable } from '@/content/products'
import { wholesale } from '@/content/site'
import ProductGrid from '@/components/menu/ProductGrid'
import OrderCta from '@/components/home/OrderCta'

export const metadata: Metadata = {
  title: 'Flavours',
  description:
    'Five NYC-style cookies for Edmonton cafés: weights, wholesale prices, allergens and full ingredients.',
}

export default function MenuPage() {
  const flavours = getAvailable()

  return (
    <>
      <header className="mx-auto max-w-3xl px-5 pb-14 pt-12 text-center sm:px-8 sm:pt-16">
        <h1 className="font-sandra text-5xl sm:text-6xl">Our flavours</h1>
        <p className="mt-5 text-lg font-light leading-relaxed">
          Big, soft cookies, around 110–120 g each, baked in small batches and
          delivered individually wrapped.
        </p>
        <p className="mt-4 text-sm font-medium">
          Minimum {wholesale.minimum}.
        </p>
        <a
          href="/Sandras-Bake-House-Wholesale-2026.pdf"
          download
          className="mt-6 inline-block rounded-full border border-cocoa px-6 py-3 text-sm font-medium transition-colors hover:bg-cocoa hover:text-cream"
        >
          Download the wholesale menu (PDF)
        </a>
      </header>

      <ProductGrid products={flavours} />

      <div className="pt-20">
        <OrderCta />
      </div>
    </>
  )
}
