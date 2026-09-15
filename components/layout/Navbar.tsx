'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, site } from '@/content/site'
import LogoArch from './LogoArch'
import CookieDivider from '@/components/ui/CookieDivider'

export default function Navbar() {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-olive-deep text-blossom-200">
      <div className="mx-auto max-w-5xl px-4 pt-10">
        <Link href="/" aria-label={`${site.name}, home`} className="block">
          <LogoArch className="mx-auto w-80 transition-opacity hover:opacity-85 sm:w-[34rem]" />
        </Link>

        <CookieDivider className="-mt-2 mb-4" />

        <nav aria-label="Main" className="border-t border-blossom-200/25">
          <ul className="flex items-center justify-center gap-8 py-5 sm:gap-16">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={
                    isActive(link.href)
                        ? 'text-base font-medium tracking-wide text-white underline decoration-blossom-200 decoration-2 underline-offset-[8px]'
                        : 'text-base font-medium tracking-wide text-blossom-100 transition-colors hover:text-white'
}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}