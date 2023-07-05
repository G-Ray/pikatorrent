import React, { useEffect, useState } from 'react'
import { PlusCircle } from '@tamagui/lucide-icons'
import { Button, Input, YStack } from 'tamagui'
import { Fieldset } from 'tamagui'
import { Label } from 'tamagui'
import { Form } from 'tamagui'
import { Platform } from 'react-native'
import { Dialog } from './Dialog'

export const AddNodeDialog = ({ settingsContext }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const { settings, updateSettings } = settingsContext

  const nodes = settings?.nodes || []

  useEffect(() => {
    // Open modal with node ID from url searchParams
    if (Platform.OS !== 'web') return

    const searchParams = new URLSearchParams(document.location.search)
    if (searchParams.get('nodeId')) {
      setId(searchParams.get('nodeId'))
    }
  }, [])

  const handleSave = async () => {
    if (id.length > 0 && nodes.filter((n) => n.id === id).length === 0) {
      updateSettings({
        nodes: [...nodes, { id, name }],
        selectedNodeId: id,
      })
    }
  }

  const defaultOpen = Boolean(
    Platform.OS === 'web' &&
      new URLSearchParams(document.location.search).get('nodeId')
  )

  return (
    <Dialog
      title="Add a new node"
      defaultOpen={defaultOpen}
      trigger={
        <Button theme="yellow" icon={PlusCircle}>
          Add node
        </Button>
      }
    >
      <Dialog.Description>
        Add a new node to control it from anywhere.
      </Dialog.Description>

      <Form onSubmit={handleSave} gap="$4">
        <Fieldset horizontal gap="$4">
          <Label w={160} justifyContent="flex-end" htmlFor="name">
            Name
          </Label>
          <Input
            f={1}
            id="name"
            placeholder="name"
            value={name}
            onChangeText={setName}
          />
        </Fieldset>
        <Fieldset horizontal gap="$4">
          <Label w={160} justifyContent="flex-end" htmlFor="name">
            ID
          </Label>
          <Input
            f={1}
            id="id"
            placeholder="id"
            value={id}
            onChangeText={setId}
          />
        </Fieldset>

        <YStack ai="flex-end" mt="$2">
          <Dialog.Close displayWhenAdapted asChild>
            <Form.Trigger asChild>
              <Button theme="yellow" aria-label="Submit">
                Add
              </Button>
            </Form.Trigger>
          </Dialog.Close>
        </YStack>
      </Form>
    </Dialog>
  )
}
