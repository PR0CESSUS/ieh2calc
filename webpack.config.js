const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    settings: "./src/settings.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
      chunks: ["main"],
      template: "./src/template.html",
      hash: true,
    }),

    new NodePolyfillPlugin({
      includeAliases: ["Buffer", "stream", "crypto"],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./js"),
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
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
      // {
      //   test: require.resolve("./src/common.js"),
      //   loader: "expose-loader",
      //   options: {
      //     exposes: "changeTab changeTab",
      //   },
      // },
    ],
  },
};
