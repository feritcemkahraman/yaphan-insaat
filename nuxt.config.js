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
      title: "YapHan İnşaat - Geleceği Güvenle İnşa Ediyoruz.",
      htmlAttrs: {
        lang: "tr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "application-name",
          content: "YapHan İnşaat",
        },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          hid: "robots",
        },
        {
          hid: "description",
          name: "description",
          content:
            "YapHan İnşaat - Han Holding güvencesiyle prestijli konut projeleri, kaliteli yaşam alanları ve modern mimari.",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "YapHan İnşaat",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://yaphan.com.tr",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "YapHan İnşaat - Geleceği Güvenle İnşa Ediyoruz.",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "YapHan İnşaat - Han Holding güvencesiyle prestijli konut projeleri, kaliteli yaşam alanları ve modern mimari.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://yaphan.com.tr/banner.jpg",
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: "YapHan İnşaat",
        },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "canonical", href: "https://yaphan.com.tr" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
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
    siteUrl: "https://yaphan.com.tr",
    gzip: true,
    exclude: [
      "/404",
      "/projelerin-tamami/**",
      "/api/**",
      "/_nuxt/**",
      "/.nuxt/**",
      "/.git/**",
    ],
    trailingSlash: false,
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    urls: [
      "/",
      "/hakkimizda",
      "/projeler/tamamlanan",
      "/projeler/devameden",
      "/bize-ulasin",
    ],
    crawlLinks: true,
    routes: [
      {
        url: "/",
        changefreq: "daily",
        priority: 1.0,
      },
      {
        url: "/hakkimizda",
        changefreq: "weekly",
        priority: 0.9,
      },
      {
        url: "/projeler/tamamlanan",
        changefreq: "daily",
        priority: 0.8,
      },
      {
        url: "/projeler/devameden",
        changefreq: "daily",
        priority: 0.7,
      },
      {
        url: "/bize-ulasin",
        changefreq: "weekly",
        priority: 0.6,
      },
    ],
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://yaphan.com.tr",
      siteName: "YapHan İnşaat",
    },
  },

  compatibilityDate: "2024-12-07",
});
