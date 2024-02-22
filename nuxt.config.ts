// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  plugins: [
    { src: '~/plugins/html2pdf.js', mode: 'client' }
  ]
})
