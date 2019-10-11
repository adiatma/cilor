const babelConfig = require('../babel-config')

/**
 * Create rules for babel-loader.
 * @param {Object} options
 * @return {Object}
 */
function babelLoader(mode) {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: babelConfig(mode),
  }
}

module.exports = babelLoader
