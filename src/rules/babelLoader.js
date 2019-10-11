const babelConfig = require('../babel-config')

/**
 * Create rules for babel-loader.
 * @param {Object} options
 * @return {Object}
 */
function babelLoader(options = {}) {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: babelConfig(options.mode),
    ...options,
  }
}

module.exports = babelLoader
