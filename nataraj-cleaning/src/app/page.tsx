import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
