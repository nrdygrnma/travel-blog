// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    database: {
      type: "postgres",
      url: process.env.POSTGRES_URL!,
    },
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
});
