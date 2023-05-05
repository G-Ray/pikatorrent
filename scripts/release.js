#!/usr/bin/env node
const { spawn, execSync } = require('node:child_process')
const { program } = require('commander')

const runCommand = async (command, args = []) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args)

    child.stdout.setEncoding('utf-8')
    child.stderr.setEncoding('utf-8')
    child.stdout.on('data', console.log)
    child.stderr.on('data', console.error)
    child.on('close', resolve)
    child.on('error', reject)
  })
}

const setPkgVersionToWildcard = async (pkg) => {
  await runCommand('npm', ['-w', 'pikatorrent', 'pkg', 'set', `${pkg}=*`])
}

const release = async (version, otp) => {
  const rc = await execSync('git status --porcelain', { encoding: 'utf-8' })
  if (rc.length !== 0) {
    console.log('git repository is not clean')
    process.exit(1)
  }

  // workaround to let npm-version save the new exact package version
  await setPkgVersionToWildcard('dependencies.@pikatorrent/node')
  await setPkgVersionToWildcard('dependencies.@pikatorrent/hub')

  await runCommand('npm', [
    'version',
    '--ws',
    '--no-commit-hooks',
    '--no-git-tag-version',
    '--save',
    '--save-exact',
    version,
  ])

  // npm-version is able to upgrade dependencies with --save,
  // but it will refuse tu upgrade an exact version, so we workaround
  // this issue by temporarily settings '*' to our ws packages
  await setPkgVersionToWildcard('@pikatorrent/node')
  await setPkgVersionToWildcard('@pikatorrent/hub')

  // Commit
  await execSync(`git commit -am v${version}`, {
    encoding: 'utf-8',
  })

  // Create git tag
  await execSync(`git tag v${version}`, {
    encoding: 'utf-8',
  })

  // Publish
  await runCommand('npm', ['publish', '--otp', otp, '-w', '@pikatorrent/node'])
  await runCommand('npm', ['publish', '--otp', otp, '-w', '@pikatorrent/hub'])
  // publish cli after as it depends on other packages
  await runCommand('npm', ['publish', '--otp', otp, '-w', 'pikatorrent'])
}

program
  .name('pikatorrent-release')
  .argument('<version>', 'version to release')
  .requiredOption('--otp <otp>', 'OTP to publish to npmjs')
  .action((version) => {
    const options = program.opts()
    release(version, options.otp)
  })

program.parse()
