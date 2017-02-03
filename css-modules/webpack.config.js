const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: { path: "./build", publicPath: "build/", filename: "bundle.js" },
  target: "node",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: { loader: "css-loader", options: { modules: true, localIdentName: '[local]__[hash:base64:5]' } }
        })
      },
      {
        test: /\.jpg$/,
        use: [ { loader: "url-loader", options: { limit: 5000 } } ]
      }
    ]
  },
  plugins: [ new ExtractTextPlugin("style.css") ]
};
