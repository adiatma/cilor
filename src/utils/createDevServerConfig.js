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
    contentBase:
      config && config.contentBase
        ? config.contentBase
        : pathResolve('build'), // default build
  }
}

module.exports = createDevServerConfig
