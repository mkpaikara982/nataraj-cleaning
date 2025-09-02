import Link from 'next/link'
import { companyInfo } from '@/data/company'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">{companyInfo.name}</div>
          <div className="text-sm text-gray-600 mt-2">
            {companyInfo.tagline}
          </div>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-sky-700" href="/about">About</Link></li>
            <li><Link className="hover:text-sky-700" href="/services">Services</Link></li>
            <li><Link className="hover:text-sky-700" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>{companyInfo.phone}</li>
            <li>{companyInfo.email}</li>
            <li>{companyInfo.address}</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
