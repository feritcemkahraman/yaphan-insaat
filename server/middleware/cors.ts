import { defineEventHandler, setResponseHeaders } from 'h3'

export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'true'
  })
})
