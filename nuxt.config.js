const pageLimit = 10

const fetchBlogRes = async () => {
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  })
  const blogRes = await client.getEntries({
    content_type: 'blog',
    order: '-fields.publishedAt'
  })
  return blogRes
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#1f2233' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700%7cOpen+Sans:100,200,300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho' }
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
    pageLimit
  },
  /*
  ** Customize the progress-bar color
  */
 loading: '@/components/modules/Loading.vue',
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
    '@nuxtjs/sitemap',
    ['vue-scrollto/nuxt', { duration: 500 }],
    '@/modules/paging.js'
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
    extend(config, ctx) {
    },
    hardSource: true
  },
  generate: {
    async routes() {
      const blogRes = await fetchBlogRes()
      const totalPages = Math.ceil(blogRes.total / pageLimit);
      const pageRange = [...Array(totalPages).keys()]
      let urls = pageRange.map(pageNum => ({
        route: `/blogs/page/${pageNum + 1}`
      }))
      urls = urls.concat(blogRes.items.map(item => ({
        route: `/blogs/${item.fields.slug}`,
        payload: item
      })))
      return urls
    }
  },
  toast: {
    position: 'bottom-center',
    action: {
      text: '閉じる',
      onClick(_e, toastObject) {
        toastObject.goAway(0)
      }
    }
  },
  markdownit: {
    injected: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://toyokawa-yuta.com',
    gzip: true
  }
}