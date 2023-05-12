import React, { useContext } from 'react'
import { Button, H2, ListItem, XStack, YGroup, YStack } from 'tamagui'

import { AddNodeDialog } from '../../dialogs/AddNodeDialog'
import { SettingsContext } from '../../contexts/settings'
import { ConfirmNodeDeleteAlertDialog } from '../../dialogs/ConfirmNodeDeleteAlertDialog'

export const Nodes = () => {
  const { settings, updateSettings } = useContext(SettingsContext)

  console.log('settings', settings)

  const nodes = settings.nodes || []

  const handleDeleteNode = async (id: string) => {
    updateSettings({
      ...settings,
      selectedNodeId:
        settings.selectedNodeId === id ? null : settings.selectedNodeId,
      nodes: nodes.filter((n) => n.id !== id),
    })
  }

  console.log('nodes', nodes)

  return (
    <YStack space ai="flex-start">
      <H2>Nodes</H2>
      <XStack space w="100%">
        <YGroup alignSelf="center" bordered size="$4">
          {nodes.map((node) => (
            <YGroup.Item key={node.id}>
              <ListItem
                hoverTheme
                title={`${node.name}`}
                iconAfter={
                  <ConfirmNodeDeleteAlertDialog
                    onConfirm={() => handleDeleteNode(node.id)}
                  />
                }
              />
            </YGroup.Item>
          ))}
        </YGroup>
      </XStack>
      <AddNodeDialog />
    </YStack>
  )
}
