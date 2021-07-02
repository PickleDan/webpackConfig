const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = "web"

if (process.env.NODE_ENV === 'production') {
  mode = "production"
  target = "browserslist"
}

module.exports = {
  mode,
  target,

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.jsx?$/,
        exclude: /nide_modules/,
        use: {
          "loader": "babel-loader"
        },
      },
    ]
  },

  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]"
  },
};