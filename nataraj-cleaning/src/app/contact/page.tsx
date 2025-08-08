import { submitContact } from './submit'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold">Get a free quote</h1>
      <p className="mt-2 text-gray-600">
        Tell us about your place and preferred date/time. We’ll get back within one business day.
      </p>

      <form action={submitContact} className="mt-8 grid gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border p-2" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" className="mt-1 w-full rounded-md border p-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Service</label>
          <select name="service" className="mt-1 w-full rounded-md border p-2">
            <option>Regular Home Cleaning</option>
            <option>Deep / Spring Cleaning</option>
            <option>End-of-Lease</option>
            <option>Office & Commercial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={5} className="mt-1 w-full rounded-md border p-2" />
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md bg-[var(--brand)] px-4 py-2 text-white font-medium hover:bg-[var(--brand-dark)]"
        >
          Send
        </button>
      </form>
    </main>
  )
}
