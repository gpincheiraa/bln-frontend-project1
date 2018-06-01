const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { author, config , version } = require('./package.json');
const { address } = require('./btc-config.json');

const filesLocal = 'file-loader?name=[name].[ext]';

module.exports = {
    mode: 'development',
    entry: [
      './src/index.scss',
      'whatwg-fetch',
      './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/, loader: filesLocal
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "resolve-url-loader", // load files on sass files like eot font files
                    "sass-loader", // compiles Sass to CSS
                    "postcss-loader" // add vendor prefixes (see postcss.config.js file)
                ],
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 
            BITCOIN_CONFIG: JSON.stringify({ address: process.env.BITCOIN_ADDRESS || address })
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            author: author.name,
            title: config.title,
            version: `v${version}`,
            inject: false
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        filename: 'index.bundle.js',
        contentBase: './',
        port: 3000,
        publicPath: '/',
        stats: {
            colors: true
        }
    }
};