export default defineNuxtConfig({
  telemetry: false,
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  modules: [
    '@sidebase/nuxt-auth'
  ],
  typescript: {
    shim: false
  }
})
