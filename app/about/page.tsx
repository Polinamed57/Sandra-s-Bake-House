import type { Metadata } from 'next'
import Image from 'next/image'
import { about, socials } from '@/content/site'
import { InstagramOutlineIcon, YouTubeIcon } from '@/components/ui/BrandIcons'
import WholesaleTerms from '@/components/about/WholesaleTerms'
import OrderCta from '@/components/home/OrderCta'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story behind Sandra's Bake House: small-batch NYC-style cookies, hand-baked in Edmonton for local cafés.",
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-cocoa text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
              About us
            </p>
            <h1 className="mt-4 font-sandra text-5xl leading-tight sm:text-6xl">
              {about.heading}
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-cream/90">
              {about.intro}
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/lineup.jpg"
              alt="All five flavours individually wrapped on a pink background"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pt-20 sm:px-8">
        <div className="space-y-5 text-lg leading-relaxed">
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-10 rounded-3xl border-2 border-dashed border-cocoa/40 px-7 py-6">
          <p className="font-sandra text-2xl">{about.tip.title}</p>
          <p className="mt-2 leading-relaxed text-cocoa/80">{about.tip.text}</p>
        </aside>

        <ul className="mt-10 flex justify-center gap-4">
          {socials.map((social) => {
            const Icon = social.label === 'YouTube' ? YouTubeIcon : InstagramOutlineIcon
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Sandra's Bake House on ${social.label}`}
                  className="flex size-12 items-center justify-center rounded-full bg-cocoa text-cream transition-colors hover:bg-cocoa-soft"
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <WholesaleTerms />
      <OrderCta />
    </>
  )
}
