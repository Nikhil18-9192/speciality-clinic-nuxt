export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Speciality Dental Care & Implant Centre.',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The Speciality Dental Care & Implant Centre is the most advanced dental care & implant center in Kolhapur provides Dental Implants, Esthetic Treatments, Root Canal Treatment, Orthodentics, Gum Treatments.',
      },
      {
        hid: 'og:image',
        content: '/favicon.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['~assets/global.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true
      },
    },
  },
}
