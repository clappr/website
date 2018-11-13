var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
   loaders: [
     { test: /\.js$/, loader: 'babel-loader' },
     { test: /\.(png|woff|eot|ttf|swf|cur)/, loader: 'url-loader' },
     { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") },
     { test: /\.html/, loader: 'html?minimize=false' }
   ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'clappr-website.min.js'
  }
}
