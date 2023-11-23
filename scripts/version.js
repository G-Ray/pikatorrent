#!/usr/bin/env node
const { spawnSync, execSync } = require('node:child_process')
const { program } = require('commander')
const fs = require('node:fs/promises')
const path = require('node:path')

const runCommand = async (command, args = []) => {
  spawnSync(command, args, { stdio: 'inherit' })
}

const setPkgVersionToWildcard = async (workspace, pkg) => {
  runCommand('npm', ['-w', workspace, 'pkg', 'set', `${pkg}=*`])
}

const increaseAndroidVersionCode = async () => {
  const appConfigPath = path.join(__dirname, '../apps/app/app.config.js')
  const fileContent = await fs.readFile(appConfigPath, { encoding: 'utf-8' })
  const regex = new RegExp('^.*' + 'versionCode' + '.*$', 'gm')
  const results = fileContent.match(regex)

  if (!results) {
    return
  }

  const versionCodeString = results[0].trim()
  const [_, currentVersionString] = versionCodeString.split(':')
  const nextVersion = parseInt(currentVersionString.slice(0, -1).trim()) + 1 // slice to remove comma
  const newContent = fileContent.replace(
    versionCodeString,
    versionCodeString.replace(currentVersionString.trim(), nextVersion + ',')
  )

  await fs.writeFile(appConfigPath, newContent, { encoding: 'utf-8' })
}

const updateVersion = async (version) => {
  const rc = await execSync('git status --porcelain', { encoding: 'utf-8' })
  if (rc.length !== 0) {
    console.log('git repository is not clean')
    process.exit(1)
  }

  // Npm does not update workspace packages in package pikatorrent.
  // It works for packages under a scoped name like @pikatorrent/desktop though
  await setPkgVersionToWildcard('pikatorrent', 'dependencies.@pikatorrent/node')
  await setPkgVersionToWildcard('pikatorrent', 'dependencies.@pikatorrent/hub')
  await setPkgVersionToWildcard(
    '@pikatorrent/desktop',
    'dependencies.@pikatorrent/node'
  )

  // npm does not commit or tag when using --ws
  runCommand('npm', ['version', '--ws', '--save', '--save-exact', version])

  await increaseAndroidVersionCode()

  const newVersion = require('../apps/cli/package.json').version

  // Commit
  await execSync(`git commit -am v${newVersion}`, { encoding: 'utf-8' })

  // Tag
  await execSync(`git tag v${newVersion}`, { encoding: 'utf-8' })
}

program
  .name('pikatorrent-version')
  .argument('<version>', 'version')
  .action((version) => {
    updateVersion(version)
  })

program.parse()
