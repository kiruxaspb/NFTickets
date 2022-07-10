const path = require('path');

module.exports = {
  entry: './src/js/qr-scan.js',
  output: {
    filename: 'aboba.js',
    path: path.resolve(__dirname, 'dist'),
  },
};