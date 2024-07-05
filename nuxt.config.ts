// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ["~/plugins/preline.client.ts"],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  compatibilityDate: "2024-07-05"
})