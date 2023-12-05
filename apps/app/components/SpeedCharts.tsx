import React, { useEffect, useState } from 'react'
import { VictoryArea, VictoryChart, VictoryAxis } from '../lib/victory'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import prettyBytes from 'pretty-bytes'
import { XStack, YStack, useMedia, useThemeName } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'

const measuredPoints = 60 // We keep 60 points of data

export const SpeedCharts = ({ sessionStats, refreshInterval }) => {
  const numberOfPoints = measuredPoints / (refreshInterval / 1000) + 1 // + 1 for zero
  const media = useMedia()
  const [speedPoints, setSpeedPoints] = useState({
    download: Array(numberOfPoints)
      .fill({})
      .map((v, i) => ({ x: i, y: 0 })),
    upload: Array(numberOfPoints)
      .fill({})
      .map((v, i) => ({ x: i, y: 0 })),
  })

  useEffect(() => {
    const addNewPoints = (key, points) => {
      const newPoints = [...points]

      newPoints.shift()

      return [
        ...newPoints.map((p) => ({ ...p, x: p.x - 1 })),
        { x: newPoints.length, y: sessionStats[key] || 0 },
      ]
    }

    setSpeedPoints((points: any) => {
      return {
        download: addNewPoints('downloadSpeed', points.download),
        upload: addNewPoints('uploadSpeed', points.upload),
      }
    })
  }, [sessionStats])

  const Container = media.gtXs ? XStack : YStack

  return (
    <Container my="$8">
      <YStack ai="center" f={1}>
        <SpeedChart
          name="downloadSpeed"
          data={speedPoints.download}
          color={'#0081f1'}
          refreshInterva={refreshInterval}
        />
        <TorrentFieldFormatter
          fontSize={'$6'}
          iconSize="$2"
          name="rateDownload"
          value={sessionStats.downloadSpeed || 0}
        />
      </YStack>
      <YStack ai="center" f={1}>
        <SpeedChart
          name="uploadSpeed"
          data={speedPoints.upload}
          color={'#299764'}
          refreshInterval={refreshInterval}
        />
        <TorrentFieldFormatter
          fontSize={'$6'}
          iconSize="$2"
          name="rateUpload"
          value={sessionStats.uploadSpeed || 0}
        />
      </YStack>
    </Container>
  )
}

const SpeedChart = ({ name, data, color, refreshInterval }) => {
  const theme = useThemeName()

  return (
    <VictoryChart
      domain={{
        x: [0, data.length - 1],
        y: [0, Math.max(...data.map((v) => v.y)) || 1_000_000],
      }}
      padding={{ top: 40, bottom: 80, left: 80, right: 40 }}
    >
      <Defs>
        <LinearGradient id={`${name}-gradient`}>
          <Stop
            offset="0%"
            stopColor={theme.startsWith('light') ? 'white' : 'black'}
          />
          <Stop offset="100%" stopColor={color} />
        </LinearGradient>
      </Defs>
      <VictoryAxis
        label="Time (s)"
        crossAxis={false}
        tickFormat={(t) =>
          `${Math.abs(measuredPoints - (t * refreshInterval) / 1000)}`
        }
        style={{
          axisLabel: {
            fontFamily: 'Inter',
            fill: theme.startsWith('light') ? '#171717' : 'white',
          },
          tickLabels: {
            fontFamily: 'Inter',
            fill: theme.startsWith('light') ? '#171717' : 'white',
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        crossAxis={false}
        tickFormat={(t) => `${prettyBytes(t)}/s`}
        style={{
          axis: { stroke: 'none' },
          tickLabels: {
            fontFamily: 'Inter',
            fill: theme.startsWith('light') ? '#171717' : 'white',
          },
          grid: { stroke: theme.startsWith('light') ? '#171717' : 'white' },
        }}
      />
      <VictoryArea
        data={data}
        style={{
          data: {
            fill: `url(#${name}-gradient)`,
            fillOpacity: 0.5,
            strokeWidth: 2,
            stroke: color,
          },
        }}
        interpolation={'monotoneX'}
      />
    </VictoryChart>
  )
}
