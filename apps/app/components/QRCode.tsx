import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Platform } from 'react-native'

export const QRCode = ({ xml }) => {
  if (!xml) return null

  if (Platform.OS === 'web') {
    return (
      <img
        width={300}
        src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`}
      />
    )
  }

  return <SvgXml xml={xml} width={'100%'} height={300} />
}
