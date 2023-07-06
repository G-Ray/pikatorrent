import React, { useContext } from 'react'
import { Circle, Paragraph, XStack } from 'tamagui'
import { NodeContext } from '../contexts/NodeContext'

export const ConnectionStatus = () => {
  const node = useContext(NodeContext)

  if (node && node.isLocal) {
    return null
  }

  return (
    <XStack ai="center" gap="$2">
      <Circle bc={node.isConnected ? '$green9' : '$red9'} size={12} />
      <Paragraph numberOfLines={1}>
        {node && node.name ? node.name : 'No node connected'}
      </Paragraph>
    </XStack>
  )
}
