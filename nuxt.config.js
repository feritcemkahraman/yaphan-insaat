// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  site: {
    url: "https://yaphan.com.tr",
  },
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/hakkimizda", "/bize-ulasin", "/200.html", "/404.html"],
    },
    routeRules: {
      '/': { redirect: { to: 'https://yaphan.com.tr/', statusCode: 301 } },
      '/projeler/tamamlanan': { redirect: { to: 'https://yaphan.com.tr/projeler/tamamlanan', statusCode: 301 } }
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],
  image: {
    quality: 80,
    format: ["webp", "jpeg", "jpg", "png"],
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
      title: "YapHan İnşaat | Geleceği Güvenle İnşa Ediyoruz",
      htmlAttrs: {
        lang: "tr",
      },
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "YapHan İnşaat",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: "YapHan İnşaat",
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: "YapHan İnşaat",
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        {
          hid: "description",
          name: "description",
          content:
            "YapHan İnşaat, Han Holding iştiraki olan, kaliteli ve güvenilir inşaat hizmetleri sunan bir şirkettir. Konut projeleri, lüks villa projeleri,ticari yapılar ve renovasyon işleri için bize ulaşabilirsiniz.",
        },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  css: ["flowbite/dist/flowbite.css"],
  sitemap: {
    hostname: "https://yaphan.com.tr",
    gzip: true,
    exclude: ["/404"],
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    siteUrl: "https://yaphan.com.tr",
    trailingSlash: false,
    routes: [
      {
        url: "/",
        changefreq: "daily",
        priority: 1.0,
      },
      {
        url: "/hakkimizda",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/bize-ulasin",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/projeler/devameden",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        url: "/projeler/tamamlanan",
        changefreq: "weekly",
        priority: 0.8,
      },
    ],
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://yaphan.com.tr",
      siteName: "YapHan İnşaat",
    },
  },
});
