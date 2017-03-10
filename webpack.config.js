'use strict';

var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 9999,
    contentBase: __dirname + '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      // {
      //   test: /\.css$/,
      //   loaders: ['css-loader?importLoaders=1', 'style-loader', 'postcss-loader']
      // }
    ]
  },

  // postcss: function() {
  //   return [
  //     autoprefixer({
  //       browsers: [
  //         '>1%',
  //         'last 4 versions',
  //         'Firefox ESR',
  //         'not ie < 9', // React doesn't support IE8 anyway
  //       ]
  //     }),
  //   ];
  // }
}
