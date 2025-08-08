'use server'

export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  }

  // TODO: send email (Resend, AWS SES, or your mail provider) or save to DB.
  // For now, log to server and pretend success:
  console.log('Contact submission:', data)

  // Simple thank-you redirect (Next.js can return a redirect)
  return { success: true }
}
