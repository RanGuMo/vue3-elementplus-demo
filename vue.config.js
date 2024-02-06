module.exports = {
  devServer: {
    open: true,
    host: "localhost",
    port: 8088,
    https: false,
    // 设置跨域
    proxy: {
      "/api": {
        target: "http://imissu.herokuapp.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^api": "",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        }
      }
    }
  }
};
