const path = require('path')
const createConfig = require('../../src/utils/createConfig')

describe('createConfig', () => {
  const defaultConfig = addNewConfig => {
    return {
      entry: '/path/entry',
      ...addNewConfig,
    }
  }

  describe('default configuration', () => {
    it('development mode', () => {
      const config = defaultConfig()
      const outputPath = path.join(process.cwd(), 'build')
      const createConfigInDevelopment = createConfig(
        config,
        'development',
      )
      expect(createConfigInDevelopment.mode).toEqual('development')
      expect('module' in createConfigInDevelopment).toBe(true)
      expect('plugins' in createConfigInDevelopment).toBe(true)
      expect(createConfigInDevelopment.output.path).toEqual(outputPath)
    })

    it('production mode', () => {
      const config = defaultConfig()
      const outputPath = path.join(process.cwd(), 'build')
      const createConfigInProduction = createConfig(
        config,
        'production',
      )
      expect(createConfigInProduction.mode).toEqual('production')
      expect('module' in createConfigInProduction).toBe(true)
      expect('plugins' in createConfigInProduction).toBe(true)
      expect(createConfigInProduction.output.path).toEqual(outputPath)
    })
  })

  describe('custom configuration', () => {
    it('development mode', () => {
      const config = defaultConfig({
        output: {
          path: 'my-path',
        }
      })
      const outputPath = 'my-path'
      const createConfigInDevelopment = createConfig(config, 'development')
      expect(createConfigInDevelopment.mode).toEqual('development')
      expect('module' in createConfigInDevelopment).toBe(true)
      expect('plugins' in createConfigInDevelopment).toBe(true)
      expect(createConfigInDevelopment.output.path).toEqual(outputPath)
    })

    it('production mode', () => {
      const config = defaultConfig({
        output: {
          path: 'my-path',
        }
      })
      const outputPath = 'my-path'
      const createConfigInProduction = createConfig(config, 'production')
      expect(createConfigInProduction.mode).toEqual('production')
      expect('module' in createConfigInProduction).toBe(true)
      expect('plugins' in createConfigInProduction).toBe(true)
      expect(createConfigInProduction.output.path).toEqual(outputPath)
    })
  })
})
