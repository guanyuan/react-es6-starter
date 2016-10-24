var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {

  //  Defines the entrypoint of our application.
  entry: {
    app: [path.resolve(__dirname, '../src/app.js')]
  },

  devServer: { inline: true },

  //  Bundle to a ./build/public/bundle.js file.
  output: {
    path: path.resolve(__dirname, '../build/public'),
    publicPath: "/",
    filename: 'bundle.js'
  },

  //  Use babel for anything that is *.js or *.jsx.
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../src'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }

      }
    ]
  },

  //  Configure the plugins. We copy the index.html
  //  file to the build folder.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body' // Inject webpack scripts into the body.
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};