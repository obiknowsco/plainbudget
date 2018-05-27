
module.exports = {
  srcDir: 'src',
  head: {
    title: 'Plainbudget',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sales CMS.' }
    ]
  },
  generate: {
    dir: 'docs',
    routes: [
      '/'
    ]
  },
  router: {
    base: '/plainbudget/'
  },
  build: {
    // loaders: [
    //   {
    //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //     loader: 'url-loader',
    //     query: {
    //       limit: 1000, // 1 KO
    //       name: 'fonts/[name].[hash:7].[ext]'
    //     }
    //   },
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     loader: 'url-loader',
    //     query: {
    //       limit: 1000, // 1KO
    //       name: 'img/[name].[hash:7].[ext]'
    //     }
    //   }
    // ],
    extend (config, { isDev }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/'
      } else {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  }
}
