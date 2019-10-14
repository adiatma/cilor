/**
 * @see https://github.com/webpack-contrib/url-loader
 * @return {Object}
 */
function urlLoader() {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: 8129,
        },
      },
    ],
  }
}

module.exports = urlLoader
