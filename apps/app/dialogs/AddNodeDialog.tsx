import React, { useContext, useState } from 'react'
import { PlusCircle, X } from '@tamagui/lucide-icons'
import { Adapt, Button, Dialog, Input, Sheet, Unspaced, YStack } from 'tamagui'
import { Fieldset } from 'tamagui'
import { Label } from 'tamagui'
import { Form } from 'tamagui'
import { SettingsContext } from '../contexts/settings'

export const AddNodeDialog = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const { settings, updateSettings } = useContext(SettingsContext)

  const nodes = settings.nodes || []

  const handleSave = async () => {
    if (id.length > 0 && nodes.filter((n) => n.id === id).length === 0) {
      updateSettings({ ...settings, nodes: [...nodes, { id, name }] })
    }
  }

  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button icon={PlusCircle} theme="blue">
          Add
        </Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Add a new node</Dialog.Title>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setId(e.target.value)}
              />
            </Fieldset>

            <YStack ai="flex-end" mt="$2">
              <Dialog.Close displayWhenAdapted asChild>
                <Form.Trigger asChild>
                  <Button theme="blue" aria-label="Submit">
                    Add
                  </Button>
                </Form.Trigger>
              </Dialog.Close>
            </YStack>
          </Form>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                t="$3"
                r="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
