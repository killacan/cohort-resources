const path = require('path');

module.exports = {
  entry: "./frontend/tea_shop.js",
  output: {
    path: path.resolve(__dirname),
    filename: "./bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"], //'@babel/react'
        },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};