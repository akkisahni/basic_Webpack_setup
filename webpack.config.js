const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
	entry: __dirname + "/app/app.js", // webpack entry point. Module to start building dependency graph
  	output: {
    	path: __dirname + '/dist', // Folder to store generated bundle
    	filename: 'bundle.js',  // Name of generated bundle after build
    	publicPath: '/' // public URL of the output directory when referenced in a browser
  	},
	watch: true,
	module:{
		rules:[
			{
				test: /\.css$/,
				use:[
			        { loader: "style-loader" },
			        { loader: "css-loader" }
			      ]
			},
			{
				test: /\.js$/,
		      	exclude: /(node_modules|bower_components)/,
		      	use: { 
		        	loader: 'babel-loader',
		        	options: {
		          		presets: ['env']
		        	}
		      	} 
			}
		]
	},
	plugins: [  // Array of plugins to apply to build chunk
      	new HtmlWebpackPlugin({
          	template: __dirname + "/public/index.html",
          	inject: 'body'
      	})
  	],
  	devServer: {  // configuration for webpack-dev-server
      	contentBase: './public',  //source of static assets
      	port: 7700, // port to run dev-server
  	} 
};
