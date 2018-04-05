var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
//var helpers = require('./helpers');

module.exports = {
    entry: {
        //'polyfills': './Resources/polyfills.ts',
        'app': './Content/scripts/main.js',
        'main': './Content/Styles/main.scss'
    },
    resolve: {
        //extensions: ['.ts', '.js']
        extensions: ['.js']
    },

    module: {
        rules: [
            //{
            //    test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            //},
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //{
            //    test: /\.(eot|svg|ttf|woff|woff2)$/,
            //    loader: 'file-loader?name=./dist/[name].[ext]'
            //},
            //{
            //    test: /\.scss$/,
            //    exclude: [/node_modules/, /Content/],
            //    loader: ['raw-loader', 'sass-loader']
            //},

            { 
                test: /\.(sass|scss)$/,
                include: /Content/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(['css-loader?sourceMap&-minimize', 'sass-loader?sourceMap'])
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin(),

        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true
        })
    ]
};