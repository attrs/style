const path = require('path');
const merge = require('webpack-merge');
const HtmPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./webpack.base.config.js');
const glob = require('glob');

const production = process.env.NODE_ENV === 'production';
const assets = path.resolve(__dirname, '../assets');
const src = path.resolve(__dirname, '../src/docs');
const dist = path.resolve(__dirname, '../docs');

module.exports = merge(base, {
  entry: {
    docs: path.resolve(src, 'index.js')
  },
  devtool: production ? false : 'source-map',
  output: production
    ? {
        path: path.join(dist, 'js'),
        publicPath: '/js/',
        filename: '[name].js',
        chunkFilename: '[name].js'
      }
    : {
        path: dist,
        publicPath: '/',
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
        minimize: true,
        minimizer: [
          new TerserJSPlugin({ extractComments: false }),
          new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }]
            }
          })
        ]
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
      patterns: [
        { from: path.join(assets, 'favicon.png'), to: dist },
        { from: path.join(assets, 'CNAME'), to: dist }
      ]
    }),
    production &&
      new PurgecssPlugin({
        paths: glob.sync(src + '/**/*', { nodir: true }),
        whitelistPatterns: [/^x-/]
      })
  ].filter((v) => v)
});
