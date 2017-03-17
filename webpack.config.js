'use strict';

const path = require('path');

module.exports = {
  // entry: {
  //   app: path.resolve(__dirname, "src"),
  //   vendor: [ "react", "react-dom", "react-router" ]
  // },
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  node: {
    fs: "empty"
  },

  watch: true,

  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.jsx?$/,
      //   exclude: [
      //     path.resolve(__dirname, "node_modules")
      //   ],
      //   loader: "eslint-loader",
      // },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [
          {
            loader: "jshint-loader",
            options: {
              camelcase: true,
              esversion: 6
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        // issuer: { test, include, exclude },
        // enforce: "pre",
        // enforce: "post",
        loader: "babel-loader",
        options: {
          presets: [ "react", "es2015" ]
        }
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader", "postcss-loader" ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader", "postcss-loader" ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: [path.join(__dirname, ""), path.join(__dirname, "public"), path.join(__dirname, "dist")],
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 9999,
  }
}
