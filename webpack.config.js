const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "./src/app.jsx")
    },
    output: {
        path: path.join(__dirname, "./dist")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: "babel-loader"
            },
            {
                test: /\.s[ca]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
        new ExtractTextPlugin("styles.css")
    ]
}