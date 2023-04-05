import React from 'react'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import prettyBytes from 'pretty-bytes'
import { Paragraph } from 'tamagui'
import { XStack } from 'tamagui'

interface SpeedOptions {
  downloadSpeed: number
  uploadSpeed: number
}

export const Speed = ({ downloadSpeed = 0, uploadSpeed = 0 }: SpeedOptions) => {
  return (
    <XStack space="$4">
      <XStack>
        <ChevronDown color="$purple9" />
        <Paragraph fontWeight="bold">{prettyBytes(downloadSpeed)}/s</Paragraph>
      </XStack>
      <XStack>
        <ChevronUp color="$blue9" />
        <Paragraph fontWeight="bold">{prettyBytes(uploadSpeed)}/s</Paragraph>
      </XStack>
    </XStack>
  )
}
