import { faq } from '@/content/site'

export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
      <h2 className="text-center font-sandra text-4xl sm:text-5xl">Good to know</h2>
      <div className="mt-10 divide-y divide-cocoa/15 border-y border-cocoa/15">
        {faq.map((item) => (
          <details key={item.question} className="group py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2 text-lg font-medium">
              {item.question}
              <span
                aria-hidden="true"
                className="text-2xl leading-none transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-cocoa/80">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
