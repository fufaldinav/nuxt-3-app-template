// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    'nuxt-icons',
  ],

  css: ['~/assets/css/main.scss'],
});
