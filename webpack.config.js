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
      }
    ]
  }
}
