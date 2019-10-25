const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    './p2-0/src/index.js': './p2-0/src/index.js',
    // './p2-1/index.js': './p2-1/src/index.js',
    // './p2-2/index.js': './p2-2/index.js',
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

    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/p2-0'),
    compress: true,
    port: 9000
  },
};

