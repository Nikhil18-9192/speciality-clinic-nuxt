export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'speciality clinic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Be true to your teeth and they wont be false to you!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylsheet',
        href:
          'https://api.fontshare.com/css?f[]=satoshi@300,400,500,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-animejs'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['~assets/global.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true;
      }
    }
  }
}
