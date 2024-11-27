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
    "~": "/<rootDir>",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  sitemap: {
    hostname: "https://yaphan.com.tr",
    gzip: true,
    exclude: ["/admin/**", "/private/**"],
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
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
    baseURL:
      process.env.NODE_ENV === "production" ? "https://yaphan.com.tr" : "",
    buildAssetsDir: "/_nuxt/",
  },
  build: {
    transpile: ["gsap"],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  robots: {
    UserAgent: "*",
    Allow: "/",
    Disallow: ["/admin", "/*.json", "/*.xml"],
    Sitemap: "https://yaphan.com.tr/sitemap.xml",
  },
  css: ["flowbite/dist/flowbite.css"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/hakkimizda",
        "/bize-ulasin",
        "/projeler/tamamlanan",
        "/projeler/devameden",
      ],
    },
  },
  routeRules: {
    "/": {
      ssr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24, // 24 saat cache
      },
    },
    "/hakkimizda": {
      ssr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24 * 7, // 1 hafta cache
      },
    },
    "/bize-ulasin": {
      ssr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24 * 7, // 1 hafta cache
      },
    },
    "/projeler/**": {
      ssr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60, // 1 saat cache (projeler daha sık güncellenebilir)
      },
    },
  },
});
