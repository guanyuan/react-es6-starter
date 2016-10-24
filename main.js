
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./tooling/webpack.config.js");

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: "/build/public/",
  hot: true
});
server.listen(8080);