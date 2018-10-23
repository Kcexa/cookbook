const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "index": "./src/index.js",
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "/public", "/scripts"),
        publicPath: "/public/scripts",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {   // используется для загрузки JSX/JavaScript файлов
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {   // css-loader для загрузки и объединения всех CSS файлов в один
                // style-loader добавит все стили внутрь тега документа style
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
