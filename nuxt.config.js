module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Personal Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Job Njoroge personal portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/shards-ui@2.1.0/dist/css/shards.min.css' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@4.3.0/dist/css/ionicons.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: true,
  /*
  ** Build configuration
  */

  router: {
    middleware: 'pages'
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

