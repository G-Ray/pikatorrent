import React from 'react'
import { useContext } from 'react'
import { Button, ListItem, Paragraph, YGroup, YStack } from 'tamagui'
import { NodeContext } from '../contexts/NodeContext'
import { Delete } from '@tamagui/lucide-icons'
import { SettingLayout } from './SettingLayout'

export const AcceptedOrRejectedPeers = () => {
  const node = useContext(NodeContext)
  const { settings } = node

  const handleRemoveRejectedPeer = (type, peerId) => {
    node.updateSettings({
      [type + 'Peers']: settings[type + 'Peers'].filter((p) => p.id !== peerId),
    })
  }

  if (!settings) {
    return <Paragraph>Loading</Paragraph>
  }

  return (
    <YStack gap="$4">
      <SettingLayout>
        <Paragraph>Accepted peers</Paragraph>
        <PeersList
          type="accepted"
          settings={settings}
          handleRemovePeer={handleRemoveRejectedPeer}
        />
      </SettingLayout>

      <SettingLayout>
        <Paragraph>Rejected peers</Paragraph>
        <PeersList
          type="rejected"
          settings={settings}
          handleRemovePeer={handleRemoveRejectedPeer}
        />
      </SettingLayout>
    </YStack>
  )
}

const PeersList = ({ type, settings, handleRemovePeer }) => {
  return (
    <YGroup alignSelf="center" bordered size="$4">
      {settings[type + 'Peers'].length === 0 && (
        <ListItem gap="$4">None</ListItem>
      )}
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
