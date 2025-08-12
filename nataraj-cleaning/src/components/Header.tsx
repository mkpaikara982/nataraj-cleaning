import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ backgroundColor: 'rgba(154, 219, 179, 0.75)' }} // Custom green w/ transparency
    >
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_new.svg"
            alt="Nataraj Cleaning"
            width={0}
            height={0}
            priority
            style={{
              height: '10vh', // Increased logo size
              width: 'auto',  // Maintain aspect ratio
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
    </header>
  )
}
