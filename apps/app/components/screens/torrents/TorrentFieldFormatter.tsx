import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React from 'react'
import { Paragraph, XStack } from 'tamagui'
import prettyMilliseconds from 'pretty-ms'
import prettyBytes from 'pretty-bytes'
import { TORRENT_STATUSES } from '../../../constants/torrents'

type TorrentFieldFormatterProps = {
  name: string
  value: any
  props: any
  iconSize: string
}

export const TorrentFieldFormatter = ({
  name,
  value,
  iconSize,
  ...props
}: TorrentFieldFormatterProps) => {
  let formattedValue: string | React.ReactNode
  let color

  if (name === 'errorString') {
    formattedValue = value
    color = '$red9'
  } else if (name === 'status') {
    formattedValue = TORRENT_STATUSES[value]
    if (formattedValue === 'Seeding') {
      color = '$green9'
    }

    if (formattedValue === 'Downloading') {
      color = '$blue9'
    }
  } else if (name.includes('Size') || name.includes('size')) {
    // Bytes
    formattedValue = prettyBytes(value)
  } else if (name === 'eta') {
    if (!value || value < 0) {
      formattedValue = '-'
    } else {
      formattedValue = prettyMilliseconds(value * 1000)
    }
  } else if (['rateDownload', 'rateUpload'].includes(name)) {
    return (
      <XStack ai="center">
        {name.includes('Download') ? (
          <ChevronDown color="$blue9" size={iconSize || '$1'} />
        ) : (
          <ChevronUp color="$green9" size={iconSize || '$1'} />
        )}
        <Paragraph fontSize={'$2'} {...props}>
          {prettyBytes(value)}/s
        </Paragraph>
      </XStack>
    )

    // Percent
  } else if (name.includes('percentDone')) {
    formattedValue = `${Math.floor(value * 100)} %`
  } else if (
    // Dates
    name.includes('Date')
  ) {
    if (value === undefined || value <= 0) {
      formattedValue = '-'
    } else {
      formattedValue = new Intl.DateTimeFormat('default').format(value * 1000)
    }
  } else if (['uploadLimit', 'downloadLimit'].includes(name)) {
    // value is in KBps
    formattedValue = `${prettyBytes(value * 1000)} / s`
  } else {
    formattedValue = typeof value === 'string' ? value : JSON.stringify(value) // fallback
  }

  return (
    <Paragraph {...(color ? { color } : {})} fontSize={'$2'} {...props}>
      {formattedValue}
    </Paragraph>
  )
}
