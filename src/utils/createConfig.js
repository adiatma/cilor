const TerserPlugin = require('terser-webpack-plugin')

const createHTML = require('../plugins/createHTML')
const babelLoader = require('../rules/babelLoader')
const urlLoader = require('../rules/urlLoader')
const pathResolve = require('./pathResolve')
const svgLoader = require('./rules/svgLoader')

/**
 * Create webpack configuration.
 * @param {Object} config
 * @return {Object}
 */
function createConfig(config, mode) {
  const defaultConfig = {
    mode: mode,
    module: {
      rules: [babelLoader(mode), urlLoader(), svgLoader()],
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

  // merge with custom rules
  config.rules && defaultConfig.module.rules.push(...config.rules)
  // merge with custom plugins
  config.plugins && defaultConfig.plugins.push(...config.plugins)

  return defaultConfig
}

module.exports = createConfig
