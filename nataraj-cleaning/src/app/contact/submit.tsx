'use server'

export async function submitContact(formData: FormData): Promise<void> {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  }

  // TODO: send email / save to DB
  console.log('Contact submission:', data)

  // No return value → satisfies (formData) => void | Promise<void>
  // Optional later: use redirect('/contact?sent=1')
}
