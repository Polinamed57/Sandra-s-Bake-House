import Image from 'next/image'
import Link from 'next/link'
import type { AboutBlock, AboutPhoto } from '@/lib/types'

type Props = {
  block: AboutBlock
}

export default function StoryBlock({ block }: Props) {
  const photosOnLeft = block.side === 'left'

  return (
    <section className="relative overflow-hidden">
      {/* Photos hug the screen edge so arms run off the page instead of ending mid-air */}
      <div
        className={`relative h-72 lg:absolute lg:inset-y-0 lg:h-auto lg:w-[46%] ${
          photosOnLeft ? 'lg:left-0' : 'lg:right-0'
        }`}
      >
        {block.photos.map((photo) => (
          <CutOutPhoto key={photo.src} photo={photo} />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:flex lg:min-h-[30rem] lg:items-center lg:py-20">
        <div className={`lg:w-1/2 ${photosOnLeft ? 'lg:ml-auto lg:pl-12' : 'lg:pr-12'}`}>
          <h2 className="text-balance font-sandra text-4xl leading-tight sm:text-5xl">
            {block.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {block.quote && (
            <blockquote className="mt-8 border-l-4 border-cocoa pl-5">
              <p className="font-sandra text-2xl leading-snug sm:text-3xl">
                &ldquo;{block.quote.text}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium">
                {block.quote.attribution}
              </footer>
            </blockquote>
          )}

          {block.link && (
            <Link
              href={block.link.href}
              className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 hover:opacity-70"
            >
              {block.link.label} &rarr;
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

// The drop shadow sits on the wrapper and the fade mask on the image: on one
// element the mask would clip the shadow to a visible rectangle.
// The fade ends ~10% before the edge: the shadow is offset, so a fade reaching
// the very edge still leaves shadow that the block then cuts into a hard line.
const FADE_MASKS = {
  top: '[mask-image:linear-gradient(to_top,#000_65%,transparent_90%)]',
  bottom: '[mask-image:linear-gradient(to_bottom,#000_65%,transparent_90%)]',
} as const

export function CutOutPhoto({ photo }: { photo: AboutPhoto }) {
  return (
    <span className={`absolute ${photo.className}`}>
      {photo.backdrop && (
        <span aria-hidden="true" className={`absolute aspect-square rounded-full ${photo.backdrop}`} />
      )}
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(max-width: 1024px) 60vw, 420px"
        className={`relative block h-full w-auto max-w-none ${photo.fade ? FADE_MASKS[photo.fade] : ''}`}
      />
    </span>
  )
}
