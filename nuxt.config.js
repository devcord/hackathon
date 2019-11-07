module.exports = {
    mode: 'universal',

    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'theme-color', content: '#f0134d' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap' },
        ]
    },

    loading: { color: '#f0134d' },

    css: [
        '@/assets/sass/global.sass'
    ],

    plugins: [
        '~/plugins/api.js',
        '~/plugins/markdown.js'
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
        extend (config) {
            config.module.rules.push(
                {
                    test: /\.md$/i,
                    use: 'raw-loader',
                },
            )
        }
    },
    
    server: {
        host: '0.0.0.0',
        port: 7777
    },
}
