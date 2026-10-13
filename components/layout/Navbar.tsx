'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, site } from '@/content/site'

const SCROLL_THRESHOLD = 8

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll(): void {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    // Run once on mount: the page can load already scrolled (anchor links, reload)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ease-out ${
        scrolled
          ? 'bg-cream/85 shadow-[0_6px_24px_-12px_rgb(36_1_1/0.35)] backdrop-blur-md'
          : 'bg-blush'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-3 sm:px-8 sm:py-5"
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

        {/* Every page ends with the order block, so this scrolls on the current page instead of jumping home */}
        <a
          href="#order"
          className="rounded-full bg-cocoa px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-cocoa-soft"
        >
          Order wholesale
        </a>
      </nav>
    </header>
  )
}
