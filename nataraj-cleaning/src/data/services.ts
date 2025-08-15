export interface Service {
  title: string
  desc: string
  img: string
  shortDesc?: string
}

export const services: Service[] = [
  {
    title: 'Residential Clean',
    desc: 'Our Residential Cleaning service is designed to keep your home fresh, comfortable, and inviting. From kitchens and bathrooms to living areas and bedrooms, we tackle dust, dirt, and grime with care and precision. We use high-quality cleaning products and equipment to leave surfaces sparkling and floors spotless, ensuring every corner of your home is well-maintained and ready to enjoy.',
    img: '/services/Residential Clean.png',
    shortDesc: 'Professional home cleaning services for a fresh and comfortable living space.'
  },
  {
    title: 'End of Lease',
    desc: 'Moving out? Our End of Lease Cleaning is tailored to meet real estate and property management standards, helping you secure your full bond return. We deep clean every surface, appliance, and fixture, removing built-up grime and ensuring the property looks as good as new. Attention to detail is our priority, so you can hand over the keys with confidence.',
    img: '/services/End of Lease Clean.png',
    shortDesc: 'Thorough end of tenancy cleaning to ensure your bond return.'
  },
  {
    title: 'Commercial Clean',
    desc: "Our Commercial Cleaning service keeps your business premises hygienic, presentable, and welcoming for clients and staff alike. From retail spaces to warehouses, we create a customised cleaning plan that fits your schedule and operations. Our professional team ensures every workspace is sanitised and safe, boosting your business's image and productivity.",
    img: '/services/Commercial Clean.png',
    shortDesc: 'Custom cleaning solutions for businesses of all sizes.'
  },
  {
    title: 'Office Clean',
    desc: 'We provide Office Cleaning solutions that support a healthy, productive workplace. Our services cover desks, meeting rooms, kitchens, restrooms, and common areas, with flexible scheduling to minimise disruption. Using eco-friendly products and meticulous attention to detail, we maintain a professional environment that reflects the standards of your organisation.',
    img: '/services/Office Clean.png',
    shortDesc: 'Professional office cleaning for a productive workspace.'
  },
  {
    title: 'Construction Clean / End of Build Clean',
    desc: 'Post-construction projects leave behind dust, debris, and residue that require specialist attention. Our Construction Clean / End of Build Clean service removes every trace of the build process, from fine dust on surfaces to paint splatters and construction waste. We ensure your new or renovated property is spotless, safe, and ready for immediate use or handover.',
    img: '/services/Construction Clean.png',
    shortDesc: 'Specialist cleaning for post-construction and renovation projects.'
  },
  {
    title: 'Deep Clean',
    desc: 'Our Deep Cleaning service goes beyond routine tidying to target hidden dirt, stubborn stains, and neglected spaces. Ideal for seasonal refreshes or special occasions, we clean inside cabinets, under furniture, behind appliances, and in hard-to-reach areas. The result is a truly revitalised home or workspace that feels as clean as it looks.',
    img: '/services/Deep Clean.png',
    shortDesc: 'Intensive cleaning service for a complete refresh.'
  },
]
