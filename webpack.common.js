// import modules/packages
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// configurations and export
module.exports = {
    entry: {
        app: "./src/index.js"
    },    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
        clean: true,
        publicPath: "/"
    }
}