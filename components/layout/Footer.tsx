import { contact, site, socials } from '@/content/site'
import { InstagramOutlineIcon, MailIcon, YouTubeIcon } from '@/components/ui/BrandIcons'

const socialIcons: Record<string, typeof MailIcon> = {
  Instagram: InstagramOutlineIcon,
  YouTube: YouTubeIcon,
}

export default function Footer() {
  const links = [
    { label: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon, external: false },
    ...socials.map((social) => ({
      label: social.label,
      href: social.href,
      Icon: socialIcons[social.label] ?? MailIcon,
      external: true,
    })),
  ]

  return (
    <footer className="bg-cocoa text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-sandra text-3xl leading-none">Sandra&rsquo;s</p>
          <p className="font-bake text-2xl font-medium">Bake House</p>
          <p className="mt-3 text-sm text-cream/70">{site.city}</p>
        </div>

        <ul className="flex flex-col gap-3 text-sm sm:items-end">
          {links.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="inline-flex items-center gap-2.5 hover:underline"
              >
                {label}
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
