const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                use:{
                    loader: "svg-url-loader"
                }
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject:true,
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer:{ 
        static: {
            publicPath: path.join(__dirname, 'dist')
        },
        open:true,
        compress: true,
        port: 3000
    }
}