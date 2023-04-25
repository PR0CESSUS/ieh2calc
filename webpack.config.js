// const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    settings: "./src/settings.js",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/template.html",
  //   }),
  // ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./"),
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new NodePolyfillPlugin({
      includeAliases: ["Buffer", "stream", "crypto"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: require.resolve("./src/common.js"),
        loader: "expose-loader",
        options: {
          exposes: "changeTab changeTab",
        },
      },
    ],
  },
};
