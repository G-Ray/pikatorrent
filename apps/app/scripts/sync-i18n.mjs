#!/usr/bin/env node
import fs from 'node:fs/promises'
import mergeWith from 'lodash/fp/merge.js'
import pick from 'lodash/pick.js'
import { flatten } from 'flat'

const en = JSON.parse(
  await fs.readFile('./locales/en.json', { encoding: 'utf-8' })
)

const enKeysPaths = Object.keys(flatten(en))

const files = await fs.readdir('./locales')
const translationFiles = files.filter((f) => f !== 'en.json')

for (let file of translationFiles) {
  const filePath = './locales/' + file
  const content = JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }))

  // Merge new keys, keep only same keys defined in en
  const merged = pick(mergeWith(en, content), enKeysPaths)
  console.log(file)
  await fs.writeFile(filePath, JSON.stringify(merged, null, 2), {
    encoding: 'utf8',
  })
}
