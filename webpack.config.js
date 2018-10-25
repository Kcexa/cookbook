const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/public', '/scripts'),
        publicPath: '/public/scripts',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                // используется для загрузки JSX/JavaScript файлов
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                // css-loader для загрузки и объединения всех CSS файлов в один
                // style-loader добавит все стили внутрь тега документа style
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['awesome-typescript-loader'],
            },
            {
                // All output '.js' files will have any source-maps re-processed by 'source-map-loader'.
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};
