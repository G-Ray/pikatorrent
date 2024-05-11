import { Tags } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Button, Separator, YStack, useMedia } from 'tamagui'

import { Dialog } from '../../reusable/Dialog'
import { useTorrents } from '../../../hooks/useTorrents'
import { useI18n } from '../../../hooks/use18n'
import { LabelsSelector, SelectedLabels } from '../../dialogs/EditLabelsDialog'

export const Filters = ({ onChangeFilters }) => {
  const i18n = useI18n()
  const media = useMedia()
  const { labels } = useTorrents()
  const [filteredLabels, setFilteredLabels] = useState<string[]>([])

  return (
    <Dialog
      title="Labels"
      trigger={
        <Button
          transparent
          bordered
          icon={Tags}
          {...(filteredLabels.length > 0 && { color: '$blue9' })}
          {...(!media.gtXs && { scaleIcon: 1.5 })}
        >
          {media.gtXs
            ? `${filteredLabels.length} ${i18n.t('torrents.filteredLabels')}`
            : ''}
        </Button>
      }
      snapPointsMode="fit"
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
