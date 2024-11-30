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

    // Get email config
    const config = useRuntimeConfig()
    const { emailHost, emailPort, emailUser, emailPassword } = config

    console.log('Email configuration:', {
      host: emailHost,
      port: emailPort,
      user: emailUser,
      hasPassword: !!emailPassword
    })

    if (!emailPassword) {
      console.error('Email password missing in config')
      return {
        success: false,
        error: 'Email yapılandırması eksik.'
      }
    }

    console.log('Creating transport...')
    const transporter = createTransport({
      host: emailHost,
      port: emailPort,
      secure: false, // TLS için false
      auth: {
        user: emailUser,
        pass: emailPassword
      },
      tls: {
        rejectUnauthorized: false // Self-signed sertifikaları kabul et
      }
    })

    const mailOptions = {
      from: {
        name: 'YapHan İnşaat İletişim Formu',
        address: emailUser
      },
      to: emailUser,
      replyTo: body.email,
      subject: 'Yeni İletişim Formu Mesajı',
      text: `
        İsim: ${body.name}
        E-posta: ${body.email}
        Telefon: ${body.phone}
        Mesaj: ${body.message}
      `,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${body.name}</p>
        <p><strong>E-posta:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>Mesaj:</strong><br>${body.message.replace(/\n/g, '<br>')}</p>
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