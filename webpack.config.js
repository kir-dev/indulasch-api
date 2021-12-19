const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");

module.exports = {
  name: "server",
  target: "node",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // { test: /\.json$/, use: "json-loader", exclude: /node_modules/ },
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
    ],
  },
  plugins: [
    new NodemonPlugin(), // Dong
  ],
};
