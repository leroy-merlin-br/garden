module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname,
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
