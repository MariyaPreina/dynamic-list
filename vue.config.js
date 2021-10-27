const path = require('path')
module.exports = {
  chainWebpack: config => {
    config
      .resolve.alias.set('@', path.join(__dirname, './src'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_base.scss";`
      },
      scss: {
        prependData: `@import "~@/assets/scss/_base.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/dynamic-list/' : '/'
}
