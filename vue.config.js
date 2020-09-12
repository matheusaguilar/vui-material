const buildPage = "buildpage";
const buildLib = "buildlib";
const buildMode = process.argv.some(val => val === "buildpage")
  ? buildPage
  : buildLib;

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
    if (buildMode === buildLib) {
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
    }
  },
  parallel: false,
  productionSourceMap: false,
  lintOnSave: false
};
