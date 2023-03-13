import { Circle, Paragraph, XStack } from 'tamagui'
import { useNode } from '../hooks/useNode'

export const ConnectionStatus = () => {
  const { isConnected } = useNode()

  return (
    <XStack ai="center" gap="$2">
      <Circle bc={isConnected ? '$green9' : '$red9'} size={12} />
      <Paragraph>{isConnected ? 'Connected' : 'Disconnected'}</Paragraph>
    </XStack>
  )
}
