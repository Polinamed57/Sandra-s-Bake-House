import Image from 'next/image'
import type { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'

type Props = {
  product: Product
  index: number
  total: number
}

export default function ProductCard({ product, index, total }: Props) {
  // Theme colours come from data, so they're passed as CSS variables
  const themeVars = {
    '--flavour-bg': product.theme.background,
    '--flavour-text': product.theme.text,
    '--flavour-accent': product.theme.accent,
  } as React.CSSProperties
  const photosFirst = index % 2 === 0

  return (
    <section
      id={product.id}
      style={themeVars}
      className="scroll-mt-4 bg-(--flavour-bg) text-(--flavour-text)"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className={photosFirst ? '' : 'lg:order-2'}>
          <ProductPhotos product={product} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--flavour-accent)">
            Flavour {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <h2 className="mt-3 font-sandra text-4xl leading-tight text-(--flavour-accent) sm:text-5xl">
            {product.name}
          </h2>
          <p className="mt-4 text-lg font-light leading-relaxed">
            {product.description}
          </p>
          <ProductFacts product={product} />
          <ProductAllergens product={product} />
        </div>
      </div>
    </section>
  )
}

function ProductPhotos({ product }: { product: Product }) {
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 1024px) 90vw, 540px"
          className="object-cover"
        />
      </div>
      {product.gallery.length > 0 && (
        <ul className="mt-4 grid grid-cols-3 gap-4">
          {product.gallery.map((photo) => (
            <li key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={photo.src} alt={photo.alt} fill sizes="180px" className="object-cover" />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ProductFacts({ product }: { product: Product }) {
  const facts = [
    { label: 'Weight', value: product.weight },
    { label: 'Wholesale', value: `${formatPrice(product.wholesalePrice)} / cookie` },
    { label: 'Minimum', value: product.minOrder ?? '—' },
  ]

  return (
    <dl className="mt-8 grid grid-cols-3 border-y border-(--flavour-accent)/30">
      {facts.map((fact, i) => (
        <div key={fact.label} className={`py-4 ${i > 0 ? 'border-l border-(--flavour-accent)/30 pl-4' : ''}`}>
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-(--flavour-accent)">
            {fact.label}
          </dt>
          <dd className="mt-1 font-medium">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function ProductAllergens({ product }: { product: Product }) {
  return (
    <div className="mt-6 space-y-2 text-sm">
      <p>
        <span className="font-semibold">Contains:</span> {product.allergens.join(', ')}.
      </p>
      <p>
        <span className="font-semibold">May contain:</span> {product.mayContain.join(', ')}.
      </p>
      <details className="group pt-2">
        <summary className="cursor-pointer list-none font-semibold text-(--flavour-accent) underline decoration-1 underline-offset-4">
          <span className="group-open:hidden">Show ingredients</span>
          <span className="hidden group-open:inline">Hide ingredients</span>
        </summary>
        <p className="mt-3 leading-relaxed opacity-90">{product.ingredients}</p>
      </details>
    </div>
  )
}
