import { contact, site, socials } from '@/content/site'

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-sandra text-3xl leading-none">Sandra&rsquo;s</p>
          <p className="font-bake text-2xl font-medium">Bake House</p>
          <p className="mt-3 text-sm text-cream/70">{site.city}</p>
        </div>

        <ul className="flex flex-col gap-2 text-sm sm:items-end">
          <li>
            <a href={`mailto:${contact.email}`} className="hover:underline">
              {contact.email}
            </a>
          </li>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
