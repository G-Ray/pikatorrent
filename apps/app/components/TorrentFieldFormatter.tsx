import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React from 'react'
import { Paragraph, XStack } from 'tamagui'
import prettyMilliseconds from 'pretty-ms'
import { STATUSES } from './TorrentCard'
import prettyBytes from 'pretty-bytes'

type TorrentFieldFormatterProps = {
  name: string
  value: any
}

export const TorrentFieldFormatter = ({
  name,
  value,
}: TorrentFieldFormatterProps) => {
  let formattedValue: string | React.ReactNode

  if (name === 'status') {
    formattedValue = STATUSES[value]
  } else if (name.includes('Size') || name.includes('size')) {
    // Bytes
    formattedValue = prettyBytes(value)
  } else if (name === 'eta') {
    formattedValue = value < 0 ? '-' : prettyMilliseconds(value * 1000)
  } else if (['rateDownload', 'rateUpload'].includes(name)) {
    formattedValue = (
      <XStack>
        {name.includes('Download') ? (
          <ChevronDown color="$purple9" />
        ) : (
          <ChevronUp color="$blue9" />
        )}
        <Paragraph fontWeight="bold">{prettyBytes(value)}/s</Paragraph>
      </XStack>
    )
    // Percent
  } else if (name.includes('percentDone')) {
    formattedValue = `${Math.round(value * 100)} %`
  } else if (
    // Dates
    name.includes('Date')
  ) {
    formattedValue =
      value <= 0 ? '-' : new Intl.DateTimeFormat('default').format(value * 1000)
  } else if (['uploadLimit', 'downloadLimit'].includes(name)) {
    // value is in KBps
    formattedValue = `${prettyBytes(value * 1000)} / s`
  } else {
    formattedValue = typeof value === 'string' ? value : JSON.stringify(value) // fallback
  }

  return <Paragraph fontWeight="bold">{formattedValue}</Paragraph>
}
