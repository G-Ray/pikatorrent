import React, { useRef } from 'react'
import { useContext, useEffect, useState } from 'react'
import {
  Button,
  H2,
  Input,
  Paragraph,
  Switch,
  XStack,
  YStack,
  useMedia,
} from 'tamagui'

import { NodeContext } from '../../contexts/NodeContext'
import { useSession } from '../../hooks/useSession'
import { Folder } from '@tamagui/lucide-icons'
import { SettingLayout } from '../../components/SettingLayout'
import isElectron from 'is-electron'
import i18n from '../../i18n'
import { Select } from '../../components/reusable/Select'

export const Torrents = () => {
  const { sendRPCMessage, isConnected } = useContext(NodeContext)
  const { session: initialSession, fetchSession } = useSession()
  const [session, setSession] = useState({})
  const media = useMedia()

  useEffect(() => {
    setSession(initialSession)
  }, [initialSession])

  const hasChanged = JSON.stringify(session) !== JSON.stringify(initialSession)

  const handleSubmit = async () => {
    try {
      await sendRPCMessage({
        method: 'session-set',
        arguments: {
          'download-dir': session['download-dir'],
          encryption: session.encryption,
          'utp-enabled': session['utp-enabled'],
        },
      })

      fetchSession()
    } catch (e) {
      console.log('error updating session info', e)
    }
  }

  if (!session || !isConnected) return null

  return (
    <YStack space ai="flex-start" w="100%">
      <H2>{i18n.t('settings.torrents.title')}</H2>
      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.downloadDirectory')}</Paragraph>
        <XStack>
          <DownloadDirectoryInput session={session} setSession={setSession} />
        </XStack>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>Encryption</Paragraph>
        <XStack w={media.gtXs ? 180 : '100%'}>
          {session.encryption && (
            <Select
              label={'encryption'}
              id="encryption"
              placeholder={'Select encryption mode'}
              value={session.encryption}
              onValueChange={(mode) => {
                setSession((s) => ({ ...s, encryption: mode }))
              }}
              options={encryptionModes}
            ></Select>
          )}
        </XStack>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>Enable uTP</Paragraph>
        <Switch
          id={'utp-enabled'}
          checked={session['utp-enabled']}
          onCheckedChange={(isEnabled) => {
            console.log('isEnabled', isEnabled)
            setSession((s) => ({ ...s, 'utp-enabled': isEnabled }))
          }}
        >
          <Switch.Thumb
            animation="quick"
            bc={theme === 'light' ? 'black' : 'white'}
          />
        </Switch>
      </SettingLayout>

      <Button
        ml="auto"
        theme="yellow"
        o={!hasChanged ? 0.5 : 1}
        disabled={!hasChanged}
        onPress={handleSubmit}
      >
        {i18n.t('settings.torrents.save')}
      </Button>
    </YStack>
  )
}

const encryptionModes = ['required', 'preferred', 'tolerated']

const DownloadDirectoryInput = ({ session, setSession }) => {
  const node = useContext(NodeContext)

  if (!isElectron() || !node.isLocal) {
    return (
      <Input
        editable={false}
        o={0.5}
        flex={1}
        size="$4"
        borderWidth={2}
        value={session['download-dir'] || ''}
      />
    )
  }

  return (
    <XStack>
      <Input
        mr="$2"
        flex={1}
        size="$4"
        borderWidth={2}
        value={session['download-dir'] || ''}
        onChangeText={(text) => {
          setSession((s) => ({ ...s, ['download-dir']: text }))
        }}
      />
      <Button
        circular
        icon={Folder}
        onPress={async () => {
          const selectedFolders = await window.electronAPI.selectFolder(
            session['download-dir']
          )
          if (selectedFolders && selectedFolders.length > 0) {
            const path = selectedFolders[0]
            setSession((s) => ({ ...s, ['download-dir']: path }))
          }
        }}
      ></Button>
    </XStack>
  )
}
