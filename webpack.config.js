var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/main.js',
  output: {
    path: path.resolve('./dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js'
  },
  // allows jquery to be a globally accessed as $ 
  plugins: [
    new webpack.ProvidePlugin({
      '$' : 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: 'style-loader!css-loader'
      },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.woff2$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" }
    ]
  }
};

module.exports = config;
