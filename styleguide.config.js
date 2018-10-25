module.exports = {
    webpackConfig: require('./webpack.config.js'),
    getExampleFilename(componentPath) {
        return componentPath.replace(/\.tsx?$/, '.examples.md');
    },
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json',
    ).parse,
    styleguideDir: 'docs/ReactComponents',
};
