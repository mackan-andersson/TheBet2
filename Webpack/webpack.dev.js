var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    //devtool: 'cheap-module-eval-source-map',
    output: {
        path: helpers.root('./Content'),
        filename: '[name]-bundle.js'
    },
    devServer: {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }
    }
});