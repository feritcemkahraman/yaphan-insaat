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
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  app: {
    head: {
      script: [
        {
          src: "/js/flowbite.min.js",
        },
      ],
    },
  },
  css: ["flowbite/dist/flowbite.css"],
});
