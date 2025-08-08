import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 bg-sky-50 border-y">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Ready for a spotless space?</h3>
        <p className="mt-3 text-gray-600">Tell us what you need and we’ll send a quick, no‑obligation quote.</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-md bg-[var(--brand)] px-5 py-2.5 text-white font-medium hover:bg-[var(--brand-dark)]"
        >
          Get your free quote
        </Link>
      </div>
    </section>
  )
}
