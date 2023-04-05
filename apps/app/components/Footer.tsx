import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import prettyBytes from 'pretty-bytes'
import React, { useContext, useEffect, useState } from 'react'
import { Paragraph, XStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
import { Speed } from './Speed'

export const Footer = () => {
  const [stats, setStats] = useState({})
  const { sendRPCMessage } = useContext(NodeContext)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await sendRPCMessage({
          method: 'session-stats',
        })
        console.log('response', response.payload)

        setStats(response.payload.arguments)
      } catch (e) {
        console.log('error fetching session info', e)
      }
    }

    const interval = setInterval(() => {
      fetchStats()
    }, 5000)

    return () => clearInterval(interval)
  }, [sendRPCMessage])

  return (
    <XStack
      height={32}
      bc="$background"
      theme="dark"
      ai="center"
      jc="flex-end"
      px="$4"
      gap="$8"
    >
      <Speed
        downloadSpeed={stats.downloadSpeed}
        uploadSpeed={stats.uploadSpeed}
        theme="dark"
      />
    </XStack>
  )
}
