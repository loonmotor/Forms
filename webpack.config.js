const
	LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: [
		'./browser.js'
	],
	output: {
		path: './public/js',
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}]
	},
	plugins : [
		new LiveReloadPlugin()
	]
};