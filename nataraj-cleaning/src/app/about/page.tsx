import { companyInfo } from '@/data/company'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{companyInfo.name}</h1>
        <p className="text-xl text-gray-600">{companyInfo.tagline}</p>
      </div>

      {/* About Us Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">About Us</h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {companyInfo.aboutUs}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {companyInfo.values.map((value, idx) => (
            <div
              key={`${value.title}-${idx}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3">
            <MapPin className="text-green-600" size={24} />
            <span>{companyInfo.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-green-600" size={24} />
            <a href={`tel:${companyInfo.phone}`} className="hover:text-green-600">
              {companyInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-600" size={24} />
            <a href={`mailto:${companyInfo.email}`} className="hover:text-green-600">
              {companyInfo.email}
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 flex gap-4">
          {companyInfo.socialMedia?.facebook && (
            <a
              href={companyInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <Facebook size={24} />
            </a>
          )}
          {companyInfo.socialMedia?.instagram && (
            <a
              href={companyInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <Instagram size={24} />
            </a>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  )
}
