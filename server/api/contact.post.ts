import { createTransport } from 'nodemailer'
import { defineEventHandler, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export default defineEventHandler(async (event): Promise<ContactFormResponse> => {
  try {
    console.log('Reading request body...')
    const body = await readBody<ContactFormData>(event)
    console.log('Request body:', body)
    
    // Check form fields
    if (!body?.name || !body?.email || !body?.phone || !body?.message) {
      console.error('Missing required fields:', body)
      return {
        success: false,
        error: 'Lütfen tüm alanları doldurun.'
      }
    }

    // Check email password
    const config = useRuntimeConfig()
    if (!config.emailPassword) {
      console.error('Email password missing in config')
      return {
        success: false,
        error: 'Email yapılandırması eksik.'
      }
    }

    console.log('Creating transport...')
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'yapayzeka.haber@gmail.com',
        pass: config.emailPassword
      }
    })

    const mailOptions = {
      from: 'yapayzeka.haber@gmail.com',
      to: 'yapayzeka.haber@gmail.com',
      subject: 'Yeni İletişim Formu Mesajı',
      text: `
        İsim: ${body.name}
        E-posta: ${body.email}
        Telefon: ${body.phone}
        Mesaj: ${body.message}
      `
    }

    console.log('Sending email...')
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')

    return {
      success: true,
      message: 'Mesajınız başarıyla gönderildi.'
    }

  } catch (error) {
    console.error('Error in contact form:', error)
    return {
      success: false,
      error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    }
  }
})