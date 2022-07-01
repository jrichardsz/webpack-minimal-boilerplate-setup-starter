const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
    publicPath: "/"
  },
  module: {
    rules: [{
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlPlugin({
    title: 'Hello World app'
  })],
  resolve: {
    fallback: {
      "fs": false
    },
    alias: {
      ejs_components: __dirname + '/node_modules/ejs'
    }
  }
};
