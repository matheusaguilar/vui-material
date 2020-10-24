const buildPage = "buildpage";
const buildLib = "buildlib";
const buildMode = process.argv.some(val => val === "buildpage")
  ? buildPage
  : buildLib;

module.exports = {
  devServer: {
    port: 3000
  },
  publicPath: buildMode === buildPage ? "/vui-material/" : "/",
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
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.module.rules.forEach(rule => {
        if (rule.use) {
          const idx = rule.use.findIndex(w => w.loader === "thread-loader");
          if (idx !== -1) rule.use.splice(idx, 1);
        }
      });
    }
  },
  chainWebpack: config => {
    if (buildMode === buildLib && process.env.NODE_ENV === "production") {
      config.module.rule("ts").uses.delete("cache-loader");
      config.module
        .rule("ts")
        .use("ts-loader")
        .loader("ts-loader")
        .tap(opts => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });

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
