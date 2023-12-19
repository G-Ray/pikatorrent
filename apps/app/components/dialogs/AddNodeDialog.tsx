import React, { useEffect, useState } from 'react'
import { PlusCircle } from '@tamagui/lucide-icons'
import { Button, Input, YStack } from 'tamagui'
import { Fieldset } from 'tamagui'
import { Label } from 'tamagui'
import { Form } from 'tamagui'
import { Platform } from 'react-native'

import { Dialog } from '../reusable/Dialog'
import { useI18n } from '../../hooks/use18n'

export const AddNodeDialog = ({ settingsContext }) => {
  const i18n = useI18n()
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
    if (searchParams.get('name')) {
      setName(searchParams.get('name'))
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
      title={i18n.t('addNodeDialog.title')}
      defaultOpen={defaultOpen}
      trigger={
        <Button theme="yellow" icon={PlusCircle} borderColor={'$yellow7'}>
          {i18n.t('addNodeDialog.triggerLabel')}
        </Button>
      }
    >
      <Dialog.Description>
        {i18n.t('addNodeDialog.description')}
      </Dialog.Description>

      <Form onSubmit={handleSave} gap="$4">
        <Fieldset horizontal gap="$4">
          <Label w={160} justifyContent="flex-end" htmlFor="name">
            {i18n.t('addNodeDialog.nameLabel')}
          </Label>
          <Input
            f={1}
            id="name"
            placeholder={i18n.t('addNodeDialog.namePlaceholder')}
            value={name}
            onChangeText={setName}
          />
        </Fieldset>
        <Fieldset horizontal gap="$4">
          <Label w={160} justifyContent="flex-end" htmlFor="name">
            {i18n.t('addNodeDialog.idLabel')}
          </Label>
          <Input
            f={1}
            id="id"
            placeholder={i18n.t('addNodeDialog.idPlaceholder')}
            value={id}
            onChangeText={setId}
          />
        </Fieldset>

        <YStack ai="flex-end" mt="$2">
          <Dialog.Close displayWhenAdapted asChild>
            <Form.Trigger asChild>
              <Button
                theme="yellow"
                borderColor={'$yellow7'}
                aria-label="Submit"
              >
                {i18n.t('addNodeDialog.add')}
              </Button>
            </Form.Trigger>
          </Dialog.Close>
        </YStack>
      </Form>
    </Dialog>
  )
}
