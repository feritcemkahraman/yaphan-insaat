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
    "flowbite/dist/flowbite.css", // Örneğin burada eklenen CSS dosyası
  ],

  // Server Middleware
  serverMiddleware: [
    {
      path: "/projeler", // Bu rota için middleware devrede
      handler: (req, res) => {
        // '/github-repo/index.html' sayfasına yönlendirme yapılıyor
        res.writeHead(302, { Location: "/projeler/index.html" });
        res.end();
      },
    },
  ],
});
