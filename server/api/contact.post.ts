import { createTransport } from 'nodemailer'
import { defineEventHandler, readBody, getMethod, createError } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // CORS başlıkları
  // setResponseHeaders(event, {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   'Access-Control-Allow-Headers': '*',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Max-Age': '86400'
  // })

  // OPTIONS request'i için erken dönüş
  if (getMethod(event) === 'OPTIONS') {
    return new Response(null, {
      status: 204
    })
  }

  // Sadece POST isteklerine izin ver
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    
    // Form alanlarını kontrol et
    if (!body?.name || !body?.email || !body?.phone || !body?.message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Lütfen tüm alanları doldurun.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // Email şifresini kontrol et
    if (!config.emailPassword) {
      console.error('Email configuration missing')
      return new Response(JSON.stringify({
        success: false,
        error: 'Email yapılandırması eksik.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
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

    return new Response(JSON.stringify({
      success: true,
      message: 'Mail başarıyla gönderildi'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error: unknown) {
    console.error('E-posta gönderimi hatası:', error)
    
    // H3 error objesi kontrolü
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const h3Error = error as { statusCode: number; statusMessage: string }
      return new Response(JSON.stringify({
        success: false,
        error: h3Error.statusMessage
      }), {
        status: h3Error.statusCode,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    
    // Diğer hatalar için
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Beklenmeyen bir hata oluştu'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
})