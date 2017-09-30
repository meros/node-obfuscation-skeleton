const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './lib/main.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js',
  },
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
