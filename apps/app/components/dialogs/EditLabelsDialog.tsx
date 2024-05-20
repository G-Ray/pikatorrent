import React, { useState } from 'react'
import { Plus, Tag, X } from '@tamagui/lucide-icons'
import {
  Label as TamaguiLabel,
  Button,
  Input,
  XStack,
  Form,
  ScrollView,
  Separator,
  H6,
  Paragraph,
} from 'tamagui'
import { YStack } from 'tamagui'

import { Dialog } from '../reusable/Dialog'
import { Label } from '../reusable/Label'
import { useI18n } from '../../hooks/use18n'

export const EditLabelsDialog = ({ torrentsFunctions, torrent }) => {
  const i18n = useI18n()

  const [label, setLabel] = useState('')
  const [labels, setLabels] = useState<string[]>(torrent.labels)
  const [isOpen, setIsOpen] = useState(false)

  const handleAddLabelSubmit = () => {
    handleAddLabel(label)
    setLabel('')
  }

  const handleAddLabel = (label: string) => {
    const newLabels = [...labels, label]
    setLabels(newLabels)
    torrentsFunctions.setLabels(torrent.id, newLabels)
  }

  const handleRemoveLabel = (label: string) => {
    const newLabels = labels.filter((l) => l !== label)
    setLabels(newLabels)
    torrentsFunctions.setLabels(torrent.id, newLabels)
  }

  const handleRemoveAllLabels = () => {
    setLabels([])
    torrentsFunctions.setLabels(torrent.id, [])
  }

  return (
    <>
      <Button icon={Tag} onPress={() => setIsOpen(true)}>
        {i18n.t('torrentDialog.editLabels')}
      </Button>

      {isOpen && (
        <Dialog
          title="Labels"
          snapPointsMode="fit"
          onOpenChange={setIsOpen}
          open
        >
          <YStack gap="$4" w={360}>
            <LabelsSelector
              labels={torrentsFunctions.labels}
              labelsToExlude={labels}
              onLabelPress={handleAddLabel}
            />

            <Separator />

            <SelectedLabels
              labels={labels}
              onRemoveLabel={handleRemoveLabel}
              onRemoveAll={handleRemoveAllLabels}
            />

            <Form onSubmit={handleAddLabelSubmit}>
              <XStack alignItems="center" space="$4">
                <TamaguiLabel width={90} htmlFor="label" numberOfLines={1}>
                  {i18n.t('torrentDialog.newLabel')}
                </TamaguiLabel>
                <Input
                  borderColor="$yellow7"
                  flex={1}
                  id="label"
                  onChangeText={setLabel}
                />

                <Form.Trigger asChild>
                  <Button theme="yellow" borderColor={'$yellow7'}>
                    {i18n.t('torrentDialog.add')}
                  </Button>
                </Form.Trigger>
              </XStack>
            </Form>
          </YStack>
        </Dialog>
      )}
    </>
  )
}

export const SelectedLabels = ({ labels, onRemoveLabel, onRemoveAll }) => {
  const i18n = useI18n()

  return (
    <YStack>
      <XStack ai="center" gap="$4" mb="$2">
        <H6>{i18n.t('torrentDialog.selectedLabels')}</H6>
        {labels.length > 0 && (
          <XStack>
            <Button onPress={onRemoveAll}>
              {i18n.t('torrentDialog.clearAll')}
            </Button>
          </XStack>
        )}
      </XStack>
      <ScrollView maxHeight={200}>
        <LabelsGroup labels={labels} onLabelPress={onRemoveLabel} icon={X} />
      </ScrollView>
    </YStack>
  )
}

export const LabelsSelector = ({
  labels = [],
  labelsToExlude = [],
  onLabelPress,
}) => {
  const i18n = useI18n()
  return (
    <YStack>
      <H6 mb="$2">{i18n.t('torrentDialog.allLabels')}</H6>
      {labels.length === 0 && (
        <>
          <Paragraph>{i18n.t('torrentDialog.noLabels')}</Paragraph>
          <Paragraph>{i18n.t('torrentDialog.addLabelInstruction')}</Paragraph>
        </>
      )}
      <ScrollView maxHeight={200}>
        <LabelsGroup
          labels={labels.filter((l) => !labelsToExlude.includes(l))}
          onLabelPress={onLabelPress}
          icon={Plus}
        />
      </ScrollView>
    </YStack>
  )
}

const LabelsGroup = ({ labels, icon, onLabelPress }) => {
  return (
    <XStack gap="$2" flexWrap={'wrap'}>
      {labels.map((label, index) => (
        <Label
          index={index}
          key={index}
          name={label}
          color="$gray12"
          icon={icon}
          onPress={() => onLabelPress(label)}
        />
      ))}
    </XStack>
  )
}
