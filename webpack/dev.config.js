'use strict'

const webpack = require('webpack')

const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const Dashboard = require('webpack-dashboard/plugin')

module.exports = {
  devtool: 'source-map',
  entry: common.entry,
  mode: 'development',

  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dashboard(),

    new HtmlPlugin(
      common.HtmlPluginConfig('template-dev.html')
    ),

    new MiniCssExtract({
      filename: '[name].css'
    })
  ],

  module: {

    rules: [
      common.standardLoader,
      common.jsLoader,
      common.cssLoader,
      common.urlLoader,
      common.rawLoader
    ]
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true
  },

  resolve: common.resolve
}
