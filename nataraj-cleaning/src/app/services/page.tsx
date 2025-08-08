export const metadata = { title: 'Services' }

const rows = [
  { name: 'Regular Home Clean', includes: 'Kitchen, bathrooms, dust & wipe, vacuum & mop', price: 'From $129' },
  { name: 'Deep Clean', includes: 'Inside cabinets, skirting boards, detail surfaces', price: 'From $249' },
  { name: 'End-of-Lease', includes: 'Bond-ready detail across all rooms', price: 'From $349' },
  { name: 'Office Clean', includes: 'Flexible schedules, supplies provided', price: 'POA' },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold">Services & pricing</h1>
      <p className="mt-2 text-gray-600">Transparent pricing, tailored quotes for larger spaces.</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <table className="min-w-[640px] w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">Service</th>
              <th className="text-left p-3">Includes</th>
              <th className="text-left p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-t">
                <td className="p-3 font-medium">{r.name}</td>
                <td className="p-3 text-gray-700">{r.includes}</td>
                <td className="p-3">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
