import Hero from '@/components/Hero'
// import ServicesGrid from '@/components/ServicesGrid'
import CTA from '@/components/CTA'
import Slideshow from '@/components/Slideshow'
import ServicesSlideshow from '@/components/ServicesSlideshow';





export default function HomePage() {
  return (
    <>
      <main>
        <Slideshow />
        <Hero />
        {/* <ServicesGrid /> */}
        <ServicesSlideshow />
        <CTA />
      </main>
    </>
  )
}
