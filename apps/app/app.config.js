import packageProperties from './package.json'

const IS_DEV = process.env.APP_VARIANT === 'development'

module.exports = () => {
  return {
    expo: {
      name: 'pikatorrent',
      slug: 'pikatorrent',
      scheme: 'pikatorrent',
      version: packageProperties.version,
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'automatic',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
      },
      android: {
        package: IS_DEV ? 'com.gray.pikatorrent.dev' : 'com.gray.pikatorrent',
        versionCode: 6,
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        intentFilters: [
          {
            action: 'VIEW',
            data: [{ scheme: 'magnet' }],
            category: ['BROWSABLE', 'DEFAULT'],
          },
          // TODO:
          // {
          //   action: 'VIEW',
          //   data: [{ scheme: 'content', mimeType: 'application/x-bittorrent' }],
          //   category: ['BROWSABLE', 'DEFAULT'],
          // },
        ],
      },
      web: {
        favicon: './assets/favicon.png',
        bundler: 'metro',
      },
      extra: {
        eas: {
          projectId: 'e2afa425-163f-4c4c-95e7-1217ac950dc5',
        },
      },
      plugins: [
        '@config-plugins/react-native-webrtc',
        'expo-localization',
        [
          'expo-build-properties',
          {
            android: {
              packagingOptions: {
                pickFirst: [
                  '/lib/arm64-v8a/libcrypto.so',
                  '/lib/arm64-v8a/libssl.so',
                  '/lib/x86_64/libcrypto.so',
                  '/lib/x86_64/libssl.so',
                ],
              },
            },
          },
        ],
      ],
    },
  }
}
