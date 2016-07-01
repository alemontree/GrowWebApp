 const webpack = require('webpack');
 const path = require('path');
 const nodeModules = path.resolve(__dirname, '../node_modules');
 const pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

 module.exports = {
  entry: __dirname + '/App/app.js',
  module: {
    noParse: [pathToAngular]
  //   loaders: [{
  //     test: /\.jsx?$/,
  //     exclude: /node_modules/
  //   }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
       path: __dirname + '/build',
       publicPath: '/',
       filename: 'bundle.js'
     }
 };
