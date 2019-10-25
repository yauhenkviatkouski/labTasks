/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  entry: {
    './p2-0/index.js': './p2-0/src/index.js',
    // './p2-1/index.js': './p2-1/src/index.js',
    // './p2-2/index.js': './p2-2/index.js',
  },
  output: {
    filename: './[name]',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};

