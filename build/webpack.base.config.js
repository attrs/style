const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('../package.json');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|webp|woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    mainFields: ['browser', 'main']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VERSION': JSON.stringify(pkg.version)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
