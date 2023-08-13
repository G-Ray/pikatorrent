import { Tags } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Button, Separator, YStack, useMedia, useThemeName } from 'tamagui'
import { Dialog } from '../dialogs/Dialog'
import { useTorrents } from '../hooks/useTorrents'
import { LabelsSelector, SelectedLabels } from '../dialogs/EditLabelsDialog'
import { SettingsContext } from '../contexts/SettingsContext'

export const Filters = ({ onChangeFilters }) => {
  const media = useMedia()
  const { settings } = useContext(SettingsContext)
  const { labels } = useTorrents()
  const [filteredLabels, setFilteredLabels] = useState<string[]>([])

  return (
    <Dialog
      title="Labels"
      trigger={
        <Button
          icon={Tags}
          bc={settings.theme === 'light' ? 'white' : 'black'}
          {...(filteredLabels.length > 0 && { color: '$blue9' })}
          borderRadius={0}
        >
          {media.gtXs ? `${filteredLabels.length} Filtered tags` : ''}
        </Button>
      }
    >
      <YStack w={360} gap="$4">
        <LabelsSelector
          labels={labels}
          labelsToExlude={filteredLabels}
          onLabelPress={(l: string) => {
            const newFilters = [...filteredLabels, l]
            setFilteredLabels(newFilters)
            onChangeFilters(newFilters)
          }}
        />
        <Separator />

        <SelectedLabels
          labels={filteredLabels}
          onRemoveLabel={(l: string) => {
            const newFilters = filteredLabels.filter((label) => l !== label)
            setFilteredLabels(newFilters)
            onChangeFilters(newFilters)
          }}
          onRemoveAll={() => {
            setFilteredLabels([])
            onChangeFilters([])
          }}
        />
      </YStack>
    </Dialog>
  )
}
