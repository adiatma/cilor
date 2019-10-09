#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')

const ROOT = process.cwd()
const MODE_DEVELOPMENT = 'development'
const MODE_PRODUCTION = 'production'

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

/**
 * Get file with path.resolve.
 * @param {String} filename
 */
function resolveApp(filename) {
  return path.resolve(ROOT, filename)
}

/**
 * Create rules for babel-loader.
 * @return {Object}
 */
function createBabelLoaderRules() {
  return {
    test: /\.(js|jsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        require.resolve('@babel/preset-env'),
        require.resolve('@babel/preset-react'),
      ],
    },
  }
}

// Create HTML.
function createHTML(options) {
  const defaultConfig = {
    template: path.resolve(__dirname, 'assets/index.html'),
    elementID: 'root',
    ...options,
  }
  return new HtmlWebpackPlugin(defaultConfig)
}

/**
 * Create webpack configuration.
 * @param {Object} config
 * @return {Object}
 */
function createWebpackConfig(config) {
  const defaultConfig = {
    mode: MODE_PRODUCTION,
    module: {
      rules: [createBabelLoaderRules()],
    },
    output: {
      path: resolveApp('build'),
      filename: '[hash].[name].js',
      publicPath: '/',
    },
    plugins: [createHTML(config.htmlConfig || {})],
    ...config.webpack,
  }

  createCompiler(defaultConfig)
}

/**
 * Create webpack-dev-server configuration.
 * @param {Object} config
 */
function createWebpackDevServerConfig(config) {
  const defaultConfig = {
    mode: MODE_DEVELOPMENT,
    module: {
      rules: [createBabelLoaderRules()],
    },
    output: {
      path: resolveApp('build'),
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [createHTML(config.htmlConfig || {})],
    ...config.webpack,
  }

  const defaultServerConfig = {
    useLocalIp: true,
    contentBase: resolveApp('build'),
    ...config.server,
  }

  const compiler = webpack(defaultConfig)

  const devServer = new WebpackDevServer(
    compiler,
    defaultServerConfig,
  )

  devServer.listen()
}

/**
 * Get file configuration.
 * @param {String} filename
 */
function getFileConfig(filename, mode) {
  const config = require(resolveApp(filename))
  if (mode === 'development' || mode === 'dev')
    createWebpackDevServerConfig(config)
  if (mode === 'production' || mode === 'prod')
    createWebpackConfig(config)
}

getFileConfig(process.argv[2], process.argv[3])
