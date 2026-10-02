import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'
import { getLowestPrice } from '@/content/products'
import PriceSticker from '@/components/ui/PriceSticker'

export default function Hero() {
  return (
    <section className="relative bg-cocoa text-cream">
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 lg:pb-20 lg:pt-16">
        <h1 className="leading-none">
          <span className="block font-sandra text-7xl sm:text-8xl lg:text-[8.5rem]">
            Sandra&rsquo;s
          </span>
          <span className="mt-1 block font-bake text-6xl font-medium sm:text-7xl lg:text-[6.25rem]">
            Bake House
          </span>
        </h1>

        <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-cream/90">
          {site.tagline}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/menu"
            className="rounded-full bg-blush px-6 py-3 text-sm font-medium text-cocoa transition-colors hover:bg-cream"
          >
            See the flavours
          </Link>
          <a
            href="/Sandras-Bake-House-Wholesale-2026.pdf"
            download
            className="rounded-full border border-cream/80 px-6 py-3 text-sm font-medium transition-colors hover:bg-cream hover:text-cocoa"
          >
            Wholesale menu (PDF)
          </a>
        </div>

        <PriceSticker
          price={getLowestPrice()}
          className="absolute left-[41%] top-52 hidden lg:flex"
        />
      </div>

      {/* The forearm runs off the right edge of the page, so the cut-out edge never shows.
          It starts inside the band because the sticky navbar would cover the fingertips. */}
      <Image
        src="/images/hero-hand.webp"
        alt="A hand holding three broken chocolate chip cookies"
        width={962}
        height={1141}
        priority
        sizes="(max-width: 1024px) 70vw, 560px"
        className="ml-auto block w-[70%] max-w-sm -mb-16 sm:max-w-md lg:absolute lg:top-4 lg:right-0 lg:mb-0 lg:h-[calc(100%+3rem)] lg:w-auto lg:max-w-none"
      />
    </section>
  )
}
