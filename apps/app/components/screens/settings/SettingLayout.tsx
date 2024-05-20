import React from 'react'
import { XStack, YStack } from 'tamagui'

export const SettingLayout = ({ children, vertical = false }) => {
  return vertical ? (
    <YStack>{children}</YStack>
  ) : (
    <XStack jc="space-between" w="100%" f={1}>
      {children}
    </XStack>
  )
}
