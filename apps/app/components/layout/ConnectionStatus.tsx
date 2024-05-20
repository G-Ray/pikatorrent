import React, { useContext } from 'react'
import { Circle, Paragraph, XStack, useMedia } from 'tamagui'
import { NodeContext } from '../../contexts/NodeContext'

export const ConnectionStatus = () => {
  const node = useContext(NodeContext)
  const media = useMedia()

  if (node && node.isLocal) {
    return null
  }

  return (
    <XStack ai="center" gap="$2">
      <Circle
        backgroundColor={node.isConnected ? '$green9' : '$red9'}
        size={12}
      />
      {media.gtXs && (
        <Paragraph numberOfLines={1}>
          {node && node.name ? node.name : 'No node connected'}
        </Paragraph>
      )}
    </XStack>
  )
}
