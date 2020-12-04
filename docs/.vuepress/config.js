const path = require('path');
const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, 'src');
const isProd = process.argv.some(val => val === "buildpage");

module.exports = {
    port: 3000,
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: isProd ? "/vui-material/" : "/",
    scss: {
        prependData: `@use "../../src/scss/common.scss";`,
        webpackImporter: false,
        sassOptions: {
            includePaths: [path.resolve(projectRoot, 'node_modules')],
        }
    },
    configureWebpack(config) {
        config.devtool = false;
        config.resolve.alias['@'] = alias;
    },
    plugins: [
        ['vuepress-plugin-typescript', {
            tsLoaderOptions: {
                transpileOnly: true,
                compilerOptions: {
                    'target': 'ES2019',
                },
            },
        }],
    ],
}