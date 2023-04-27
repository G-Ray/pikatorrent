import * as dotenv from 'dotenv'

dotenv.config()

module.exports = () => {
  return {
    expo: {
      name: 'pikatorrent',
      slug: 'pikatorrent',
      scheme: 'pikatorrent',
      version: '1.0.0',
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
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        package: 'com.gray.pikatorrent',
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
      plugins: ['@config-plugins/react-native-webrtc'],
    },
  }
}
