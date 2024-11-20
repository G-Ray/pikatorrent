/** @type {import('next').NextConfig} */

process.env.TAMAGUI_TARGET = 'web'

const { withTamagui } = require('@tamagui/next-plugin')

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    reactStrictMode: true,
    output: 'export',
    images: { unoptimized: true },
    // ...your configuration
  }

  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
    disableExtraction: true, // FIXME: Global CSS cannot be imported from files other than your Custom <App>
  })

  return {
    ...config,
    ...tamaguiPlugin(config),
  }
}
