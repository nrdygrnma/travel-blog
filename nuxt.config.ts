// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "nuxt-directus",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
    "@morev/vue-transitions/nuxt",
  ],
  vueTransitions: {},
  css: ["assets/css/reset.css"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      directus: {
        autoFetch: true,
        url: "https://directus.belindab.net",
        token: "2Na4hyS6CNP-s2gDLynAOVVMRGF2gdzM",
        devtools: true,
      },
    },
  },
});
