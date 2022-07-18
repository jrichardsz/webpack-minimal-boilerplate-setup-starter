const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
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
      },
      {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
             filename: 'images/[name][ext]'
          }
      }
    ]
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
  ],
  resolve: {
    fallback: {
      "fs": false
    },
    alias: {
      ejs_components: __dirname + '/node_modules/ejs'
    }
  }
};
