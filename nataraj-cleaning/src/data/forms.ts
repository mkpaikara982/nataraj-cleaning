export interface ContactFormOptions {
  services: string[]
  preferredTimes: string[]
}

export const contactFormOptions: ContactFormOptions = {
  services: [
    'Regular Home Cleaning',
    'Deep / Spring Cleaning',
    'End-of-Lease',
    'Office & Commercial',
    'Construction Clean',
    'Other'
  ],
  preferredTimes: [
    'Morning (8am - 12pm)',
    'Afternoon (12pm - 4pm)',
    'Evening (4pm - 8pm)',
    'Flexible'
  ]
}
