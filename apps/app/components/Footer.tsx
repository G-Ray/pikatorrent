import React, { useContext, useEffect, useState } from 'react'
import { XStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
import { Speed } from './Speed'
import { Theme } from 'tamagui'

export const Footer = () => {
  const [stats, setStats] = useState({})
  const { sendRPCMessage } = useContext(NodeContext)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await sendRPCMessage({
          method: 'session-stats',
        })

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
    <Theme name="dark">
      <XStack
        height={32}
        bc="$background"
        ai="center"
        jc="flex-end"
        px="$4"
        gap="$8"
      >
        <Speed
          downloadSpeed={stats.downloadSpeed}
          uploadSpeed={stats.uploadSpeed}
        />
      </XStack>
    </Theme>
  )
}
