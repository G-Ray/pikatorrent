module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // NOTE: this is required to pass the right environment
      [
        'transform-inline-environment-variables',
        {
          include: ['SIGNALING_URL', 'APP_URL', 'APP_VARIANT'],
        },
      ],
      // NOTE: this is optional, you don't *need* the compiler
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
