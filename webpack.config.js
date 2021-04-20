const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { test: "./src/test.js", index: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: resolve(__dirname, "build"),
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./public/index.html",
    }),
  ],
  mode: "development",
};
