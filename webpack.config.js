module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: './bin',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
