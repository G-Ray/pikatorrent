import React from 'react'
import { XStack, YStack, useMedia } from 'tamagui'

export const SettingLayout = ({ children }) => {
  return (
    <XStack jc="space-between" w="100%">
      {children}
    </XStack>
  )
}
