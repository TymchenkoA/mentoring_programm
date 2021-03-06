const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BUILD_DIR = path.resolve(__dirname, './server/public');
const APP_DIR = path.resolve(__dirname, './client/src/scripts');

const webpackConfig = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    //watch: NODE_ENV === 'development',

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

    module: {
        preloaders: [
            {
                loader: ['eslint-loader'],
                test: /\.js$/,
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?indentedSyntax!postcss-loader!sass-loader'),
                test: /\.sass$/
            },
            {
                loaders: ['url', 'img'],
                test: /\.(png|jpg|svg)$/
            },
            {
                loader: 'ejs-loader',
                test: /\.ejs$/
            },
            {
                loader: 'raw',
                test: /\.html$/
            }
        ]
    },
    postcss: function () {
        return {
            plugins: autoprefixer({ browsers: ['last 2 versions'] })
        };
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/src/index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = webpackConfig;