import type { Metadata } from 'next'
import Image from 'next/image'
import { socials } from '@/content/site'
import { aboutBlocks, aboutFeaturePhoto, aboutHero, aboutTip } from '@/content/about'
import { InstagramOutlineIcon, YouTubeIcon } from '@/components/ui/BrandIcons'
import StoryBlock, { CutOutPhoto } from '@/components/about/StoryBlock'
import OrderCta from '@/components/home/OrderCta'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story behind Sandra's Bake House: small-batch NYC-style cookies, hand-baked in Edmonton for local cafés.",
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cocoa text-cream">
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-28">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
              About us
            </p>
            <h1 className="mt-4 text-balance font-sandra text-5xl leading-tight sm:text-6xl">
              {aboutHero.heading}
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-cream/90">
              {aboutHero.intro}
            </p>
          </div>
        </div>
        <div className="relative h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
          {aboutHero.photos.map((photo) => (
            <CutOutPhoto key={photo.src} photo={photo} />
          ))}
        </div>
      </section>

      <div className="space-y-4 pt-8 lg:space-y-0 lg:pt-0">
        {aboutBlocks.map((block) => (
          <StoryBlock key={block.id} block={block} />
        ))}
      </div>

      {/* Full-bleed and cropped short, so it reads as a banner rather than a framed photo */}
      <figure className="pt-8 lg:pt-12">
        <div className="relative aspect-[4/3] w-full sm:aspect-[5/2] lg:aspect-[3/1]">
          <Image
            src={aboutFeaturePhoto.src}
            alt={aboutFeaturePhoto.alt}
            fill
            sizes="100vw"
            className="object-cover object-[50%_51%]"
          />
        </div>
        <figcaption className="mt-14 text-center font-sandra text-2xl">
          {aboutFeaturePhoto.caption}
        </figcaption>
      </figure>

      <section className="mx-auto max-w-3xl px-5 pb-24 pt-5 sm:px-8">
        <aside className="rounded-3xl border-2 border-dashed border-cocoa/40 px-7 py-6">
          <p className="font-sandra text-2xl">{aboutTip.title}</p>
          <p className="mt-2 leading-relaxed text-cocoa/80">{aboutTip.text}</p>
        </aside>

        <ul className="mt-16 flex justify-center gap-4">
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

      <OrderCta />
    </>
  )
}
