
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.6.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700%7cOpen+Sans:100,200,300,400,700' }
    ]
  },
  env: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessageingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ress',
    'github-markdown-css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/burgerButton.js', ssr: false },
    { src: '~/plugins/contentful.js' },
    { src: '~/plugins/dateFormat.js' },
    { src: '~/plugins/firebaseFunctions.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    '@nuxtjs/markdownit',
    ['vue-scrollto/nuxt', { duration: 500 }]
  ],
  styleResources: {
    sass: [
      '@/assets/sass/constants.sass',
      '@/assets/sass/plugins.sass'
    ]
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
  },
  toast: {
    position: 'bottom-center',
    action: {
      text: '閉じる',
      onClick (_e, toastObject) {
        toastObject.goAway(0)
      }
    }
  },
  markdownit: {
    injected: true
  }
}
