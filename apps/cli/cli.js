#!/usr/bin/env node
const { program } = require('commander')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

program
  .name('pikatorrent')
  .description('🗲 A next-generation BitTorrent client 🗲')

program
  .command('node')
  .description('Start a pikatorrent node')
  .action(() => {
    require('@pikatorrent/node')
  })

program
  .command('hub')
  .description('Start a pikatorrent hub')
  .action(() => {
    require('@pikatorrent/hub')
  })

program.parse()
