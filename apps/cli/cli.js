#!/usr/bin/env node
const { program } = require('commander')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

program
  .name('pikatorrent')
  .description(
    'A modern, open source and electric BitTorrent app for mobile, desktop & server.'
  )

program
  .command('node')
  .description('Start a pikatorrent node')
  .action(() => {
    import('@pikatorrent/node').then((node) => {
      node.startNode({ connectWebsocket: true })
    })
  })

program
  .command('hub')
  .description('Start a pikatorrent hub')
  .action(() => {
    import('@pikatorrent/hub')
  })

program.parse()
