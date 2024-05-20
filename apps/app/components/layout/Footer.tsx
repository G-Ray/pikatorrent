import React, { useContext, useEffect, useState } from 'react'
import { Separator, XStack } from 'tamagui'
import { NodeContext } from '../../contexts/NodeContext'
import { Speed } from '../reusable/Speed'

export const Footer = () => {
  const [stats, setStats] = useState({})
  const { sendRPCMessage } = useContext(NodeContext)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await sendRPCMessage({
          method: 'session-stats',
        })

        setStats(response.arguments)
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
    <>
      <Separator />
      <XStack height={32} ai="center" jc="flex-end" px="$4" gap="$8">
        <Speed
          downloadSpeed={stats.downloadSpeed}
          uploadSpeed={stats.uploadSpeed}
        />
      </XStack>
    </>
  )
}
