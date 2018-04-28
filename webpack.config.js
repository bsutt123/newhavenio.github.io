const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, "js/"),
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use:[
          "vue-style-loader",
          "css-loader",
        ],
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new VueLoaderPlugin()
  ]
}