'use strict';  

var webpack = require('webpack'),  
    path = require('path');

var APP = path.resolve(__dirname, 'app');
var DIST = path.resolve(__dirname, 'dist');

module.exports = {  
    context: APP,
    entry: {  
    	app: ['webpack/hot/dev-server', './core/bootstrap.js'],
        vendors: ['./core/vendor.js']
  	},
  	output: {
        path: DIST,
        filename: 'bundle.js'
    },
	plugins: [  
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    	new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  	],
    devtool: "cheap-module-source-map",
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            // bootstrap files loader
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015!jshint',
                exclude: /node_modules|bower_components/
            }
        ]
    }
    
}