import { wholesale } from '@/content/site'

const terms: { label: string; value: string }[] = [
  { label: 'Minimum order', value: wholesale.minimum },
  { label: 'Lead time', value: wholesale.leadTime },
  { label: 'Packaging', value: wholesale.packaging },
  { label: 'Shelf life', value: wholesale.shelfLife },
  { label: 'Delivery & pick-up', value: `${wholesale.delivery}. Pick-up ${wholesale.pickup.toLowerCase()}.` },
  { label: 'Payment', value: wholesale.payment },
]

export default function WholesaleTerms() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="text-center font-sandra text-4xl sm:text-5xl">
        Wholesale at a glance
      </h2>
      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map((term) => (
          <div key={term.label} className="rounded-2xl bg-cream px-6 py-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-cocoa-soft">
              {term.label}
            </dt>
            <dd className="mt-2 leading-relaxed">{term.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
