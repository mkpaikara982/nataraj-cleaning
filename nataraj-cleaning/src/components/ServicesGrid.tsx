import Image from 'next/image'

const services = [
  {
    title: 'Residential Clean',
    desc: 'Our Residential Cleaning service is designed to keep your home fresh, comfortable, and inviting. From kitchens and bathrooms to living areas and bedrooms, we tackle dust, dirt, and grime with care and precision. We use high-quality cleaning products and equipment to leave surfaces sparkling and floors spotless, ensuring every corner of your home is well-maintained and ready to enjoy.',
    img: '/services/Residential Clean.png',
  },
  {
    title: 'End of Lease',
    desc: 'Moving out? Our End of Lease Cleaning is tailored to meet real estate and property management standards, helping you secure your full bond return. We deep clean every surface, appliance, and fixture, removing built-up grime and ensuring the property looks as good as new. Attention to detail is our priority, so you can hand over the keys with confidence.',
    img: '/services/End of Lease Clean.png',
  },
  {
    title: 'Commercial Clean',
    desc: 'Our Commercial Cleaning service keeps your business premises hygienic, presentable, and welcoming for clients and staff alike. From retail spaces to warehouses, we create a customised cleaning plan that fits your schedule and operations. Our professional team ensures every workspace is sanitised and safe, boosting your business’s image and productivity.',
    img: '/services/Commercial Clean.png',
  },
  {
    title: 'Office Clean',
    desc: 'We provide Office Cleaning solutions that support a healthy, productive workplace. Our services cover desks, meeting rooms, kitchens, restrooms, and common areas, with flexible scheduling to minimise disruption. Using eco-friendly products and meticulous attention to detail, we maintain a professional environment that reflects the standards of your organisation.',
    img: '/services/Office Clean.png',
  },
  {
    title: 'Construction Clean / End of Build Clean',
    desc: 'Post-construction projects leave behind dust, debris, and residue that require specialist attention. Our Construction Clean / End of Build Clean service removes every trace of the build process, from fine dust on surfaces to paint splatters and construction waste. We ensure your new or renovated property is spotless, safe, and ready for immediate use or handover.',
    img: '/services/Construction Clean.png',
  },
  {
    title: 'Deep Clean',
    desc: 'Our Deep Cleaning service goes beyond routine tidying to target hidden dirt, stubborn stains, and neglected spaces. Ideal for seasonal refreshes or special occasions, we clean inside cabinets, under furniture, behind appliances, and in hard-to-reach areas. The result is a truly revitalised home or workspace that feels as clean as it looks.',
    img: '/services/Deep Clean.png',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border p-6 flex flex-col">
              <Image
                src={s.img}
                alt={s.title}
                width={500}
                height={300}
                className="rounded-md object-cover mb-4"
              />
              <div className="font-semibold text-lg">{s.title}</div>
              <div className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
