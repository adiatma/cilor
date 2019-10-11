const TerserPlugin = require('terser-webpack-plugin')

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
      rules: [babelLoader(mode)],
    },
    output: {
      path: config.output && config.output.path
        ? config.output.path
        : pathResolve('build'), // default build
      filename: '[hash].[name].js',
      publicPath: '/',
    },
    plugins: [createHTML(config.htmlConfig)],
    entry: config.entry,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          test: /\.js(\?.*)?$/i,
        })
      ]
    }
  }

  return defaultConfig
}

module.exports = createConfig
