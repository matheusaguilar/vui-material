module.exports = {
  devServer: {
    port: 3000
  },
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

    if (process.env.NODE_ENV === "production") {
      config.externals([
        "vue",
        "vue-class-component",
        "vue-property-decorator"
      ]);
    }
  },
  parallel: false,
  productionSourceMap: false,
  lintOnSave: false
};
