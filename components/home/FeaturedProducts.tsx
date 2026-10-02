import Image from 'next/image'
import Link from 'next/link'
import { getFeatured } from '@/content/products'

export default function FeaturedProducts() {
  const flavours = getFeatured()

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 lg:pt-32">
      <h2 className="font-sandra text-4xl sm:text-5xl">
        {flavours.length} signature flavours
      </h2>
      <p className="mt-3 text-cocoa/75">
        Individually wrapped · Fresh-frozen · Made in Edmonton
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {flavours.map((flavour) => (
          <li key={flavour.id}>
            <Link href={`/menu#${flavour.id}`} className="group block text-center">
              <div className="relative mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-full ring-4 ring-cream/60 transition-transform group-hover:scale-105">
                <Image
                  src={flavour.thumbnail}
                  alt={flavour.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, 180px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug">
                {flavour.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
