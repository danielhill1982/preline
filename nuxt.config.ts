// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ["~/plugins/preline.client.ts"],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "@nuxt/icon"],
  compatibilityDate: "2024-07-05"
})