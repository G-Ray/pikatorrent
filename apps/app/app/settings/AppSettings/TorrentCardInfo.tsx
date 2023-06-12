import { Check, ChevronDown, ChevronUp, Undo } from '@tamagui/lucide-icons'
import React, { useContext } from 'react'
import {
  Button,
  Checkbox,
  Label,
  ListItem,
  XStack,
  YGroup,
  YStack,
  useMedia,
} from 'tamagui'
import { SettingsContext } from '../../../contexts/settings'
import defaultSettings from '../../../defaultSettings.json'

const torrentGetFields = [
  'addedDate',
  'comment',
  'creator',
  'doneDate',
  'eta',
  'peersConnected',
  'percentDone',
  'rateDownload',
  'rateUpload',
  'startDate',
  'status',
  'totalSize',
  'uploadRatio',
]

const moveElementInArray = (
  arr: Array<any>,
  index: number,
  direction = 'left'
) => {
  if (direction === 'left') {
    if (index === 0) return arr

    return [
      ...arr.slice(0, index - 1),
      arr[index],
      ...arr.slice(index - 1, index),
      ...arr.slice(index + 1),
    ]
  } else {
    if (index === arr.length - 1) return arr

    return [
      ...arr.slice(0, index),
      ...arr.slice(index + 1, index + 2),
      arr[index],
      ...arr.slice(index + 2),
    ]
  }
}

export const TorrentCardInfo = () => {
  const settingsContext = useContext(SettingsContext)
  const { settings, updateSettings } = settingsContext
  const torrentCardFields = settings.torrentCardFields
  const media = useMedia()

  const handleCheckedChange = (field, isChecked) => {
    updateSettings({
      ...settings,
      torrentCardFields: isChecked
        ? [...torrentCardFields.filter((f: string) => f !== field), field]
        : torrentCardFields.filter((f: string) => f !== field),
    })
  }

  const handleMoveUpField = (index: number) => {
    const updatedFields = moveElementInArray(torrentCardFields, index)
    updateSettings({ ...settings, torrentCardFields: updatedFields })
  }
  const handleMoveDownField = (index: number) => {
    const updatedFields = moveElementInArray(torrentCardFields, index, 'right')
    updateSettings({ ...settings, torrentCardFields: updatedFields })
  }

  const handleReset = () => {
    updateSettings({
      ...settings,
      torrentCardFields: defaultSettings.torrentsCardFields,
    })
  }

  const Container = media.gtXs ? DesktopLayout : MobileLayout

  return (
    <Container>
      <YStack>
        <Label>Info displayed in torrent cards</Label>
        <YGroup
          alignSelf="center"
          bordered
          size="$4"
          maxHeight={500}
          overflow="scroll"
        >
          {torrentGetFields.map((field) => (
            <YGroup.Item key={field}>
              <ListItem hoverTheme>
                <XStack alignItems="center" jc="space-between" f={1}>
                  <XStack ai="center" space="$4">
                    <Checkbox
                      id={`checkbox-${field}`}
                      checked={torrentCardFields.includes(field)}
                      onCheckedChange={(isChecked) =>
                        handleCheckedChange(field, isChecked)
                      }
                    >
                      <Checkbox.Indicator>
                        <Check />
                      </Checkbox.Indicator>
                    </Checkbox>
                    <Label htmlFor={`checkbox-${field}`} numberOfLines={1}>
                      {field}
                    </Label>
                  </XStack>
                </XStack>
              </ListItem>
            </YGroup.Item>
          ))}
        </YGroup>
      </YStack>

      <YStack>
        <Label>Display order</Label>
        <YGroup
          alignSelf="center"
          bordered
          size="$4"
          maxHeight={500}
          overflow="scroll"
        >
          {torrentCardFields.map((field, index) => (
            <YGroup.Item key={field}>
              <ListItem hoverTheme>
                <XStack alignItems="center" jc="space-between" f={1}>
                  <Label numberOfLines={1}>{field}</Label>
                  <XStack gap="$4">
                    <Button
                      onPress={() => handleMoveUpField(index)}
                      size="$2"
                      circular
                      icon={ChevronUp}
                    />
                    <Button
                      onPress={() => handleMoveDownField(index)}
                      size="$2"
                      circular
                      icon={ChevronDown}
                    />
                  </XStack>
                </XStack>
              </ListItem>
            </YGroup.Item>
          ))}
        </YGroup>
      </YStack>
      <Button icon={Undo} onPress={handleReset} alignSelf="flex-end" ml="auto">
        Reset
      </Button>
    </Container>
  )
}

const DesktopLayout = ({ children }) => {
  return (
    <XStack f={1} gap="$8" flexWrap="wrap" w="100%">
      {children}
    </XStack>
  )
}

const MobileLayout = ({ children }) => {
  return (
    <YStack f={1} w="100%" gap="$4">
      {children}
    </YStack>
  )
}
