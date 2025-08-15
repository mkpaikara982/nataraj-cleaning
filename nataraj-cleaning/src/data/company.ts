export interface CompanyInfo {
  name: string
  tagline: string
  address: string
  phone: string
  email: string
  aboutUs: string
  values: Array<{
    title: string
    description: string
  }>
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export const companyInfo: CompanyInfo = {
  name: 'Nataraj Cleaning',
  tagline: 'Professional Cleaning Services in Melbourne',
  address: '123 Example Street, Melbourne VIC 3000',
  phone: '0412 345 678',
  email: 'info@natarajcleaning.com.au',
  aboutUs: `At Nataraj Cleaning, we pride ourselves on delivering exceptional cleaning services across Melbourne. 
    With years of experience in the industry, our team of dedicated professionals ensures your space is not just clean, 
    but truly immaculate. We understand that every property has unique needs, which is why we offer customized 
    cleaning solutions tailored to your specific requirements.`,
  values: [
    {
      title: 'Quality',
      description: 'We maintain the highest standards in cleaning services, using premium products and methods.'
    },
    {
      title: 'Reliability',
      description: 'Count on us to be there when you need us, delivering consistent results every time.'
    },
    {
      title: 'Professionalism',
      description: 'Our trained and vetted staff maintain the utmost professionalism in their work.'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen to your needs and deliver accordingly.'
    }
  ],
  socialMedia: {
    facebook: 'https://facebook.com/natarajcleaning',
    instagram: 'https://instagram.com/natarajcleaning'
  }
}
