const path = require('path');

module.exports = {
  entry: {
    main: ["babel-polyfill","./src/index.js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    // overlay: true,
    // hot: true,
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
    ]
  }
};