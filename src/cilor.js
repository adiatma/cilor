#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const createConfig = require('./utils/createConfig')
const createCompiler = require('./utils/createCompiler')
const createDevServerConfig = require('./utils/createDevServerConfig')
const pathResolve = require('./utils/pathResolve')

const {
  MODE_PRODUCTION,
  MODE_DEVELOPMENT,
} = require('./utils/constants')

/**
 * Create webpack configuration.
 * @param {Object} config
 * @return {Object}
 */
function createWebpackConfig(config) {
  createCompiler(createConfig(config, MODE_PRODUCTION))
}

/**
 * Create webpack-dev-server configuration.
 * @param {Object} config
 */
function createWebpackDevServerConfig(config) {
  const devServer = new WebpackDevServer(
    webpack(createConfig(config, MODE_DEVELOPMENT)),
    createDevServerConfig(config.devServer),
  )

  devServer.listen()
}

/**
 * Get file configuration.
 * @param {String} fileConfig
 * @param {String} mode
 */
function init(fileConfig, mode) {
  const stats = fs.lstatSync(fileConfig)

  if (stats.isFile()) {
    if(path.basename(fileConfig) === 'cilorConfig.js') {
      const config = require(pathResolve(fileConfig))
      if (mode === 'start') createWebpackDevServerConfig(config)
      if (mode === 'build') createWebpackConfig(config)
    }
  } else {
    console.log(`Oops, please provide file cilorConfig.js!`)
  }
}

const fileConfig = process.argv[2]
const mode = process.argv[3] || 'start' // default mode development

init(fileConfig, mode)
