const { execSync } = require('child_process')
const path = require('path')

module.exports = {
  packagerConfig: {
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
    // {
    //   name: '@electron-forge/maker-zip',
    // },
    {
      name: '@electron-forge/maker-flatpak',
      config: {
        options: {
          id: 'com.github.G_Ray.pikatorrent',
          productName: 'PikaTorrent',
          genericName: 'Bittorrent client',
          icon: 'assets/icon.png',
          bin: 'pikatorrent',
          categories: ['Utility'],
          mimeType: [
            'x-scheme-handler/magnet',
            'x-scheme-handler/pikatorrent',
            'application/x-bittorrent',
          ],
          base: 'org.electronjs.Electron2.BaseApp',
          runtimeVersion: '22.08',
          baseVersion: '22.08',
          modules: [
            {
              name: 'zypak',
              sources: [
                {
                  type: 'git',
                  url: 'https://github.com/refi64/zypak',
                  tag: 'v2022.04',
                },
              ],
            },
          ],
        },
      },
    },
  ],
  hooks: {
    prePackage: async () => {
      // Build @pikatorrent/node as we will copy it
      execSync(
        `npm run build --prefix ${path.join(__dirname, '../../packages/node')}`
      )

      // Copy @pikatorrent/node as there is no support for npm workspaces
      execSync(
        `rm -rf ${path.join(__dirname, 'node_modules/@pikatorrent/node')}`
      )
      execSync(`mkdir -p ${path.join(__dirname, 'node_modules/@pikatorrent/')}`)
      execSync(
        `cp -r ${path.join(__dirname, '../../packages/node')} ${path.join(
          __dirname,
          'node_modules/@pikatorrent'
        )}`
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
