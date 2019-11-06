module.exports = {
    mode: 'universal',

    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap' }
        ]
    },

    loading: { color: '#fff' },

    css: [
        '@/assets/sass/global.sass'
    ],

    plugins: [
        '~/plugins/api.js'
    ],

    buildModules: [
        '@nuxtjs/eslint-module'
    ],

    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt'
    ],

    serverMiddleware: [
        '~/api/index.js'
    ],

    axios: {
    },

    build: {
        extend (config, ctx) {
        }
    },
    
    server: {
        port: 7777
    },
}
