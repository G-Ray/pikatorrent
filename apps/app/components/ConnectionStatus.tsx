import React, { useContext } from 'react'
import { Circle, Paragraph, XStack, useMedia } from 'tamagui'
import { NodeContext } from '../contexts/node'

export const ConnectionStatus = () => {
  const node = useContext(NodeContext)
  const media = useMedia()

  return (
    <XStack ai="center" gap="$2">
      <Circle bc={node.isConnected ? '$green9' : '$red9'} size={12} />
      {media.gtXs && (
        <Paragraph>{node.isConnected ? 'Connected' : 'Disconnected'}</Paragraph>
      )}
    </XStack>
  )
}
