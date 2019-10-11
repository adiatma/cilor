const pathResolve = require('./pathResolve')

/**
 * Create devServer configuration.
 * @param {Object} config
 */
function createDevServerConfig(config) {
  return {
    useLocalIp: true,
    historyApiFallback: true,
    hot: true,
    contentBase: pathResolve('build'),
    ...config,
  }
}

module.exports = createDevServerConfig
