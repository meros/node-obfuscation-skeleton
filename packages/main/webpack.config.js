const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: path.join(__dirname, '/src/main.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'main.js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-flow-strip-types'],
          presets: [
            [
              'env',
              {
                targets: { node: '4' },
              },
            ],
          ],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  plugins: [
    new JavaScriptObfuscator(
      {
        mangle: true,
        selfDefending: true,
      },
      []
    ),
  ],
  externals: [nodeExternals()],
};
