// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'CV-mal',
      htmlAttrs: {
        lang: 'no' // Setter språket på nettsiden til norsk
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'cv-mal' },
      ],
      link: [
        // Hvis du har et favicon i public/mappen:
        { rel: 'icon', type: 'image/x-icon', href: '/icon-svg.svg' }
      ]
    }
  }


  
})