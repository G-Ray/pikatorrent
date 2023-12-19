import React from 'react'
import { XStack, YStack, useMedia } from 'tamagui'

export const SettingLayout = ({ children }) => {
  const media = useMedia()

  return media.gtXs ? (
    <XStack jc="space-between" w="100%">
      {children}
    </XStack>
  ) : (
    <YStack w="100%">{children}</YStack>
  )
}
