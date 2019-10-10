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
    options: {
      presets: [
        require.resolve('@babel/preset-env'),
        require.resolve('@babel/preset-react'),
      ],
    },
    ...options,
  }
}

module.exports = babelLoader
