import { createTransport } from 'nodemailer'
import { defineEventHandler, readBody, setResponseHeaders, getMethod, createError, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // CORS başlıkları
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400'
  })

  // OPTIONS request'i için erken dönüş
  const method = getMethod(event)
  if (method === 'OPTIONS') {
    return send(event, { status: 'ok' })
  }

  // Sadece POST isteklerine izin ver
  if (method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    
    // Form alanlarını kontrol et
    if (!body.name || !body.email || !body.phone || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Lütfen tüm alanları doldurun.'
      })
    }

    // Email şifresini kontrol et
    if (!config.emailPassword) {
      console.error('Email configuration missing')
      throw createError({
        statusCode: 500,
        statusMessage: 'Email yapılandırması eksik.'
      })
    }

    // SMTP ayarları
    const transporter = createTransport({
      host: 'limos.alastyr.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@yaphan.com.tr',
        pass: config.emailPassword
      },
      tls: {
        rejectUnauthorized: false
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

    return { success: true, message: 'Mail başarıyla gönderildi' }
  } catch (error: unknown) {
    console.error('E-posta gönderimi hatası:', error)
    
    // H3 error objesi kontrolü
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    // Diğer hatalar için
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : 'Beklenmeyen bir hata oluştu'
    })
  }
})