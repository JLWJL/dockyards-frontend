const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.jsx/, loader: 'babel-loader', exclude: /node_modules/
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: true
  },
};