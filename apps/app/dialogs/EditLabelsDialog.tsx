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
import { Dialog } from './Dialog'
import { Label } from '../components/Label'
import { YStack } from 'tamagui'
import i18n from '../i18n'

export const EditLabelsDialog = ({ torrentsFunctions, torrent }) => {
  const [label, setLabel] = useState('')
  const [labels, setLabels] = useState<string[]>(torrent.labels)

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

  return (
    <Dialog
      title="Labels"
      trigger={<Button icon={Tag}>{i18n.t('torrentDialog.editLabels')}</Button>}
      snapPoints={[50]}
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
          onRemoveAll={() => setLabels([])}
        />

        <Form onSubmit={handleAddLabelSubmit}>
          <XStack alignItems="center" space="$4">
            <TamaguiLabel width={90} htmlFor="label" numberOfLines={1}>
              New label
            </TamaguiLabel>
            <Input flex={1} id="label" onChangeText={setLabel} value={label} />

            <Form.Trigger asChild>
              <Button theme="yellow">Add</Button>
            </Form.Trigger>
          </XStack>
        </Form>
      </YStack>
    </Dialog>
  )
}

export const SelectedLabels = ({ labels, onRemoveLabel, onRemoveAll }) => {
  return (
    <YStack>
      <XStack ai="center" gap="$4" mb="$2">
        <H6>Selected labels</H6>
        {labels.length > 0 && (
          <XStack>
            <Button onPress={onRemoveAll}>Clear all</Button>
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
  return (
    <YStack>
      <H6 mb="$2">All labels</H6>
      {labels.length === 0 && (
        <>
          <Paragraph>There is no labels yet.</Paragraph>
          <Paragraph>Add labels by editing a torrent.</Paragraph>
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
