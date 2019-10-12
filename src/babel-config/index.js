/**
 * @param {String} env.
 */
function babelConfig(env) {
  const isEnvDevelopment = env === 'development'
  const isEnvProduction = env === 'production'
  const isEnvTest = env === '__test__'

  const presets = [
    isEnvTest && [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          node: 'current',
        },
      },
    ],
    (isEnvProduction || isEnvDevelopment) && [
      require.resolve('@babel/preset-env'),
      {
        modules: false,
      }
    ],
    [
      require.resolve('@babel/preset-react'),
      {
        development: isEnvDevelopment,
      },
    ],
    require.resolve('@babel/preset-flow'),
  ].filter(Boolean)

  const plugins = [
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    [
      require.resolve('babel-plugin-styled-components'),
      {
        minify: true,
        displayName: true,
      },
    ],
    isEnvProduction && [
      require.resolve('babel-plugin-transform-react-remove-prop-types'),
      {
        removeImport: true,
      },
    ],
  ].filter(Boolean)

  return {
    presets,
    plugins,
  }
}

module.exports = babelConfig
