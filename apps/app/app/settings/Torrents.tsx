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
  useThemeName,
} from 'tamagui'

import { NodeContext } from '../../contexts/NodeContext'
import { useSession } from '../../hooks/useSession'
import { Folder } from '@tamagui/lucide-icons'
import { SettingLayout } from '../../components/SettingLayout'
import isElectron from 'is-electron'
import i18n from '../../i18n'
import { Select } from '../../components/reusable/Select'
import { Platform } from 'react-native'

export const Torrents = () => {
  const { sendRPCMessage, isConnected } = useContext(NodeContext)
  const { session: initialSession, fetchSession } = useSession()
  const [session, setSession] = useState({})
  const media = useMedia()
  const theme = useThemeName()

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
          'dht-enabled': session['dht-enabled'],
          'lpd-enabled': session['lpd-enabled'],
          'pex-enabled': session['pex-enabled'],
          'port-forwarding-enabled': session['port-forwarding-enabled'],
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
      {Platform.OS === 'web' && (
        <SettingLayout>
          <Paragraph>{i18n.t('settings.torrents.downloadDirectory')}</Paragraph>
          <XStack>
            <DownloadDirectoryInput session={session} setSession={setSession} />
          </XStack>
        </SettingLayout>
      )}

      <SettingLayout>
        <Paragraph>Encryption</Paragraph>
        <XStack w={media.gtXs ? 180 : '100%'}>
          {session.encryption && (
            <Select
              label={i18n.t('settings.torrents.encryption')}
              id="encryption"
              placeholder={i18n.t('settings.torrents.encryption')}
              value={session.encryption}
              onValueChange={(mode) => {
                setSession((s) => ({ ...s, encryption: mode }))
              }}
              options={encryptionModes}
              optionsTexts={encryptionModesTexts}
            ></Select>
          )}
        </XStack>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enableUTP')}</Paragraph>
        <Switch
          id={'utp-enabled'}
          checked={session['utp-enabled']}
          onCheckedChange={(isEnabled) => {
            setSession((s) => ({ ...s, 'utp-enabled': isEnabled }))
          }}
        >
          <Switch.Thumb
            animation="quick"
            bc={theme === 'light' ? 'black' : 'white'}
          />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enableDHT')}</Paragraph>
        <Switch
          id={'dht-enabled'}
          checked={session['dht-enabled']}
          onCheckedChange={(isEnabled) => {
            setSession((s) => ({ ...s, 'dht-enabled': isEnabled }))
          }}
        >
          <Switch.Thumb
            animation="quick"
            bc={theme === 'light' ? 'black' : 'white'}
          />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enableLPD')}</Paragraph>
        <Switch
          id={'lpd-enabled'}
          checked={session['lpd-enabled']}
          onCheckedChange={(isEnabled) => {
            setSession((s) => ({ ...s, 'lpd-enabled': isEnabled }))
          }}
        >
          <Switch.Thumb
            animation="quick"
            bc={theme === 'light' ? 'black' : 'white'}
          />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enablePEX')}</Paragraph>
        <Switch
          id={'pex-enabled'}
          checked={session['pex-enabled']}
          onCheckedChange={(isEnabled) => {
            setSession((s) => ({ ...s, 'pex-enabled': isEnabled }))
          }}
        >
          <Switch.Thumb
            animation="quick"
            bc={theme === 'light' ? 'black' : 'white'}
          />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>
          {i18n.t('settings.torrents.enablePortForwarding')}
        </Paragraph>
        <Switch
          id={'nabled'}
          checked={session['port-forwarding-enabled']}
          onCheckedChange={(isEnabled) => {
            setSession((s) => ({ ...s, 'port-forwarding-enabled': isEnabled }))
          }}
        >
          <Switch.Thumb
            animation="quick"
            bc={theme === 'light' ? 'black' : 'white'}
          />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.peerPort')}</Paragraph>
        <Input
          borderWidth={2}
          value={(session['peer-port'] || 0).toString()}
          onChangeText={(text) => {
            try {
              const parsedNumber = parseInt(text)
              setSession((s) => ({ ...s, ['peer-port']: parsedNumber }))
            } catch (e) {}
          }}
        />
      </SettingLayout>

      <Button
        ml="auto"
        theme="yellow"
        borderColor={'$yellow7'}
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

const encryptionModesTexts = encryptionModes.map((mode) =>
  i18n.t('settings.torrents.encryptionModes.' + mode)
)

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
