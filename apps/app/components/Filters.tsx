import { Filter } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Button, Separator, YStack, useMedia, useThemeName } from 'tamagui'
import { Dialog } from '../dialogs/Dialog'
import { useTorrents } from '../hooks/useTorrents'
import { LabelsSelector, SelectedLabels } from '../dialogs/EditLabelsDialog'

export const Filters = ({ onChangeFilters }) => {
  const media = useMedia()
  const theme = useThemeName()
  const { labels } = useTorrents()
  const [filteredLabels, setFilteredLabels] = useState<string[]>([])

  return (
    <Dialog
      title="Filters"
      trigger={
        <Button
          icon={Filter}
          elevate
          bc={theme === 'dark' ? 'black' : 'white'}
          br={50}
          {...(filteredLabels.length > 0 && { color: '$blue9' })}
          circular={!media.gtXs}
        >
          {media.gtXs ? `${filteredLabels.length} Filters` : ''}
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
