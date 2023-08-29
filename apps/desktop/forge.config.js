const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

module.exports = {
  packagerConfig: {
    icon: 'assets/icon',
  },
  rebuildConfig: {},
  makers: [
    // All OS
    {
      name: '@electron-forge/maker-zip',
    },
    // Windows
    {
      name: '@electron-forge/maker-appx',
      config: {
        identityName: '19653GRay.PikaTorrent',
        publisher: 'CN=9FB02A40-50B6-49F9-92D4-AA9DC9AC1AAB',
        publisherDisplayName: 'G_Ray',
        packageName: 'pikatorrent',
        assets: 'assets/appx'
      }
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: 'assets/icon.ico',
        iconUrl: 'https://raw.githubusercontent.com/G-Ray/pikatorrent/main/apps/desktop/assets/icon.ico' ,
        name: 'pikatorrent',
      },
    },
    // Linux
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
      fs.rmSync(path.join(__dirname, 'node_modules/@pikatorrent/node'), {
        recursive: true,
        force: true,
      })

      fs.cpSync(
        path.join(__dirname, '../../packages/node'),
        path.join(__dirname, 'node_modules/@pikatorrent/node'),
        { recursive: true }
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
