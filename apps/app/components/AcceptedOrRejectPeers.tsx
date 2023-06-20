import React from 'react'
import { useContext } from 'react'
import { Button, Label, ListItem, Paragraph, YGroup, YStack } from 'tamagui'
import { NodeContext } from '../contexts/NodeContext'
import { Delete } from '@tamagui/lucide-icons'

export const AcceptedOrRejectedPeers = () => {
  const node = useContext(NodeContext)
  const { settings } = node

  const handleRemoveRejectedPeer = (type, peerId) => {
    node.updateSettings({
      [type + 'Peers']: settings.rejectedPeers.filter((p) => p.id !== peerId),
    })
  }

  if (!settings) {
    return <Paragraph>Loading</Paragraph>
  }

  return (
    <YStack>
      <Label>Accepted peers</Label>
      <PeersList
        type="accepted"
        settings={settings}
        handleRemovePeer={handleRemoveRejectedPeer}
      />

      <Label>Rejected peers</Label>
      <PeersList
        type="rejected"
        settings={settings}
        handleRemovePeer={handleRemoveRejectedPeer}
      />
    </YStack>
  )
}

const PeersList = ({ type, settings, handleRemovePeer }) => {
  return (
    <YGroup alignSelf="center" bordered size="$4">
      {settings[type + 'Peers'].map((peer: any) => (
        <ListItem key={peer.id} gap="$4">
          {peer.name}
          <Button
            icon={Delete}
            theme="red"
            size="$2"
            onPress={() => handleRemovePeer(type, peer.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </YGroup>
  )
}
