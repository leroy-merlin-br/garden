module.exports = {
  devtool: 'inline-source-map',
  output: {
    filename: 'garden.min.js'
  },
  externals: {
    'jquery': '$'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
