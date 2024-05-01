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
        assets: 'assets/appx',
        manifestTemplate: 'assets/appx/template/appxmanifest.xml',
        devCert: './assets/appx/cert.pfx',
        certPass: 'password',
        // protocol: 'pikatorrent' // electron forge is not up to date with latest electron-windows-store
      },
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: 'assets/icon.ico',
        iconUrl:
          'https://raw.githubusercontent.com/G-Ray/pikatorrent/main/apps/desktop/assets/icon.ico',
        name: 'pikatorrent',
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
        { env: { ...process.env } }
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
