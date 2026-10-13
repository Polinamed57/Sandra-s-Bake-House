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
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1 sm:justify-start sm:gap-8 sm:px-8 sm:py-3"
      >
        <Link
          href="/"
          className="py-3 font-sandra text-base font-semibold tracking-tight sm:text-lg"
          aria-label={`${site.name}, home`}
        >
          Sandra&rsquo;s
        </Link>

        <ul className="flex items-center gap-3 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={
                  isActive(link.href)
                    ? 'block py-3 text-[13px] font-medium underline decoration-2 underline-offset-8 sm:text-sm'
                    : 'block py-3 text-[13px] font-medium transition-opacity hover:opacity-70 sm:text-sm'
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
          aria-label="Order wholesale"
          className="shrink-0 rounded-full bg-cocoa px-3.5 py-2.5 text-[13px] font-medium text-cream transition-colors hover:bg-cocoa-soft sm:px-5 sm:text-sm"
        >
          {/* Short label on phones keeps the sticky bar to one row */}
          <span className="sm:hidden">Order</span>
          <span className="hidden sm:inline">Order wholesale</span>
        </a>
      </nav>
    </header>
  )
}
