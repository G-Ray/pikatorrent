// eslint-disable-next-line
const { withAndroidManifest, AndroidConfig } = require('expo/config-plugins')

module.exports = (config) => {
  config = withAndroidManifest(config, (config) => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults,
    )

    if (mainApplication && !mainApplication?.service) {
      mainApplication.service = []
    }

    mainApplication?.service?.push({
      $: {
        'android:name': 'app.notifee.core.ForegroundService',
        'android:foregroundServiceType': 'dataSync',
      },
    })
    return config
  })

  return config
}
