import AsyncStorage from '@react-native-async-storage/async-storage'
import * as semver from 'semver'

import { version } from '../package.json'

const fetchPreviouslyInstalledVersion = async () => {
  const version = await AsyncStorage.getItem('version')
  return version || '0.0.0'
}

const saveNewInstalledVersion = async () => {
  const newVersion =
    process.env.NODE_ENV === 'production'
      ? version
      : semver.inc(version, 'minor')

  if (!newVersion) {
    throw new Error('new version is null')
  }

  await AsyncStorage.setItem('version', newVersion)
}

const migrate_0_8_0 = async () => {
  // search engines urls should now
  // contains %s as a placeholder for the query
  const searchEnginesUrlsString = await AsyncStorage.getItem(
    'searchEnginesUrls'
  )

  if (!searchEnginesUrlsString) return

  const searchEnginesUrls = JSON.parse(searchEnginesUrlsString)

  if (searchEnginesUrls) {
    const migratedSearchEnginesUrls = searchEnginesUrls.map(
      (url: string) => `${url}%s`
    )
    // Save
    await AsyncStorage.setItem(
      'searchEnginesUrls',
      JSON.stringify(migratedSearchEnginesUrls)
    )
  }
}

export const migrate = async () => {
  const previousVersion = await fetchPreviouslyInstalledVersion()

  if (semver.lt(previousVersion, '0.8.0')) {
    await migrate_0_8_0()
  }

  saveNewInstalledVersion()
}
