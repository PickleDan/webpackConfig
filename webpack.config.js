const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = "production"
}

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },

      {
        test: /\.js$/,
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
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    new MiniCssExtractPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};