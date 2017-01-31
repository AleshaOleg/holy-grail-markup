module.exports = {
  entry: "./index.js",
  output: { path: "./build", publicPath: "build/", filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.jpg$/,
        use: [ { loader: "url-loader", options: { limit: 5000 } } ]
      }
    ]
  }
};
