// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  env: {
    GOOGLE_APPLICATION_CREDENTIALS: '/path/to/google/credentials.json',
  },

    css: ['~/assets/css/main.css'],

    postcss: {

        plugins: {

          tailwindcss: {},

          autoprefixer: {},

        },

      },
    

})
