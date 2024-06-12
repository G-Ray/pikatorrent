import React from 'react'
import { ArrowBigDown, ArrowBigUp } from '@tamagui/lucide-icons'
import { Card, H4, Paragraph, YStack, useMedia } from 'tamagui'
import { useI18n } from '../../../../hooks/use18n'

export const TorrentCardPlaceHolder = () => {
  const i18n = useI18n()
  const media = useMedia()

  return (
    <Card w="100%" bordered height={160} borderStyle="dashed" borderWidth="$1">
      <Card.Header w="100%">
        <YStack ai="center" jc="center">
          {media.gtXs ? (
            <ArrowBigUp size={'$4'} />
          ) : (
            <ArrowBigDown size={'$4'} />
          )}
          <H4 numberOfLines={1} fontWeight="bold">
            {i18n.t('torrents.addYourFirstTorrentTitle')}
          </H4>
          <Paragraph>
            {i18n.t('torrents.addYourFirstTorrentDescription')}
          </Paragraph>
        </YStack>
      </Card.Header>
    </Card>
  )
}
