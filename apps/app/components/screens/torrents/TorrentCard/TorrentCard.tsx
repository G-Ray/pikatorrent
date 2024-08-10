import React, { useState } from 'react'
import { PauseCircle, PlayCircle } from '@tamagui/lucide-icons'
import {
  Button,
  Card,
  H6,
  Progress,
  ScrollView,
  Stack,
  Theme,
  XStack,
  useMedia,
} from 'tamagui'
import isElectron from 'is-electron'
import { TORRENT_STATUSES } from '../../../../constants/torrents'
import { useTorrents } from '../../../../hooks/useTorrents'
import { Label } from '../../../reusable/Label'
import { TorrentActions } from './TorrentActions'
import { TorrentInfo } from './TorrentInfo'

export const TorrentCard = ({ torrent, theme = 'yellow' }) => {
  const media = useMedia()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { start, pause } = useTorrents()

  const handleOpenFolder = () => {
    if (isElectron()) {
      window.electronAPI.openFolder(torrent.downloadDir, torrent.name)
    }
  }

  return (
    <>
      <TorrentActions
        torrent={torrent}
        handleOpenFolder={handleOpenFolder}
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
      />
      <Card
        transparent
        bordered={media.gtXs ? true : 0}
        p="$2"
        key={torrent.id}
        hoverStyle={{ cursor: 'pointer', backgroundColor: '$background' }}
        onPress={() => {
          setIsMenuOpen(true)
        }}
      >
        <XStack ai="center" gap="$2">
          <XStack>
            {TORRENT_STATUSES[torrent.status] === TORRENT_STATUSES[0] ? (
              <Button
                onPress={(e) => {
                  e.stopPropagation()
                  start(torrent.id)
                }}
                icon={PlayCircle}
                scaleIcon={2}
                circular
              />
            ) : (
              <Button
                onPress={(e) => {
                  e.stopPropagation()
                  pause(torrent.id)
                }}
                icon={PauseCircle}
                scaleIcon={2}
                circular
              />
            )}
          </XStack>

          <Stack f={1}>
            <XStack>
              <H6 numberOfLines={1}>{torrent.name}</H6>
            </XStack>
            <Theme name="yellow">
              <Progress
                mb="$2"
                value={Math.floor(torrent.percentDone * 100)}
                borderColor={`$${theme}7`}
                bordered
                size="$2"
              >
                <Progress.Indicator backgroundColor={`$${theme}9`} />
              </Progress>
            </Theme>
            <XStack jc="space-between">
              <TorrentInfo torrent={torrent} />
              <ScrollView
                ml="$2"
                horizontal
                contentContainerStyle={{
                  flexGrow: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
              >
                <XStack gap={media.gtXs ? '$2' : '$1'}>
                  {torrent.labels.map((label, index) => (
                    <Label key={index} name={label}></Label>
                  ))}
                </XStack>
              </ScrollView>
            </XStack>
          </Stack>
        </XStack>
      </Card>
      {/* <Separator /> */}
    </>
  )
}
