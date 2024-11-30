// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    payloadExtraction: false,
  },
  devtools: { enabled: true },
  alias: {
    "@": "/<rootDir>",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "tr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "robots", content: "index, follow" },
        {
          name: "description",
          content:
            "YapHan İnşaat, İstanbul'da 10 yılı aşkın tecrübesiyle konut projeleri, ticari yapılar ve renovasyon işleri yapan güvenilirliği bilinen bir inşaat firmasıdır.",
        },
        {
          name: "keywords",
          content:
            "yaphan inşaat, istanbul inşaat firması, güvenilir müteahhit, lüks konut projeleri, ticari yapılar, bina renovasyonu, istanbul, beykoz, inşaat, villa inşaatı, kat karşılığı, arsa satışı, arsa alımı, kat karşılığı inşaat",
        },
        { property: "og:site_name", content: "YapHan İnşaat" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "tr_TR" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "canonical", href: "https://yaphan.com.tr" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
      script: [],
    },
  },
  build: {},
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  css: ["flowbite/dist/flowbite.css"],
  nitro: {
    preset: 'cloudflare-pages',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/200.html", "/404.html"],
    },
    routeRules: {
      '/api/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Max-Age': '86400'
        }
      }
    }
  },
  runtimeConfig: {
    emailPassword: process.env.NUXT_EMAIL_PASSWORD || '',
    public: {
      // public runtime config
    }
  }
});
