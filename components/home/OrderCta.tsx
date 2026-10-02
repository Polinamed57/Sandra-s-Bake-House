import { contact, orderEmail, wholesale } from '@/content/site'
import { gmailLink, mailtoLink, outlookLink } from '@/lib/utils'
import { GmailIcon, InstagramIcon, MailIcon, OutlookIcon } from '@/components/ui/BrandIcons'
import CopyEmailButton from '@/components/ui/CopyEmailButton'

const draft = { to: contact.email, ...orderEmail }

const alternatives = [
  { label: 'Gmail', href: gmailLink(draft), Icon: GmailIcon },
  { label: 'Outlook', href: outlookLink(draft), Icon: OutlookIcon },
  { label: 'Instagram DM', href: contact.instagramDm, Icon: InstagramIcon },
]

export default function OrderCta() {
  return (
    <section id="order" className="scroll-mt-6 px-5 pb-20 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-cream px-6 py-12 text-center sm:px-12">
        <h2 className="font-sandra text-4xl leading-tight sm:text-5xl">
          Ready to fill your display case?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-cocoa/75">
          Minimum {wholesale.minimum}. Lead time {wholesale.leadTime}.
        </p>

        <a
          href={mailtoLink(draft)}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-cocoa px-8 py-4 text-base font-medium text-cream transition-colors hover:bg-cocoa-soft"
        >
          <MailIcon />
          Email us to order
        </a>

        <p className="mt-10 font-sandra text-xl">Prefer another way?</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {alternatives.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa/15 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-cocoa"
              >
                <Icon />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-cocoa/80">{contact.email}</span>
          <CopyEmailButton email={contact.email} />
        </div>
      </div>
    </section>
  )
}
