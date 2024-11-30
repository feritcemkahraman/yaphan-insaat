import { createTransport } from 'nodemailer'
import { defineEventHandler, readBody, getMethod, createError, setResponseHeaders } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // CORS headers for preflight
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'true'
  })

  // Handle OPTIONS request
  if (getMethod(event) === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
  }

  // Only allow POST method
  if (getMethod(event) !== 'POST') {
    console.error(`Method ${getMethod(event)} not allowed`)
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
    })
  }

  try {
    const config = useRuntimeConfig()
    console.log('Reading request body...')
    const body = await readBody(event)
    console.log('Request body:', body)
    
    // Check form fields
    if (!body?.name || !body?.email || !body?.phone || !body?.message) {
      console.error('Missing required fields:', body)
      return new Response(JSON.stringify({
        success: false,
        error: 'Lütfen tüm alanları doldurun.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
    }

    // Check email password
    if (!config.emailPassword) {
      console.error('Email password missing in config')
      return new Response(JSON.stringify({
        success: false,
        error: 'Email yapılandırması eksik.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
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

    return new Response(JSON.stringify({
      success: true,
      message: 'Mesajınız başarıyla gönderildi.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    console.error('Error in contact form:', error)
    return new Response(JSON.stringify({
      success: false,
      error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
})