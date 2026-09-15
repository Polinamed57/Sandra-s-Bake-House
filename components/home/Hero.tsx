import Link from 'next/link'

export default function Hero() {
  return (
    <section className=" px-4 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-olive">
          Wholesale · Edmonton, AB
        </p>

        <h1 className="mt-4 text-3xl leading-snug text-ink sm:text-4xl">
          Small batch NYC-style cookies
          <br className="hidden sm:block" /> for your counter
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink/70">
          Baked to order for cafes, coffee shops and specialty grocers across
          Edmonton and the surrounding area.
        </p>

        <Link
          href="/menu"
          className="mt-8 inline-block rounded-sm bg-olive-deep px-7 py-3 text-sm font-medium text-blossom-50 transition-colors hover:bg-ink"
        >
          See the menu
        </Link>
      </div>
    </section>
  )
}