'use client';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              src="/logo_new.svg"
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
            <Link href="/services" className="hover:text-sky-700">Services</Link>
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
                <Link href="/services" className="px-2 py-1 hover:bg-gray-100 rounded-md">Services</Link>
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
