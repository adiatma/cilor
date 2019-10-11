const webpack = require('webpack')

/**
 * Create cwebpack compiler.
 * @param {Object} config
 */
function createCompiler(config) {
  /**
   * @see https://webpack.js.org/api/node/#webpack
   */
  const compiler = webpack(config)

  compiler.run((err, stats) => {
    /**
     * @see https://webpack.js.org/api/node/#statshaserrors
     */
    if (err || stats.hasErrors()) {
      process.stdout.write(
        stats.toString({chunks: false, colors: true}) + '\n',
      )
    }

    /**
     * @see https://webpack.js.org/api/node/#statshaswarnings
     */
    if (stats.hasWarnings()) {
      process.stdout.write(
        stats.toString({chunks: false, colors: true}) + '\n',
      )
    }

    /**
     * @see https://webpack.js.org/api/node/#statstostringoptions
     */
    process.stdout.write(
      stats.toString({chunks: false, colors: true}) + '\n',
    )
  })
}

module.exports = createCompiler
