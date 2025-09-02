import Link from 'next/link'
import { services } from '@/data/services'

export default function Hero() {
  const isOdd = services.length % 2 !== 0

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
            {services.map((service) => (
              <li key={service.name} className="rounded-md border p-0">
                <Link href={`/services/${service.name}`} className="block p-4 h-full">
                  <div className="font-semibold">{service.title}</div>
                  <div className="text-gray-600 mt-1">{service.shortDesc}</div>
                </Link>
              </li>
            ))}
            {isOdd && (
              <li className="rounded-md border p-0">
                <Link href="/services" className="block p-4 h-full">
                  <div className="font-semibold">See All Services</div>
                  <div className="text-gray-600 mt-1">Explore our full range of cleaning solutions.</div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
