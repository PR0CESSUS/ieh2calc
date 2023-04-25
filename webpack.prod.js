const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./"),
  },
});
