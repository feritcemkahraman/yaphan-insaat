import { createTransport } from 'nodemailer'
import { defineEventHandler, readBody, setResponseHeaders } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // CORS başlıkları
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })

  if (event.method === 'OPTIONS') {
    return { success: true }
  }

  try {
    const config = useRuntimeConfig()
    console.log('Environment check:', {
      hasEmailPassword: !!config.emailPassword,
      emailPasswordLength: config.emailPassword?.length || 0
    })
    const body = await readBody(event)
    
    // Form alanlarını kontrol et
    if (!body.name || !body.email || !body.phone || !body.message) {
      console.error('Form validation failed:', body)
      throw new Error('Lütfen tüm alanları doldurun.')
    }

    // Email şifresini kontrol et
    const emailPassword = config.emailPassword
    if (!emailPassword) {
      console.error('EMAIL_PASSWORD environment variable is missing')
      throw new Error('Email yapılandırması eksik. Lütfen site yöneticisi ile iletişime geçin.')
    }

    console.log('SMTP Bağlantısı kuruluyor...')
    
    // SMTP ayarları
    const transporter = createTransport({
      host: 'limos.alastyr.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@yaphan.com.tr',
        pass: emailPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    console.log('SMTP Bağlantısı test ediliyor...')
    
    // Bağlantıyı test et
    await transporter.verify()
    
    console.log('SMTP Bağlantısı başarılı, mail gönderiliyor...')

    // E-posta gönderimi
    await transporter.sendMail({
      from: 'info@yaphan.com.tr',
      to: 'info@yaphan.com.tr',
      subject: 'Yeni İletişim Formu Mesajı - YapHan İnşaat',
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>İsim:</strong> ${body.name}</p>
        <p><strong>E-posta:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>Mesaj:</strong> ${body.message}</p>
      `,
      replyTo: body.email
    })

    console.log('Mail başarıyla gönderildi')
    return { success: true }
  } catch (error) {
    console.error('E-posta gönderimi hatası:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Beklenmeyen bir hata oluştu'
    }
  }
})