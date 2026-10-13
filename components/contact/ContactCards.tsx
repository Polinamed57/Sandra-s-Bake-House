import { contact, tastingEmail } from '@/content/site'
import { mailtoLink } from '@/lib/utils'
import { InstagramOutlineIcon } from '@/components/ui/BrandIcons'

type Card = {
  title: string
  text: string
  action: string
  href: string
  external: boolean
  icon: React.ReactNode
}

const phoneIcon = (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.6 3h3l1.5 4.5-2.2 1.4a11 11 0 0 0 6.2 6.2l1.4-2.2L21 14.4v3A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3Z" />
  </svg>
)

const boxIcon = (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Zm0 0 8 4.5 8-4.5M12 13v7" />
  </svg>
)

const cards: Card[] = [
  {
    title: 'Try before you order',
    text: 'Ask for a tasting box and try the flavours with your team first.',
    action: 'Request a tasting box',
    href: mailtoLink({ to: contact.email, ...tastingEmail }),
    external: false,
    icon: boxIcon,
  },
  {
    title: 'Call or text',
    text: 'Quick question about an order or delivery? Give us a call.',
    action: contact.phone,
    href: contact.phoneHref,
    external: false,
    icon: phoneIcon,
  },
  {
    title: 'Message on Instagram',
    text: 'See new batches first and send us a DM any time.',
    action: '@sandras_bake_house',
    href: contact.instagramDm,
    external: true,
    icon: <InstagramOutlineIcon />,
  },
]

export default function ContactCards() {
  return (
    <ul className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-3">
      {cards.map((card, i) => (
        <li
          key={card.title}
          className={`flex flex-col rounded-3xl px-7 py-8 ${i === 0 ? 'bg-cocoa text-cream' : 'bg-cream'}`}
        >
          <span className={`flex size-12 items-center justify-center rounded-full ${i === 0 ? 'bg-blush text-cocoa' : 'bg-cocoa text-cream'}`}>
            {card.icon}
          </span>
          <h2 className="mt-5 font-sandra text-2xl">{card.title}</h2>
          <p className={`mt-2 flex-1 text-sm leading-relaxed ${i === 0 ? 'text-cream/80' : 'text-cocoa/80'}`}>
            {card.text}
          </p>
          <a
            href={card.href}
            {...(card.external && { target: '_blank', rel: 'noopener noreferrer' })}
            className="mt-4 self-start py-2 font-semibold underline decoration-2 underline-offset-4 hover:opacity-70"
          >
            {card.action}
          </a>
        </li>
      ))}
    </ul>
  )
}
