import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white border-b">
      <div className="mx-auto max-w-7xl px-4 py-20 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sparkling spaces, <span className="text-sky-600">zero hassle.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Residential, office, and end-of-lease cleaning delivered by trusted professionals.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-[var(--brand)] px-4 py-2 text-white font-medium hover:bg-[var(--brand-dark)]"
            >
              Get a free quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border px-4 py-2 font-medium hover:bg-gray-50"
            >
              Explore services
            </Link>
          </div>
          <p className="mt-3 text-sm text-gray-500">Fully insured • Eco‑friendly products • Satisfaction guarantee</p>
        </div>

        <div className="aspect-video rounded-lg border bg-white shadow-sm p-6">
          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li className="rounded-md border p-4">
              <div className="font-semibold">Regular Cleaning</div>
              <div className="text-gray-600 mt-1">Weekly or fortnightly</div>
            </li>
            <li className="rounded-md border p-4">
              <div className="font-semibold">Deep Cleaning</div>
              <div className="text-gray-600 mt-1">Top to bottom refresh</div>
            </li>
            <li className="rounded-md border p-4">
              <div className="font-semibold">End‑of‑Lease</div>
              <div className="text-gray-600 mt-1">Bond‑back friendly</div>
            </li>
            <li className="rounded-md border p-4">
              <div className="font-semibold">Office Cleaning</div>
              <div className="text-gray-600 mt-1">After‑hours available</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
