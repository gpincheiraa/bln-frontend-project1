const HtmlWebpackPlugin = require('html-webpack-plugin');
const { version } = require('./package.json');

module.exports = {
    entry: [
      'whatwg-fetch',
      './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
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