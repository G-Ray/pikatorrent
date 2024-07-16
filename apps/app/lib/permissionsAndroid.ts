import { PermissionsAndroid } from 'react-native'
import i18n from '../i18n'

export const requestReadExternalStoragePermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: i18n.t('alerts.storagePermissionRequest.title'),
      message: i18n.t('alerts.storagePermissionRequest.description'),
      buttonPositive: 'OK',
    },
  )

  return granted
}

export const requestWriteExternalStoragePermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: i18n.t('alerts.storagePermissionRequest.title'),
      message: i18n.t('alerts.storagePermissionRequest.description'),
      buttonPositive: 'OK',
    },
  )

  return granted
}
