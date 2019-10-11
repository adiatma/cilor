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
    contentBase: config.output.path || pathResolve('build'), // default build
    ...config,
  }
}

module.exports = createDevServerConfig
