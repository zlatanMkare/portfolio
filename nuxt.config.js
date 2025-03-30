export default defineNuxtConfig({
  // My Nuxt config
  app: {
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
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js' },
            { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js' }
        ]
    }
},

ssr: false
})