const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  entry: {
    main: "./src/index.js",
    settings: "./src/settings.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./test"),
  },
});
