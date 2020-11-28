const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    new CleanWebpackPlugin(), // Clean the dist folder
    new MiniCssExtractPlugin() // extract separatedly css files
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader' // Use babel to support react. see .babelrc
    }, {
      test: /\.css$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/',
        },
      }, 'css-loader'],
    }, {
      test: /\.(png|jpe?g|gif|woff2|woff|eot|ttf|svg)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};