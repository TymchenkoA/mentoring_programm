const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BUILD_DIR = path.resolve(__dirname, './client/build/');
const APP_DIR = path.resolve(__dirname, './client/src');

const webpackConfig = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

    watch: NODE_ENV === 'development',

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
				test: /\.js$/
			},
			{
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
				test: /\.sass$/
			},
            {
                loaders: ['url', 'img'],
                test: /\.(png|jpg|svg)$/
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
