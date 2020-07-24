const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

const production = process.env.NODE_ENV === 'production';

module.exports = merge.strategy({
  entry: 'replace',
  output: 'replace',
  optimization: 'replace'
})(base, {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  optimization: {}
});
