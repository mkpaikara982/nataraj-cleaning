export const metadata = { title: 'Services' }

const services = [
  {
    name: 'Residential Clean',
    description: 'A complete cleaning service for your home, including kitchen, bathrooms, dusting, wiping, vacuuming, and mopping.',
  },
  {
    name: 'Office Clean',
    description: 'Flexible and reliable office cleaning services to create a clean and productive work environment. We can work around your schedule.',
  },
  {
    name: 'End of Lease',
    description: 'A thorough, bond-ready cleaning service to ensure you get your bond back. We clean all rooms and surfaces in detail.',
  },
  {
    name: 'Construction Clean',
    description: 'Post-construction cleaning to remove dust, debris, and other residues, leaving your new or renovated space spotless.',
  },
  {
    name: 'Deep Clean',
    description: 'An intensive cleaning service that targets hard-to-reach areas, including inside cabinets, skirting boards, and detailed surfaces.',
  },
  {
    name: 'Commercial Clean',
    description: 'Comprehensive cleaning solutions for commercial properties of all sizes, including retail stores, warehouses, and more.',
  },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-gray-600">We offer a wide range of cleaning services to meet your needs.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.name} className="border rounded-lg p-6">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
