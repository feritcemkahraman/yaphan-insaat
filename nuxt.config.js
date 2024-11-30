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
      title: "YapHan İnşaat | Çorum'un Güvenilir İnşaat Firması",
      htmlAttrs: {
        lang: "tr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "YapHan İnşaat, Çorum'da kaliteli ve güvenilir inşaat hizmetleri sunan bir firmadır. Konut projeleri, ticari yapılar ve renovasyon işleri için bize ulaşın.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
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
      // API yapılandırmasını kaldırıyoruz
    }
  },
  runtimeConfig: {
    emailHost: process.env.NUXT_EMAIL_HOST || 'smtp.gmail.com',
    emailPort: process.env.NUXT_EMAIL_PORT || '587',
    emailUser: process.env.NUXT_EMAIL_USER,
    emailPassword: process.env.NUXT_EMAIL_PASSWORD,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://yaphan.com.tr'
    }
  }
});
