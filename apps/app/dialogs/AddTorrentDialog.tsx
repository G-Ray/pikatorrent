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
} from 'tamagui'
import { NodeContext } from '../contexts/NodeContext'
import { Platform } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { Dialog } from './Dialog'
import { Link, useLocalSearchParams, usePathname, useRouter } from 'expo-router'
import { useURL } from 'expo-linking'
import isElectron from 'is-electron'
import { Download, ExternalLink } from '@tamagui/lucide-icons'
import { openExternalLink } from '../lib/links'

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
      // snapPoints={[42]}
      defaultOpen
      title="Add a torrent"
    >
      <OpenInApp node={node} magnet={magnet} />

      {node?.isConnected && (
        <YStack gap="$2">
          {Platform.OS === 'web' && !isElectron() && (
            <Paragraph>Send this torrent to {node.name}:</Paragraph>
          )}
          <Fieldset horizontal gap="$4">
            <Input
              f={1}
              id="torrent-uri"
              placeholder="torrent or magnet:// links"
              value={magnet}
              onChangeText={setMagnet}
            />
          </Fieldset>
          <Paragraph fontWeight="bold" mx="auto">
            Or
          </Paragraph>

          <Fieldset gap="$4">
            <Button
              theme="yellow"
              onPress={handleSelectTorrentFile}
              borderColor={'$yellow9'}
            >
              Select a .torrent file
            </Button>
            {documentResult && <Paragraph>{documentResult.name}</Paragraph>}
            {torrentFilePath && <Paragraph>{torrentFilePath}</Paragraph>}
          </Fieldset>

          <YStack ai="flex-end" mt={'$4'}>
            <Dialog.Close displayWhenAdapted asChild>
              <Button
                theme="yellow"
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
                borderColor={'$yellow9'}
                onPress={handleAddTorrent}
              >
                Add
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

  let name
  try {
    name = new URL(magnet).searchParams.get('dn')
  } catch (e) {}

  return (
    <YStack>
      {name && (
        <H6 textAlign="center" numberOfLines={1} mb="$4">
          {name}
        </H6>
      )}
      <Button
        onPress={handleOpenInApp}
        theme="yellow"
        mb="$4"
        icon={ExternalLink}
        borderColor={'$yellow9'}
      >
        Open in app
      </Button>
      <Separator />
      <Paragraph my="$4">{`Don't have the app yet ?`}</Paragraph>
      <XStack space>
        <Link
          href={
            'https://github.com/G-Ray/pikatorrent/releases/download/v0.5.0/pikatorrent-0.5.0.Setup.exe'
          }
          style={{ textDecoration: 'none' }}
        >
          <Button theme="yellow" icon={Download} borderColor={'$yellow9'}>
            Windows
          </Button>
        </Link>
        <Link
          href={
            'https://github.com/G-Ray/pikatorrent/releases/download/v0.5.0/pikatorrent-linux-x64-0.5.0.zip'
          }
          style={{ textDecoration: 'none' }}
        >
          <Button theme="yellow" icon={Download} borderColor={'$yellow9'}>
            Linux
          </Button>
        </Link>
      </XStack>
      <XStack jc="center">
        <Link href="https://play.google.com/store/apps/details?id=com.gray.pikatorrent">
          <img
            width={180}
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </Link>
      </XStack>
      <Button
        ml="$2"
        mb="$6"
        size="$2"
        icon={ExternalLink}
        onPress={() => {
          openExternalLink('https://github.com/G-Ray/pikatorrent/releases')
        }}
      >
        All downloads options
      </Button>
      {node.isConnected && Platform.OS === 'web' && !isElectron() && (
        <Separator />
      )}
    </YStack>
  )
}
