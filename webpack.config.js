const path = require("path");

module.exports = {
  mode: "production",
  // mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "."),
    globalObject: "this",
    library: "ieh2calc",
    libraryTarget: "umd",
    // library: {
    //   name: "ieh2calc",
    //   type: "umd",
    // },
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/common.js"),
        loader: "expose-loader",
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: "currentTab currentTab, restart restart",
        },
      },
      {
        test: require.resolve("./src/expedition.js"),
        loader: "expose-loader",
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: "expeditionSave expeditionSave",
        },
      },
      {
        test: require.resolve("./src/anvil.js"),
        loader: "expose-loader",
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: "anvilSave anvilSave",
        },
      },
      {
        test: require.resolve("./src/slimebank.js"),
        loader: "expose-loader",
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes:
            "slimeBankResearchStone slimeBankResearchStone, slimeBankResearchLeaf slimeBankResearchLeaf, slimeBankSlimeCoinCap1 slimeBankSlimeCoinCap1,slimeBankSlimeCoinCap2 slimeBankSlimeCoinCap2",
        },
      },
      //     // {
      //     //   test: require.resolve("./src/index.js"),
      //     //   use: "imports-loader?wrapper=window",
      //     // },
      //     {
      //       test: require.resolve("./src/globals.js"),
      //       use: "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse",
      //     },
    ],
  },
};
