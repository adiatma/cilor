/**
 * @see https://www.npmjs.com/package/@svgr/webpack
 */
function svgLoader() {
  return {
    test: /\.svg$/,
    use: [require.resolve('@svgr/webpack'), require.resolve('url-loader')],
  }
}

module.exports = svgLoader
