import { Linking, Platform } from 'react-native'

export const openExternalLink = (link: string) => {
  if (Platform.OS !== 'web') {
    Linking.openURL(link)
  } else {
    window.open(link)
  }
}
