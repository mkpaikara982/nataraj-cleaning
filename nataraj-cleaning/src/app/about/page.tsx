export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold">About Nataraj Cleaning</h1>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <p className="text-gray-700">
          We’re a Sydney-based cleaning team committed to reliable service, clear communication,
          and great results. Our cleaners are background-checked, fully insured, and trained on
          eco‑friendly best practices.
        </p>
        <p className="text-gray-700">
          Whether it’s a weekly home tidy, an end-of-lease clean, or a recurring office plan,
          we tailor our checklist to your space and your standards.
        </p>
      </div>
    </main>
  )
}
