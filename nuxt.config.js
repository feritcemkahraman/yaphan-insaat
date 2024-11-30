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
  image: {
    quality: 80,
    format: ['webp', 'jpeg', 'jpg', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  app: {
    head: {
      title: "YapHan İnşaat",
      htmlAttrs: {
        lang: "tr",
      },
      meta: [
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'YapHan İnşaat' },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'YapHan İnşaat' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'YapHan İnşaat' },
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
    preset: "cloudflare-pages",
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/200.html", "/404.html"],
    },
    routeRules: {
      // API yapılandırmasını kaldırıyoruz
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://yaphan.com.tr",
    },
  },
});
