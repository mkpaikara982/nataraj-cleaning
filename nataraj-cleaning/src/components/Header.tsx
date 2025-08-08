import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.svg" alt="Nataraj Cleaning" width={0} height={0} priority style={{
    height: '10vh',        // 10% of viewport height
    width: 'auto',         // maintain aspect ratio
  }} />
          <span className="font-semibold tracking-tight">Nataraj Cleaning</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/services" className="hover:text-sky-700">Services</Link>
          <Link href="/about" className="hover:text-sky-700">About</Link>
          <Link href="/contact" className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-50">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
