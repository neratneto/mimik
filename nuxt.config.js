import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    [ 'nuxt-fire',
      {
        config: {
          development: {
            apiKey: 'AIzaSyA0lVPlqg7reHEO2Ca6x_BkvqqpP3y8cJM',
            authDomain: 'mimik-mimica.firebaseapp.com',
            databaseURL: 'https://mimik-mimica.firebaseio.com',
            projectId: 'mimik-mimica',
            storageBucket: '',
            messagingSenderId: '44475431398',
            appId: '1:44475431398:web:1b5127dc349315cf'
          },
          production: {
            apiKey: 'AIzaSyA0lVPlqg7reHEO2Ca6x_BkvqqpP3y8cJM',
            authDomain: 'mimik-mimica.firebaseapp.com',
            databaseURL: 'https://mimik-mimica.firebaseio.com',
            projectId: 'mimik-mimica',
            storageBucket: '',
            messagingSenderId: '44475431398',
            appId: '1:44475431398:web:1b5127dc349315cf'
          }
        },
        useOnly: ['firestore']
      }]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#40c057'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
