var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'public/js/main.js'),
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version)
    })
  ],
  module: {
   loaders: [
     {
       test: /\.css$/,
       loader: 'style!css',
       include: path.resolve(__dirname, 'stylesheets')
     },
     {
       test: /\.html/, loader: 'html?minimize=false'
     }
  ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    // path: path.resolve(__dirname, ''),
    filename: 'clappr-website.js'
  }
}
