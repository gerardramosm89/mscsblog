const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MinifyPlugin = require('babel-minify-webpack-plugin');
const config = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // use: ['style-loader', 'css-loader'],
        // test: /\.css$/
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MinifyPlugin()
  ]
}

module.exports = config;