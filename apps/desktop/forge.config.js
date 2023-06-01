const { execSync } = require('child_process')
const { bundle } = require('./bundler')

module.exports = {
  packagerConfig: {
    prune: false,
    icon: 'assets/icon',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: 'assets/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
    },
    {
      name: '@reforged/maker-appimage',
      config: {
        options: {
          name: 'pikatorrent',
          icon: 'assets/icon.png',
        },
      },
    },
  ],
  hooks: {
    prePackage: async () => {
      // Build @pikatorrent/node as we will copy it
      execSync(`npm run build --prefix ../node`)
    },
    packageAfterCopy: async (
      /** @type {any} */ forgeConfig,
      /** @type {string} */ buildPath,
      /** @type {string} */ electronVersion,
      /** @type {string} */ platform,
      /** @type {string} */ arch
    ) => {
      // this is a workaround until we find a proper solution
      // for running electron-forge in a mono repository
      await bundle(__dirname, buildPath)

      // Build app for web
      execSync(
        `TAMAGUI_TARGET=web npx expo export --clear --platform web --output-dir ${buildPath}/dist ../app`
      )
    },
  },
}
