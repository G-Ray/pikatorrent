import packageProperties from './package.json'

const IS_DEV = process.env.APP_VARIANT === 'development'

module.exports = () => {
  return {
    expo: {
      name: IS_DEV ? 'pikatorrent-dev' : 'pikatorrent',
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
        bundleIdentifier: 'com.gray.pikatorrent',
      },
      android: {
        package: IS_DEV ? 'com.gray.pikatorrent.dev' : 'com.gray.pikatorrent',
        versionCode: 17,
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        permissions: ['android.permission.FOREGROUND_SERVICE_DATA_SYNC'],
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
        './plugins/withNotifeeForegroundServiceType.js',
        'expo-router',
        '@config-plugins/react-native-webrtc',
        'expo-localization',
        // We use notifee, but expo-notification allows us
        // to generate 'notification_icon'
        [
          'expo-notifications',
          {
            icon: './assets/icon.png',
            color: '#ffffff',
          },
        ],
      ],
    },
  }
}
