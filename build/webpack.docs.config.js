const path = require('path');
const merge = require('webpack-merge');
const HtmPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const base = require('./webpack.base.config.js');

const production = process.env.NODE_ENV === 'production';
const assets = path.resolve(__dirname, '../assets');
const dist = path.resolve(__dirname, '../docs');

module.exports = merge(base, {
  entry: {
    docs: path.resolve(__dirname, '../src/docs/index.js')
  },
  devtool: production ? false : 'source-map',
  output: production ? {
    path: path.join(dist, 'js'),
    publicPath: '/js/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  } : {
    path: dist,
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: dist,
    historyApiFallback: true
  },
  optimization: production
    ? {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        },
        minimize: true
      }
    : {},
  plugins: [
    new HtmPlugin({
      inject: 'head',
      filename: path.resolve(dist, 'index.html'),
      template: path.resolve(assets, 'index.html'),
      showErrors: true
    }),
    new CopyPlugin({
      patterns: [{ from: path.join(assets, 'favicon.png'), to: dist }]
    })
  ]
});
