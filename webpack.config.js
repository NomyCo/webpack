const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './src',
		hot: true
	},
	entry: {
		meta: './src/meta.js',
		app: './src/main.js'
	},
	plugins: [
		new CleanWebpackPlugin(['public']),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: './src/template/template.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		path: __dirname + '/public',
		publicPath: '',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: [ /(node_modules|bower_components)/, /public/ ],
				use: {
					loader: 'babel-loader',
					options: {
						"presets": ["@babel/preset-env"]
					}
				},
			}
		]
	}
}