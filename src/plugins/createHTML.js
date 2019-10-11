const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Create HTML.
 * @param {Object} options
 */
function createHTML(options = {}) {
  const defaultConfig = {
    template: path.resolve(__dirname, 'assets/index.html'),
    elementID: 'root', // default elementID `root`
    ...options,
  }
  return new HtmlWebpackPlugin(defaultConfig)
}

module.exports = createHTML
