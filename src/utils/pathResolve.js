const path = require('path')
const {ROOT} = require('./constants')

/**
 * Get file with path.resolve.
 * @param {String} filename
 */
function pathResolve(filename) {
  return path.resolve(ROOT, filename)
}

module.exports = pathResolve
