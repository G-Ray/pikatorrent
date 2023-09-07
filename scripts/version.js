#!/usr/bin/env node
const { spawnSync, execSync } = require('node:child_process')
const { program } = require('commander')

const runCommand = async (command, args = []) => {
  spawnSync(command, args, { stdio: 'inherit' })
}

const setPkgVersionToWildcard = async (workspace, pkg) => {
  runCommand('npm', ['-w', workspace, 'pkg', 'set', `${pkg}=*`])
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
