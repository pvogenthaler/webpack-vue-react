const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const PUBLIC_DIR = path.resolve(__dirname, "./public");
const APP_DIR = path.resolve(__dirname, "./app");

const config = {
  entry: APP_DIR + "/entry.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ["*", ".js", ".jsx", "ts", ".vue", ".scss"]
  },
  output: {
    path: PUBLIC_DIR,
    publicPath: "/",
    filename: "bundle.js"
  }
};

module.exports = config;
