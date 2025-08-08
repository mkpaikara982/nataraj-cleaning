const services = [
  { title: 'Regular Home Cleaning', desc: 'Kitchen, bathrooms, dusting, vacuum & mop.' },
  { title: 'Deep / Spring Cleaning', desc: 'Inside cabinets, skirting boards, high-touch surfaces.' },
  { title: 'End-of-Lease Cleaning', desc: 'Comprehensive clean for bond return.' },
  { title: 'Office & Commercial', desc: 'Tailored plans for workplaces and shops.' },
  { title: 'Carpet & Upholstery', desc: 'Steam clean and stain treatment.' },
  { title: 'Post-Renovation', desc: 'Fine dust and debris removal.' },
]

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Our services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border p-6">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
