const path = require("path");
const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, "src");
const isProd = process.argv.some((val) => val === "buildpage");

module.exports = {
  port: 3000,
  title: "Vui-Material",
  description: "UI Material Components",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
      },
    ],
  ],
  themeConfig: {
    searchMaxSuggestions: 10,
    repo: "matheusaguilar/vui-material",
    repoLabel: "Contribute!",
    docsRepo: "matheusaguilar/vui-material",
    docsDir: "docs",
    docsBranch: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebar: [
      {
        title: 'Form Control',
        path: '/formControl/',
        collapsable: false,
        children: [
          ['/formControl/autoComplete/', 'AutoComplete'],
          ['/formControl/checkbox/', 'Checkbox'],
          ['/formControl/radioButton/', 'RadioButton'],
          ['/formControl/select/', 'Select'],
          ['/formControl/switche/', 'Switche'],
          ['/formControl/textField/', 'TextField'],
          ['/formControl/textArea/', 'TextArea'],
          ['/formControl/textFieldMask/', 'TextFieldMask']
        ]
      },
      {
        title: 'Button Group',
        path: '/buttonGroup/',
        collapsable: false,
        children: [
          ['/buttonGroup/button/', 'Button'],
          ['/buttonGroup/fabButton/', 'FabButton'],
          ['/buttonGroup/iconButton/', 'IconButton'],
        ]
      },
      ["/card/", "Card"],
      ["/chip/", "Chip"],
      ["/datatable/", "DataTable"],
      ["/imageList/", "ImageList"],
      ["/layoutGrid/", "LayoutGrid"],
      ["/linearProgress/", "LinearProgress"],
      ["/listItem/", "ListItem"],
      ["/menu/", "Menu"],
      ["/modal/", "Modal"],
      ["/snackbar/", "Snackbar"]
    ],
  },
  base: isProd ? "/vui-material/" : "/",
  scss: {
    prependData: `@use "../../src/scss/common.scss";`,
    webpackImporter: false,
    sassOptions: {
      includePaths: [path.resolve(projectRoot, "node_modules")],
    },
  },
  configureWebpack(config) {
    config.devtool = false;
    config.resolve.alias["@"] = alias;
  },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          transpileOnly: true,
          compilerOptions: {
            target: "ES2019",
          },
        },
      },
    ],
  ],
};
