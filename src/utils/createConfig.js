const createHTML = require('../plugins/createHTML')
const babelLoader = require('../rules/babelLoader')
const pathResolve = require('./pathResolve')

/**
 * Create webpack configuration.
 * @param {Object} config
 * @return {Object}
 */
function createConfig(config, mode) {
  const defaultConfig = {
    mode: mode,
    module: {
      rules: [babelLoader()],
    },
    output: {
      path: pathResolve('build'),
      filename: '[hash].[name].js',
      publicPath: '/',
    },
    plugins: [createHTML(config.htmlConfig)],
    ...config.webpack,
  }

  return defaultConfig
}

module.exports = createConfig
