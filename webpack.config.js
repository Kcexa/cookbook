const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/public'),
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
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        port: process.env.PORT || 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};
