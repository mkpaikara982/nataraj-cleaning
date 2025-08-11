import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.natarajcleaning.com'), // change to your domain later
  title: {
    default: 'Nataraj Cleaning',
    template: '%s | Nataraj Cleaning',
  },
  description: 'Reliable residential & commercial cleaning in your area.',
  openGraph: {
    title: 'Nataraj Cleaning',
    description: 'Reliable residential & commercial cleaning in your area.',
    url: 'https://www.natarajcleaning.com',
    siteName: 'Nataraj Cleaning',
    images: [{ url: '/logo.svg', width: 512, height: 512, alt: 'Nataraj Cleaning logo' }],
    locale: 'en_AU',
    type: 'website',
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
