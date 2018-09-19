const baseConfig = require('../webpack/webpack.base')

const config = baseConfig({ __dirname: '../../' })

module.exports = {
  plugins: config.plugins,
  module: config.module
}
