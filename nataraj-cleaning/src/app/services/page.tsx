import { services } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive cleaning solutions tailored to your specific needs,
          ensuring the highest standards of cleanliness and hygiene.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative w-full pb-[150%]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">
                {service.shortDesc}
              </p>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 
                           text-white font-medium rounded-lg hover:bg-green-700 
                           transition-colors duration-200"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We understand that every space is unique. Contact us to discuss your specific cleaning requirements,
          and we&apos;ll create a customized plan that works for you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-600 
                   text-white font-medium rounded-lg hover:bg-green-700 
                   transition-colors duration-200"
        >
          Get a Free Quote
        </Link>
      </div>
    </main>
  )
}
