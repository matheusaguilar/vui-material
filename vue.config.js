module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@use "./src/scss/common.scss";`,
        webpackImporter: false,
        sassOptions: {
          includePaths: ["./node_modules"]
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap(opts => {
        console.log("Adding Types config...");
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
  },
  parallel: false,
  productionSourceMap: false,
  lintOnSave: false
};
