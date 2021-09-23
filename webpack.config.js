const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), './src/index.tsx'),
  output: {
    path: path.resolve(process.cwd(), './build'),
    filename: 'bundle.[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        include: path.resolve(process.cwd(), './src'),
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    static:  path.resolve(process.cwd(), './src'),
    port: 9000,
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" //source html
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), './src/assets'),
          to: './assets',
          globOptions: {
            ignore: [
              '**/icons/*.types.ts'
            ]
          }
        }
      ]
    })
  ]
}