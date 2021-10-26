module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_base.scss";`
      },
      scss: {
        prependData: `@import "~@/assets/scss/_base.scss";`
      }
    }
  }
}
