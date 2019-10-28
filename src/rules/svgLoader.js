/**
 * @see https://webpack.js.org/loaders/svg-inline-loader/
 */
function svgLoader() {
  return {
    test: /\.svg$/,
    loader: require.resolve('svg-inline-loader'),
  }
}

module.exports = svgLoader
