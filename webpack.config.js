const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
  mode: 'development',
  entry: {
    './p2-0/src/index.js': './p2-0/src/index.js',
    './p2-1/src/index.js': './p2-1/src/index.js',
    './p2-2/index.js': './p2-2/index.js',
  },
  output: {
    filename: './[name]',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './p2-0/index.html',
      filename: 'p2-0/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './p2-1/index.html',
      filename: 'p2-1/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './p2-2/index.html',
      filename: 'p2-2/index.html',
      inject: false
    }),
    new CopyPlugin([
      { from: './p2-0/src/styles', to: 'p2-0/src/styles' },
      { from: './p2-1/src/styles', to: 'p2-1/src/styles' },
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/p2-1/'),
    compress: true,
    port: 9000
  },
};

