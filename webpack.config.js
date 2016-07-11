 const webpack = require('webpack');
 const path = require('path');
 const nodeModules = path.resolve(__dirname, '../node_modules');
 const pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {
  entry: [
  // 'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  __dirname + '/App/app.js',
  ],
  module: {
    noParse: [pathToAngular],
    loaders: [
    {
      test: /(\.js)$/,
      loader: "babel",
      exclude: /(node_modules|bower_components)/
      // query: {
      //   plugins: ['transform-runtime'],
      //   presets: ['es2015'],
      // }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.html$/,
      loader: "html"
    }
    ]
  },
  "babel": {
    "presets": ["es2015"]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
       path: __dirname + '/build',
       publicPath: '/',
       filename: 'bundle.js'
     },
  devServer: {
    contentBase: './build',
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("grow.css",  {
       allChunks: true
      })
    ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
 };
