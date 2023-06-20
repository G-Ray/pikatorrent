#!/usr/bin/env node
const { spawnSync, execSync } = require('node:child_process')
const { program } = require('commander')

const runCommand = async (command, args = []) => {
  spawnSync(command, args, { stdio: 'inherit' })
}

const setPkgVersionToWildcard = async (pkg) => {
  runCommand('npm', ['-w', 'pikatorrent', 'pkg', 'set', `${pkg}=*`])
}

const updateVersion = async (version) => {
  const rc = await execSync('git status --porcelain', { encoding: 'utf-8' })
  if (rc.length !== 0) {
    console.log('git repository is not clean')
    process.exit(1)
  }

  // Npm does not update workspace packages in package pikatorrent.
  // It works for packages under a scoped name like @pikatorrent/desktop though
  await setPkgVersionToWildcard('dependencies.@pikatorrent/node')
  await setPkgVersionToWildcard('dependencies.@pikatorrent/hub')

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
