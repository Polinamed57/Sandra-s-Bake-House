'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, site } from '@/content/site'

export default function Navbar() {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-blush">
      {/* Content stays left so the hero hand can reach up into the right side */}
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8"
      >
        <Link
          href="/"
          className="font-sandra text-lg font-semibold tracking-tight"
          aria-label={`${site.name}, home`}
        >
          Sandra&rsquo;s
        </Link>

        <ul className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={
                  isActive(link.href)
                    ? 'text-sm font-medium underline decoration-2 underline-offset-8'
                    : 'text-sm font-medium transition-opacity hover:opacity-70'
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#order"
          className="rounded-full bg-cocoa px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-cocoa-soft"
        >
          Order wholesale
        </Link>
      </nav>
    </header>
  )
}
