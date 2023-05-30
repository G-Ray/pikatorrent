const { execSync } = require('child_process')
const { bundle } = require('./bundler')

module.exports = {
  packagerConfig: {
    prune: false,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  hooks: {
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
        `npx expo export --platform web --output-dir ${buildPath}/dist ../app`
      )
    },
  },
}
