// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  alias: {
    "@constants": "./constants",
    "@assets": "./assets",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/leaflet",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Urbanist: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },
});
