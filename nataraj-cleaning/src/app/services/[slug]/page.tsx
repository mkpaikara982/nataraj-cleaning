// app/services/[slug]/page.tsx
import { services } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Next.js 15+ expects params as a Promise in type checks
type RouteParams = { slug: string }
type PageProps = { params: Promise<RouteParams> }

// Generate static params for all services
export function generateStaticParams() {
  // If services export is typed loosely, this narrows enough for build-time
  return (services as any[]).map((s) => ({ slug: String(s.name) }))
}

// Generate metadata per page (safe with Promise params)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = (services as any[]).find((s) => s?.name === slug)

  if (!service) return { title: 'Service Not Found' }

  const titleBase = service?.title ?? slug
  const metaTitle =
    service?.meta?.title ?? `${titleBase} - Nataraj Cleaning`
  const metaDescription =
    typeof service?.meta?.description === 'string'
      ? service.meta.description
      : typeof service?.shortDesc === 'string'
      ? service.shortDesc
      : undefined

  return { title: metaTitle, description: metaDescription }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params

  const service = (services as any[]).find((s) => s?.name === slug)
  if (!service) notFound()

  // Safe accessors & fallbacks
  const title: string = String(service.title ?? slug)
  const shortDesc: string | undefined =
    typeof service.shortDesc === 'string' ? service.shortDesc : undefined
  const imgSrc: string = String(service.img ?? '/placeholder.jpg')

  // Normalize potentially different shapes from services.ts
  const desc = service.desc
  const features: any[] = Array.isArray(service.features) ? service.features : []
  const processSteps: any[] = Array.isArray(service.process)
    ? service.process
    : Array.isArray(desc) // some data may have moved desc -> steps array
    ? desc
    : []
  const faqs: any[] = Array.isArray(service.faqs) ? service.faqs : []
  const gallery: string[] = Array.isArray(service.gallery)
    ? service.gallery
    : []
  const packages: any[] = Array.isArray(service.packages)
    ? service.packages
    : []
  const includes: string[] = Array.isArray(service.include)
    ? service.include
    : []

  const hasStringDesc = typeof desc === 'string'

  const featureLabel = (item: any) =>
    typeof item === 'string'
      ? item
      : item?.label ?? item?.title ?? item?.text ?? ''

  const isStepObj = (x: any) =>
    x && typeof x === 'object' && 'step' in x && 'description' in x

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {shortDesc && (
            <p className="text-xl text-white/90 max-w-2xl">{shortDesc}</p>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          {/* About */}
          {(hasStringDesc || processSteps.length === 0) && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
              {hasStringDesc && (
                <p className="text-gray-700 leading-relaxed">{desc as string}</p>
              )}
              {/* If desc was converted into steps, we'll render them below in Process */}
            </section>
          )}

          {/* Features (supports array of strings OR array of objects with label/text) */}
          {features.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((f, i) => {
                  const label = featureLabel(f)
                  if (!label) return null
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-2 rounded-lg bg-gray-50 p-3"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                      <span className="text-gray-700">{label}</span>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          {/* Includes (legacy simple list) */}
          {includes.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {includes.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Process / Steps (array of { step, description }) */}
          {processSteps.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <ol className="space-y-4">
                {processSteps.map((p, i) =>
                  isStepObj(p) ? (
                    <li
                      key={i}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <div className="font-semibold">
                        {p.step || `Step ${i + 1}`}
                      </div>
                      {p.description && (
                        <p className="text-gray-700">{p.description}</p>
                      )}
                    </li>
                  ) : (
                    // If the item is just a string fall back nicely
                    <li key={i} className="rounded-lg border border-gray-200 p-4">
                      <div className="font-semibold">{`Step ${i + 1}`}</div>
                      <p className="text-gray-700">
                        {typeof p === 'string' ? p : ''}
                      </p>
                    </li>
                  )
                )}
              </ol>
            </section>
          )}

          {/* Packages / Pricing cards */}
          {packages.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Packages</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {packages.map((pkg, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 p-5 shadow-sm"
                  >
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-semibold">
                        {pkg?.name ?? `Package ${i + 1}`}
                      </h3>
                      {pkg?.price && (
                        <span className="text-green-700 font-medium">
                          {pkg.price}
                        </span>
                      )}
                    </div>
                    {Array.isArray(pkg?.includes) && pkg.includes.length > 0 && (
                      <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 text-sm">
                        {pkg.includes.map((it: string, j: number) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    )}
                    {pkg?.note && (
                      <p className="mt-3 text-gray-600 text-sm">{pkg.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <summary className="font-medium cursor-pointer">
                      {f?.q ?? `Question ${i + 1}`}
                    </summary>
                    {f?.a && <p className="mt-2 text-gray-700">{f.a}</p>}
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Book This Service</h3>
            <p className="text-gray-600 mb-6">
              Ready to experience our professional {title.toLowerCase()} service?
              Get in touch for a free quote or to schedule an appointment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 
                       text-white font-medium rounded-lg hover:bg-green-700 
                       transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </aside>
      </div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((src, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden">
                <Image src={src} alt={`${title} ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Other Services You Might Like</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(services as any[])
            .filter((s) => s?.name !== service.name)
            .slice(0, 3)
            .map((related, i) => (
              <Link
                key={related?.name ?? i}
                href={`/services/${related?.name}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-md 
                         hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={String(related?.img ?? imgSrc)}
                    alt={String(related?.title ?? related?.name ?? 'Service')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {String(related?.title ?? related?.name ?? 'Service')}
                  </h3>
                  {typeof related?.shortDesc === 'string' && (
                    <p className="text-gray-600 text-sm">{related.shortDesc}</p>
                  )}
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  )
}
