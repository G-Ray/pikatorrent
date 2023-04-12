import React, { useContext } from 'react'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { Adapt, Select, Sheet, YStack } from 'tamagui'
import { SettingsContext } from '../contexts/settings'

export const NodeSelector = () => {
  const { settings, updateSettings } = useContext(SettingsContext)

  const nodes = settings.nodes || []
  const selectedNode = nodes.find((n) => n.id === settings.selectedNodeId)

  const updateSelectedNodeId = (id: string) => {
    updateSettings({ ...settings, selectedNodeId: id })
  }

  return (
    <Select
      id="node"
      value={selectedNode?.id}
      onValueChange={updateSelectedNodeId}
    >
      <Select.Trigger w={160} iconAfter={ChevronDown}>
        <Select.Value placeholder="Select a node" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          ai="center"
          jc="center"
          pos="relative"
          w="100%"
          h="$3"
        >
          <YStack zi={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport outlineStyle="none">
          <Select.Group space="$0">
            {nodes.map((node, i) => {
              return (
                <Select.Item
                  index={i}
                  key={node.id}
                  value={node.id}
                  outlineStyle="none"
                >
                  <Select.ItemText color="white">{node.id}</Select.ItemText>
                  <Select.ItemIndicator ml="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              )
            })}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton
          ai="center"
          jc="center"
          pos="relative"
          w="100%"
          h="$3"
        >
          <YStack zi={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}
