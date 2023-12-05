import React from 'react'
import {
  Button,
  Card,
  H6,
  Image,
  Paragraph,
  ScrollView,
  XStack,
  YStack,
  useMedia,
  useThemeName,
} from 'tamagui'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { Download } from '@tamagui/lucide-icons'
import { Link } from 'expo-router'
import { TorrentFieldFormatter } from '../components/TorrentFieldFormatter'
import { library } from '../lib/library'
import i18n from '../i18n'

export default function Library() {
  const media = useMedia()
  const theme = useThemeName()

  return (
    <ScrollView>
      <YStack
        gap="$4"
        mb="$8"
        px={media.gtXs ? '$8' : '$2'}
        {...(media.gtXs && {
          w: DESKTOP_MAX_CONTENT_WIDTH,
          alignSelf: 'center',
        })}
      >
        {library.map((t, index) => (
          <Card key={index} p="$2" bc={theme === 'light' ? 'white' : 'black'}>
            <XStack gap="$4" jc="space-between" f={1} w="100%" mb="$2">
              <XStack gap="$4" f={1}>
                <Image
                  alignSelf="center"
                  source={{
                    width: 96,
                    height: 96,
                    uri: t.image,
                  }}
                />
                <YStack f={1}>
                  <H6 numberOfLines={1}>{t.title}</H6>
                  <TorrentFieldFormatter name="totalSize" value={t.size} />
                  <Paragraph fontSize={'$2'}>{t.type}</Paragraph>
                  <Paragraph numberOfLines={3} fontSize={'$2'} color="$gray11">
                    {t.description}
                  </Paragraph>
                </YStack>
              </XStack>
            </XStack>
            <Link href={t.url} asChild>
              <Button
                {...(!media.gtXs && { w: '100%' })}
                alignSelf="center"
                bc={theme.startsWith('light') ? 'white' : 'black'}
                theme="yellow"
                hoverTheme
                borderColor={'$yellow7'}
                icon={Download}
              >
                {i18n.t('library.download')}
              </Button>
            </Link>
          </Card>
        ))}
        <Paragraph alignSelf="center">{i18n.t('library.moreToCome')}</Paragraph>
      </YStack>
    </ScrollView>
  )
}
