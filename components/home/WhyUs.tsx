import { perks } from '@/content/site'

type PerkId = (typeof perks)[number]['id']

const icons: Record<PerkId, React.ReactNode> = {
  ready: (
    <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Zm0 0 8 4.5 8-4.5M12 13v7" />
  ),
  waste: (
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5 12 7l2.5-2.5M9.5 19.5 12 17l2.5 2.5" />
  ),
  local: (
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  ),
}

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <h2 className="text-center font-sandra text-4xl sm:text-5xl">
        Why cafés choose us
      </h2>

      <ul className="mt-10 grid gap-5 sm:grid-cols-3">
        {perks.map((perk) => (
          <li key={perk.id} className="rounded-3xl bg-cream px-7 py-8">
            <svg
              viewBox="0 0 24 24"
              className="size-9 fill-none stroke-cocoa"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icons[perk.id]}
            </svg>
            <h3 className="mt-5 font-sandra text-2xl">{perk.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cocoa/80">
              {perk.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
