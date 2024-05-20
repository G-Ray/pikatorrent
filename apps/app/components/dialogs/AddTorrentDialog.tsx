import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import {
  Button,
  Fieldset,
  H6,
  Input,
  Paragraph,
  Separator,
  XStack,
  YStack,
  useThemeName,
} from 'tamagui'
import prettyBytes from 'pretty-bytes'
import { Platform } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { Link, useLocalSearchParams, usePathname, useRouter } from 'expo-router'
import { useURL } from 'expo-linking'
import isElectron from 'is-electron'
import { ExternalLink, File } from '@tamagui/lucide-icons'
import { H5 } from 'tamagui'

import { NodeContext } from '../../contexts/NodeContext'
import { Dialog } from '../reusable/Dialog'
import { openExternalLink } from '../../lib/links'
import { useI18n } from '../../hooks/use18n'

function readFileToBase64(document: DocumentPicker.DocumentResult) {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'web') {
      const reader = new FileReader()
      reader.readAsDataURL(document.file)
      reader.onload = () =>
        resolve(
          reader.result?.slice('data:application/x-bittorrent;base64,'.length)
        )
      reader.onerror = reject
    } else {
      FileSystem.readAsStringAsync(document.uri, { encoding: 'base64' })
        .then(resolve)
        .catch(reject)
    }
  })
}

export const AddTorrentDialog = () => {
  const i18n = useI18n()
  const [magnet, setMagnet] = useState<string>('')
  const [torrentFilePath, setTorrentFilePath] = useState<string | null>(null)
  const [documentResult, setDocumentResult] =
    useState<DocumentPicker.DocumentResult | null>(null)
  const { sendRPCMessage } = useContext(NodeContext)
  const localSearchParams = useLocalSearchParams()
  const router = useRouter()
  const url = useURL()
  const node = useContext(NodeContext)

  useEffect(() => {
    if (!url) return

    // Web links, hash are supported
    if (url.includes('#')) {
      const afterHash = url.split('#')[1]
      if (
        afterHash &&
        (/^magnet:/.test(afterHash) || /^https:/.test(afterHash))
      ) {
        setMagnet(decodeURIComponent(afterHash))
        setTorrentFilePath(null)
      }
    }
  }, [url])

  useEffect(() => {
    if (Platform.OS === 'web' && !isElectron()) {
      return
    }

    // Handle magnet links on Android & electron
    // hash in routes are not supported yet
    if (
      localSearchParams.magnet &&
      typeof localSearchParams.magnet === 'string'
    ) {
      setMagnet(decodeURIComponent(localSearchParams.magnet))
      setTorrentFilePath(null)
      setDocumentResult(null)
    } else if (
      localSearchParams.file &&
      typeof localSearchParams.file === 'string'
    ) {
      setTorrentFilePath(localSearchParams.file)
      setMagnet('')
      setDocumentResult(null)
    }
  }, [localSearchParams])

  const handleAddTorrent = async () => {
    try {
      let torrentAddArgs

      if (documentResult) {
        // Document from file picker
        torrentAddArgs = {
          metainfo: await readFileToBase64(documentResult),
        }
      } else if (magnet) {
        // Magnet
        torrentAddArgs = {
          filename: magnet,
        }
      } else if (torrentFilePath) {
        const content = await window.electronAPI.readFileAsBase64(
          torrentFilePath
        )
        torrentAddArgs = {
          metainfo: content,
        }
      }

      await sendRPCMessage({
        method: 'torrent-add',
        arguments: torrentAddArgs,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const handleSelectTorrentFile = async () => {
    // FIXME: handle rejection
    const documentResult = await DocumentPicker.getDocumentAsync({
      type: ['application/x-bittorrent', '.torrent'],
    })

    if (documentResult.canceled || documentResult.assets.length === 0) return

    setDocumentResult(documentResult.assets[0])
    setTorrentFilePath(null)
    setMagnet('')
  }

  return (
    <Dialog
      onOpenChange={() => {
        router.push('/')
        // TODO: wait for animation duration to finish
      }}
      defaultOpen
      title={i18n.t('addTorrentDialog.title')}
      snapPointsMode="fit"
    >
      <OpenInApp node={node} magnet={magnet} />

      {node?.isConnected && (
        <YStack gap="$2">
          {Platform.OS === 'web' && !isElectron() && (
            <>
              <Separator />
              <Paragraph>
                {i18n.t('addTorrentDialog.sendToNode')} {node.name}:
              </Paragraph>
            </>
          )}
          <Fieldset horizontal gap="$4">
            <Input
              f={1}
              placeholder={i18n.t(
                'addTorrentDialog.torrentOrMagnetLinkPlaceholder'
              )}
              value={magnet}
              onChangeText={setMagnet}
              borderColor={'$yellow7'}
            />
          </Fieldset>
          <Paragraph fontWeight="bold" mx="auto">
            Or
          </Paragraph>

          <Fieldset gap="$4">
            <Button
              theme="yellow"
              borderColor={'$yellow7'}
              onPress={handleSelectTorrentFile}
              icon={File}
            >
              {i18n.t('addTorrentDialog.selectFile')}
            </Button>
            {documentResult && <Paragraph>{documentResult.name}</Paragraph>}
            {torrentFilePath && <Paragraph>{torrentFilePath}</Paragraph>}
          </Fieldset>

          <YStack ai="flex-end" mt={'$4'}>
            <Dialog.Close displayWhenAdapted asChild>
              <Button
                theme="yellow"
                borderColor={'$yellow7'}
                aria-label="Close"
                disabled={
                  magnet === '' &&
                  torrentFilePath === null &&
                  documentResult === null
                }
                o={
                  magnet === '' &&
                  torrentFilePath === null &&
                  documentResult === null
                    ? 0.5
                    : 1
                }
                onPress={handleAddTorrent}
              >
                {i18n.t('addTorrentDialog.add')}
              </Button>
            </Dialog.Close>
          </YStack>
        </YStack>
      )}
    </Dialog>
  )
}

const OpenInApp = ({ node, magnet }) => {
  const pathname = usePathname()
  const searchParams = useLocalSearchParams()
  const theme = useThemeName()

  if (Platform.OS !== 'web' || isElectron()) {
    return null
  }

  // Beware when accessing window.location, as it seems defined
  // in expo in dev mode, but not in production
  const isFromDeepLink =
    Object.keys(searchParams).length > 0 ||
    (window.location.hash && window.location.hash.length > 1)

  const handleOpenInApp = () => {
    window.location.replace(`pikatorrent:${pathname}${window.location.hash}`)
  }

  if (!isFromDeepLink) {
    return null
  }

  let name, xl
  try {
    const searchParams = new URL(magnet).searchParams
    name = searchParams.get('dn')
    xl = searchParams.get('xl')
      ? parseInt(searchParams.get('xl') || '')
      : undefined
  } catch (e) {}

  return (
    <YStack>
      {name && (
        <H5 textAlign="center" numberOfLines={1} mb="$4">
          {name}
        </H5>
      )}
      {xl && (
        <Paragraph textAlign="center" numberOfLines={1} mb="$4">
          {prettyBytes(xl)}
        </Paragraph>
      )}
      <Button
        onPress={handleOpenInApp}
        theme="yellow"
        borderColor={'$yellow7'}
        mb="$4"
        icon={ExternalLink}
      >
        Open in app
      </Button>
      <Separator />
      <H6 my="$4" textAlign="center">{`Don't have the app yet ?`}</H6>
      <YStack ai="center" gap="$4">
        <XStack space>
          <YStack>
            <Paragraph textAlign="center">Windows</Paragraph>
            <Link href="https://apps.microsoft.com/store/detail/9N9GJQ9BDJW3?launch=true&mode=mini">
              <img
                height={48}
                alt="Download on Windows Store"
                src={
                  theme === 'dark'
                    ? 'https://get.microsoft.com/images/en-US%20light.svg'
                    : 'https://get.microsoft.com/images/en-US%20dark.svg'
                }
              />
            </Link>
          </YStack>
          <YStack>
            <Paragraph textAlign="center">Linux</Paragraph>
            <Link href="https://flathub.org/apps/com.pikatorrent.PikaTorrent">
              <img
                height={48}
                alt="Download on Flathub"
                src={
                  theme === 'dark'
                    ? 'https://dl.flathub.org/assets/badges/flathub-badge-i-en.png'
                    : 'https://dl.flathub.org/assets/badges/flathub-badge-en.png'
                }
              />
            </Link>
          </YStack>
        </XStack>
        <YStack>
          <Paragraph textAlign="center">Android</Paragraph>
          <Link href="https://play.google.com/store/apps/details?id=com.gray.pikatorrent&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              height={72}
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </Link>
        </YStack>
      </YStack>

      <Button
        size="$2"
        icon={ExternalLink}
        onPress={() => {
          openExternalLink('https://github.com/G-Ray/pikatorrent/releases')
        }}
      >
        Alternative downloads (.zip, .exe, etc...)
      </Button>

      {node.isConnected && Platform.OS === 'web' && !isElectron() && (
        <Separator />
      )}
    </YStack>
  )
}
