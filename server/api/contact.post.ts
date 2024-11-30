import { createTransport } from 'nodemailer'
import { defineEventHandler, readBody, setResponseHeaders } from 'h3'

export default defineEventHandler(async (event) => {
  // Add CORS headers
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })

  // Handle preflight requests
  if (event.method === 'OPTIONS') {
    return { success: true }
  }

  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      throw new Error('Tüm alanların doldurulması zorunludur.')
    }
    
    // Alastyr SMTP ayarları
    const transporter = createTransport({
      host: 'limos.alastyr.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@yaphan.com.tr',
        pass: process.env.EMAIL_PASSWORD
      }
    })

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

    return { success: true }
  } catch (error) {
    console.error('E-posta gönderimi başarısız:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'E-posta gönderilemedi'
    }
  }
})