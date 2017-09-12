/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config')
const compiler = webpack(config)
const webpackDevServer = require('webpack-dev-server')

const server = new webpackDevServer(
  compiler, 
  {
    contentBase: path.join(__dirname, "./dist"),
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }
)

server.listen(3001, 'localhost', () => {
  console.log('app is listening on port 3001')
})

