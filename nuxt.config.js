// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  experimental: {},
  unhead: {},
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  build: {
    transpile: ["gsap"],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  app: {
    head: {
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
    },
  },
  css: [
    "flowbite/dist/flowbite.css",
  ],
});
