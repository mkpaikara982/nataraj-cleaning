export interface Service {
  name: string
  title: string
  desc: string
  img: string
  shortDesc?: string
  features?: string[]
  includes?: string[]
  whyChooseUs?: string[]
  process?: {
    step: string
    description: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
  pricing?: {
    size: string
    price: string
    duration: string
  }[]
}

export const services: Service[] = [
  {
    name: 'Residential_Clean',
    title: 'Residential Clean',
    desc: 'Our Residential Cleaning service is designed to keep your home fresh, comfortable, and inviting. From kitchens and bathrooms to living areas and bedrooms, we tackle dust, dirt, and grime with care and precision. We use high-quality cleaning products and equipment to leave surfaces sparkling and floors spotless, ensuring every corner of your home is well-maintained and ready to enjoy.',
    img: '/services/Residential Clean.png',
    shortDesc: 'Professional home cleaning services for a fresh and comfortable living space.',
    features: [
      'Thorough cleaning of all living spaces',
      'Deep cleaning of bathrooms and kitchens',
      'Window and glass cleaning',
      'Carpet and floor care',
      'Dusting and cobweb removal',
      'Sanitization of high-touch surfaces'
    ],
    includes: [
      'All bedrooms and living areas',
      'Kitchen cleaning including appliances',
      'Bathroom sanitization',
      'Vacuuming and mopping all floors',
      'Interior window cleaning',
      'Dusting of all surfaces and fixtures'
    ],
    whyChooseUs: [
      'Experienced and vetted cleaning professionals',
      'Eco-friendly cleaning products available',
      'Flexible scheduling options',
      'Attention to detail guarantee',
      'Fully insured service',
      'Satisfaction guaranteed'
    ],
    process: [
      {
        step: 'Initial Assessment',
        description: 'We evaluate your home\'s specific cleaning needs and create a customized cleaning plan.'
      },
      {
        step: 'Pre-cleaning Preparation',
        description: 'Our team arrives with all necessary equipment and reviews your requirements.'
      },
      {
        step: 'Systematic Cleaning',
        description: 'We follow a detailed cleaning checklist to ensure no area is missed.'
      },
      {
        step: 'Quality Check',
        description: 'Final inspection to ensure everything meets our high standards.'
      }
    ],
    faqs: [
      {
        question: 'How long does a standard residential clean take?',
        answer: 'A standard clean typically takes 3-4 hours for an average-sized home. Time may vary based on the size and condition of your home.'
      },
      {
        question: 'Do I need to provide cleaning supplies?',
        answer: 'No, we bring all necessary cleaning supplies and equipment. However, if you prefer specific products, please let us know.'
      },
      {
        question: 'How often should I schedule residential cleaning?',
        answer: 'We recommend weekly or bi-weekly cleaning for optimal results, but we can customize the frequency based on your needs.'
      }
    ],
    pricing: [
      {
        size: '1-2 Bedroom Home',
        price: 'From $180',
        duration: '2-3 hours'
      },
      {
        size: '3-4 Bedroom Home',
        price: 'From $250',
        duration: '3-4 hours'
      },
      {
        size: '5+ Bedroom Home',
        price: 'From $320',
        duration: '4-5 hours'
      }
    ]
  },
 {
  name: "End_of_Lease_Clean",
  title: "End of Lease / Vacate Cleaning",
  desc:
    "Moving out is stressful enough. Our end‑of‑lease service delivers a thorough, top‑to‑bottom clean that helps you meet real‑estate expectations and present the property in its best condition.",
  img: "/services/End of Lease Clean.png",
  shortDesc: "Inspection‑ready cleaning so you can hand back the keys with confidence.",
  features: [
    "Full vacate clean (carpets excluded)",
    "Real‑estate / property‑manager ready",
    "Free in‑person walkthrough & quote",
  ],
  includes: [
    "Kitchen & appliances",
    "Bathrooms & toilets",
    "Bedrooms & living areas",
    "Laundry",
    "Hallways & entry",
    "Windows (internal only)",
  ],
  whyChooseUs: [
    "Tailored service to property manager expectations",
    "Add‑ons available for carpets, blinds, pest treatment",
    "Experienced team with attention to detail",
    "Transparent pricing with free walkthrough",
  ],
  process: [
    { step: "1", description: "Book a free walkthrough & receive a tailored quote." },
    { step: "2", description: "Our team arrives with all supplies and equipment." },
    { step: "3", description: "Thorough clean of kitchens, bathrooms, bedrooms and living spaces." },
    { step: "4", description: "Final touch‑ups and inspection checklist completion." },
  ],
  faqs: [
    {
      question: "Are carpets included in the end‑of‑lease clean?",
      answer: "No, carpet steam cleaning is excluded but can be added as an extra service.",
    },
    {
      question: "Do you guarantee bond return?",
      answer: "We provide a detailed checklist clean designed to meet most real‑estate standards, but bond return is at the discretion of your property manager/landlord.",
    },
  ],
  pricing: [
    { size: "1 Bedroom", price: "$220", duration: "4-5 hours" },
    { size: "2 Bedroom", price: "$320", duration: "6-7 hours" },
    { size: "3 Bedroom", price: "$420", duration: "8+ hours" },
  ],
},
{
  name: "Office_Cleaning",
  title: "Office Cleaning",
  desc:
    "Our office cleaning service is designed to keep your workplace fresh, hygienic and welcoming for staff and visitors. From daily cleans to weekly maintenance, we tailor plans to your office size, layout and workflow.",
  img: "/services/Office Clean.png",
  shortDesc: "Professional, flexible office cleaning for a healthier workplace.",
  features: [
    "Flexible daily, weekly or fortnightly schedules",
    "Tailored plans for small and large offices",
    "Boosts workplace hygiene & presentation",
  ],
  includes: [
    "Reception & entry areas",
    "Workstations & desks",
    "Meeting & conference rooms",
    "Kitchens & staff break areas",
    "Bathrooms & washrooms",
    "Common areas & hallways",
  ],
  whyChooseUs: [
    "Eco‑friendly cleaning products safe for office use",
    "After‑hours or weekend availability to minimise disruption",
    "Consumables restocking option",
    "Consistent, reliable cleaners for your business",
  ],
  process: [
    { step: "1", description: "Contact us for a tailored office cleaning plan." },
    { step: "2", description: "We assess your office and agree on schedule & scope." },
    { step: "3", description: "Our team performs regular cleaning to maintain hygiene and presentation." },
    { step: "4", description: "Ongoing support with add‑ons like carpet steam or sanitisation fogging." },
  ],
  faqs: [
    {
      question: "Do you provide after‑hours cleaning?",
      answer: "Yes, we can schedule cleans after business hours or weekends to avoid disruption.",
    },
    {
      question: "Are supplies and consumables included?",
      answer: "All cleaning supplies are included. Restocking of consumables like soap and paper towels can be arranged.",
    },
  ],
  pricing: [
    { size: "Small Office (up to 10 staff)", price: "$150/week", duration: "2-3 hours per clean" },
    { size: "Medium Office (10-30 staff)", price: "$300/week", duration: "4-5 hours per clean" },
    { size: "Large Office (30+ staff)", price: "$500+/week", duration: "6+ hours per clean" },
  ],
},
{
    name: 'Construction_Clean',
    title: 'Construction Clean / End of Build Clean',
    desc: 'Post-construction projects leave behind dust, debris, and residue that require specialist attention. Our Construction Clean / End of Build Clean service removes every trace of the build process, from fine dust on surfaces to paint splatters and construction waste. We ensure your new or renovated property is spotless, safe, and ready for immediate use or handover.',
    img: '/services/Construction Clean.png',
    shortDesc: 'Specialist cleaning for post-construction and renovation projects.'
  },
  {
    name: 'Deep_Clean',
    title: 'Deep Clean',
    desc: 'Our Deep Cleaning service goes beyond routine tidying to target hidden dirt, stubborn stains, and neglected spaces. Ideal for seasonal refreshes or special occasions, we clean inside cabinets, under furniture, behind appliances, and in hard-to-reach areas. The result is a truly revitalised home or workspace that feels as clean as it looks.',
    img: '/services/Deep Clean.png',
    shortDesc: 'Intensive cleaning service for a complete refresh.'
  },
]
