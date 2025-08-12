import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import CTA from '@/components/CTA'
import Slideshow from '@/components/Slideshow'


export default function HomePage() {
  return (
    <>
      <main>
        <Slideshow />
        <Hero />
        <ServicesGrid />
        <CTA />
      </main>
    </>
  )
}
