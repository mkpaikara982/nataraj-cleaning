'use client';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '@/data/services'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ backgroundColor: 'rgba(154, 219, 179, 0.75)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-2">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Nataraj Cleaning"
              width={0}
              height={0}
              priority
              style={{
                height: '10vh',
                width: 'auto',
              }}
            />
            <span className="font-semibold tracking-tight text-xl sm:text-3xl">
              Nataraj Cleaning
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-lg">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center gap-1 hover:text-sky-700"
              >
                Services
                <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-0 w-64 rounded-lg py-2 transition-all transform origin-top backdrop-blur-md
                          ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                          border border-green-200 shadow-lg`}
                style={{ backgroundColor: 'rgba(154, 219, 179, 0.95)' }}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={`/services/${service.name}`}
                    className="block px-4 py-2 hover:bg-green-100/50 hover:text-green-800 text-base transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="hover:text-sky-700">About</Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border px-4 py-2 text-base font-medium hover:bg-gray-50"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo and Menu Button Row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_new.svg"
                alt="Nataraj Cleaning"
                width={0}
                height={0}
                priority
                style={{
                  height: '8vh',
                  width: 'auto',
                }}
              />
              <span className="font-semibold tracking-tight text-lg">
                Nataraj Cleaning
              </span>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="mt-2 py-2 border-t">
              <div className="flex flex-col gap-2">
                <Link href="/" className="px-2 py-1 hover:bg-gray-100 rounded-md">Home</Link>
                
                {/* Mobile Services Links */}
                <div className="px-2">
                  <div className="font-medium py-1">Services</div>
                  <div className="ml-4 flex flex-col gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={`/services/${service.name}`}
                        className="py-1 hover:bg-gray-100 rounded-md text-sm"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/about" className="px-2 py-1 hover:bg-gray-100 rounded-md">About</Link>
                <Link
                  href="/contact"
                  className="px-2 py-1 hover:bg-gray-100 rounded-md"
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
