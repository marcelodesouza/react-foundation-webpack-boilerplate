var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true,
                      includePaths: [
                          path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
                      ]
                  }
              }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
