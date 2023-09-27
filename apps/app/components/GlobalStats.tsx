import React, { useContext, useEffect, useState } from 'react'
import { Card, View, XStack, useMedia, useThemeName } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { TorrentsContext } from '../contexts/TorrentsContext'
import { StyleSheet } from 'react-native'
import {
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryGroup,
} from 'victory-native'
import { Defs, LinearGradient, Stop, Svg } from 'react-native-svg'

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 },
]

const data2 = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
  { x: 4, y: 3 },
  { x: 5, y: 3 },
]

export const GlobalStats = () => {
  const { sessionStats } = useContext(TorrentsContext)
  // const media = useMedia()
  // const theme = useThemeName()
  const [downloadSpeedPoints, setDownloadSpeedPoints] = useState([])
  const [uploadSpeedPoints, setUploadSpeedPoints] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadSpeedPoints((points: any[]) => {
        const newPoints = [...points]

        if (newPoints.length - 1 > 10) {
          newPoints.shift()

          return [
            ...newPoints.map((p) => ({ ...p, x: p.x - 1 })),
            { x: newPoints.length - 1, y: sessionStats.downloadSpeed },
          ]
        } else {
          return [
            ...points,
            { x: points.length, y: sessionStats.downloadSpeed },
          ]
        }
      })

      setUploadSpeedPoints((points: any[]) => {
        const newPoints = [...points]

        if (newPoints.length - 1 > 10) {
          newPoints.shift()

          return [
            ...newPoints.map((p) => ({ ...p, x: p.x - 1 })),
            { x: newPoints.length - 1, y: sessionStats.uploadSpeed },
          ]
        } else {
          return [...points, { x: points.length, y: sessionStats.uploadSpeed }]
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [sessionStats.downloadSpeed])

  // console.log('downloadSpeedPoints', downloadSpeedPoints)

  return (
    <Card bordered bc="white" w={300}>
      {/* <Svg style={{ height: 0 }}>
        <Defs>
          <LinearGradient id="downloadGradient">
            <Stop offset="0%" stopColor="white" />
            <Stop offset="100%" stopColor="#0081f1" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Svg style={{ height: 0 }}>
        <Defs>
          <LinearGradient id="uploadGradient">
            <Stop offset="0%" stopColor="white" />
            <Stop offset="100%" stopColor="#299764" />
          </LinearGradient>
        </Defs>
      </Svg> */}
      <VictoryGroup
        theme={VictoryTheme.material}
        padding={12}
        // style={{ parent: { flex: 1 } }}
        // animate={{
        //   duration: 2000,
        //   onLoad: { duration: 1000 },
        // }}
      >
        <VictoryArea
          style={{
            data: {
              fill: 'white',
              // fill: 'url(#downloadGradient)',
              strokeWidth: 12,
              stroke: '#0081f1',
            },
          }}
          data={data}
          interpolation={'natural'}
        />
        <VictoryArea
          style={{
            data: {
              fill: 'white',
              // fill: 'url(#uploadGradient)',
              strokeWidth: 12,
              stroke: '#299764',
            },
          }}
          data={data2}
          interpolation={'natural'}
        />
      </VictoryGroup>
    </Card>
  )
}
