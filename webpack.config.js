const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	entry: [
		path.join(__dirname, 'docs_src', 'main.js'),
	],

	mode: isProd ? 'production' : 'development',
	target: 'web',

	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
		extensions: ['.js', '.vue'],
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				loaders: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.scss$/,
				include: [/node_modules/, path.join(__dirname, 'docs_src')],
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png)$/,
				use: [
					'file-loader?name=images/[name].[ext]',
				],
			},
		],
	},

	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname, 'docs'),
		publicPath: '/vue-materialize-datatable',
	},

	plugins: [
		new VueLoaderPlugin(),

		new MiniCssExtractPlugin({
			filename: 'css/app.css',
		}),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: `'${process.env.NODE_ENV}'`,
			},
		}),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'docs_src', 'index-template.html'),
			minify: {
				collapseWhitespace: true,
				preserveLineBreaks: false,
			},
			filename: path.join(__dirname, 'docs', 'index.html'),
		}),

        new CopyWebpackPlugin([
            { from: './docs_src/assets/images', to: 'images/' },
            { from: './docs_src/.nojekyll' },
        ]),
	],

	...isProd ? {
		optimization: {
			minimizer: [
				new TerserWebpackPlugin({
					cache: true,
					parallel: true,
					sourceMap: false,
				}),

				new OptimizeCssAssetsPlugin(),
			],
		},
	} : {},
};