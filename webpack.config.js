const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'src'),
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" //source html
    })
  ]
}