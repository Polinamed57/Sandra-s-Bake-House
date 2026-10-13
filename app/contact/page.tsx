import type { Metadata } from 'next'
import { site } from '@/content/site'
import ContactCards from '@/components/contact/ContactCards'
import Faq from '@/components/contact/Faq'
import WholesaleTerms from '@/components/about/WholesaleTerms'
import OrderCta from '@/components/home/OrderCta'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Order wholesale cookies from Sandra's Bake House: email, phone or Instagram, plus a tasting box for Edmonton cafés.",
}

export default function ContactPage() {
  return (
    <>
      <header className="mx-auto max-w-3xl px-5 pb-12 pt-12 text-center sm:px-8 sm:pt-16">
        <h1 className="font-sandra text-5xl sm:text-6xl">Let&rsquo;s talk cookies</h1>
        <p className="mt-5 text-lg font-light leading-relaxed">
          Ordering for your café, or just curious? Pick whatever is easiest
          for you. We&rsquo;re based in {site.city}.
        </p>
      </header>

      <ContactCards />

      <div className="pt-16">
        <OrderCta />
      </div>

      <WholesaleTerms />
      <Faq />
    </>
  )
}
