const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // TODO: optimize: split vendor to avoid big size
    checkout: './public/checkout/index.js', // each page a script
    dashboard: './public/dashboard/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin() // Clean the dist folder
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader' // Use babel to support react. see .babelrc
    }]
  }
};