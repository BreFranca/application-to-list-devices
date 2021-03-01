const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const mode = process.env.ENV || 'development';

module.exports = {
  mode,
  entry: join(__dirname, '/index.js'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'index.bundled.js'
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: join(__dirname, 'node_modules/'),
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": {
                  "node": "10"
                }
              }
            ],
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      favicon: false,
      showErrors: true,
      cache: true,
      template: join(__dirname, 'index.html')
    })
  ]
}
