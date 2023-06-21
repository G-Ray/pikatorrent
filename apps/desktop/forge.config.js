const { execSync } = require('child_process')
const path = require('path')

module.exports = {
  packagerConfig: {
    prune: false,
    icon: 'assets/icon',
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {
    //     setupIcon: 'assets/icon.ico',
    //   },
    // },
    {
      name: '@electron-forge/maker-zip',
    },
    // {
    //   name: '@reforged/maker-appimage',
    //   config: {
    //     options: {
    //       name: 'pikatorrent',
    //       icon: 'assets/icon.png',
    //     },
    //   },
    // },
  ],
  hooks: {
    prePackage: async () => {
      // Build @pikatorrent/node as we will copy it
      execSync(
        `npm run build --prefix ${path.join(__dirname, '../../packages/node')}`
      )
    },
    packageAfterCopy: async (
      /** @type {any} */ forgeConfig,
      /** @type {string} */ buildPath,
      /** @type {string} */ electronVersion,
      /** @type {string} */ platform,
      /** @type {string} */ arch
    ) => {
      const appPath = path.join(__dirname, '../app')

      // Build app for web
      execSync(
        `npm --prefix ${appPath} run build:web -- --clear --output-dir ${buildPath}/dist ${appPath}`,
        { env: { ...process.env, TAMAGUI_TARGET: 'web' } }
      )
    },
  },
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'G-Ray',
          name: 'pikatorrent',
        },
        prerelease: true,
      },
    },
  ],
}
