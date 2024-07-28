import React from 'react'
import { Info } from '@tamagui/lucide-icons'
import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { format } from 'date-fns'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

import { Dialog } from '../reusable/Dialog'
import { useI18n } from '../../hooks/use18n'
import { getDateFnsLocale, Locale } from '../../i18n'

export const DetailsDialog = ({ torrent }) => {
  const i18n = useI18n()

  const addedDate = new Date(torrent.addedDate * 1000)

  return (
    <Dialog
      title={i18n.t('detailsDialog.title')}
      snapPoints={[90]}
      trigger={<Button icon={Info}>{i18n.t('torrentDialog.details')}</Button>}
    >
      <YStack gap="$4" pt="$8">
        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.torrentSize')}</Paragraph>
          <Paragraph id="pieces">{`${prettyBytes(torrent.totalSize)} in ${torrent.files.length} ${i18n.t('detailsDialog.files')} (${torrent.pieceCount} pieces of ${prettyBytes(torrent.pieceSize)} each)`}</Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.uploaded')}</Paragraph>
          <Paragraph id="pieces">{`${prettyBytes(torrent.uploadedEver)} (Ratio: ${torrent.uploadRatio.toFixed(2)})`}</Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.downloaded')}</Paragraph>
          <Paragraph id="pieces">
            {prettyBytes(torrent.downloadedEver)}
          </Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.addedDate')}</Paragraph>
          <Paragraph id="pieces">
            {format(addedDate, 'Pp', {
              locale: getDateFnsLocale(i18n.locale as Locale),
            })}
          </Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.remainingTime')}</Paragraph>
          <Paragraph id="pieces">
            {torrent.eta > 0 ? prettyMilliseconds(torrent.eta * 1000) : '-'}
          </Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.privacy')}</Paragraph>
          <Paragraph id="pieces">
            {torrent.isPrivate
              ? i18n.t('detailsDialog.private')
              : i18n.t('detailsDialog.public')}
          </Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.error')}</Paragraph>
          <Paragraph id="pieces">
            {torrent.errorString.length > 0 ? torrent.errorString : '-'}
          </Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.creator')}</Paragraph>
          <Paragraph id="pieces">{torrent.creator}</Paragraph>
        </XStack>

        <XStack jc="space-between" gap="$16">
          <Paragraph>{i18n.t('detailsDialog.comment')}</Paragraph>
          <Paragraph id="pieces">{torrent.comment}</Paragraph>
        </XStack>
      </YStack>
    </Dialog>
  )
}
