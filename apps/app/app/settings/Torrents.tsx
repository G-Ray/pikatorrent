import React from 'react'
import { useContext, useEffect, useState } from 'react'
import {
  Button,
  H2,
  Input,
  Paragraph,
  Switch,
  XStack,
  YStack,
  useThemeName,
} from 'tamagui'

import { NodeContext } from '../../contexts/NodeContext'
import { useSession } from '../../hooks/useSession'
import i18n from '../../i18n'
import { Select } from '../../components/reusable/Select'
import { DirectoryPickerDialog } from '../../dialogs/DirectoryPickerDialog'

export const Torrents = () => {
  const { sendRPCMessage, isConnected } = useContext(NodeContext)
  const { session: initialSession, fetchSession } = useSession()
  const [session, setSession] = useState({})
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
          'peer-port': session['peer-port'],
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
      <XStack jc="space-between" w="100%">
        <Paragraph>{i18n.t('settings.torrents.downloadDirectory')}</Paragraph>
        <DownloadDirectoryInput session={session} setSession={setSession} />
      </XStack>

      <XStack jc="space-between" w="100%">
        <Paragraph>Encryption</Paragraph>
        <XStack minWidth={180}>
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
      </XStack>

      <XStack jc="space-between" w="100%">
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
      </XStack>

      <XStack jc="space-between" w="100%">
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
      </XStack>

      <XStack jc="space-between" w="100%">
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
      </XStack>

      <XStack jc="space-between" w="100%">
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
      </XStack>

      <XStack jc="space-between" w="100%">
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
      </XStack>

      <XStack jc="space-between" w="100%">
        <Paragraph>{i18n.t('settings.torrents.peerPort')}</Paragraph>
        <Input
          minWidth={180}
          bc={theme.startsWith('light') ? 'white' : 'black'}
          value={(session['peer-port'] || 0).toString()}
          onChangeText={(text) => {
            try {
              const parsedNumber = parseInt(text)
              setSession((s) => ({ ...s, ['peer-port']: parsedNumber }))
            } catch (e) {
              console.error(e)
            }
          }}
        />
      </XStack>

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
  const theme = useThemeName()

  if (!node.isLocal) {
    return (
      <Input
        editable={false}
        minWidth={180}
        o={0.5}
        flex={1}
        value={session['download-dir'] || ''}
        bc={theme.startsWith('light') ? 'white' : 'black'}
      />
    )
  }

  return (
    <XStack f={1} ml="auto">
      <Input
        f={1}
        mx="$2"
        minWidth={180}
        editable={false}
        bc={theme.startsWith('light') ? 'white' : 'black'}
        value={session['download-dir'] || ''}
        onChangeText={(text) => {
          setSession((s) => ({ ...s, ['download-dir']: text }))
        }}
      />
      <DirectoryPickerDialog
        selectedPath={session['download-dir']}
        onSelect={(path) => {
          setSession((s) => ({ ...s, ['download-dir']: path }))
        }}
      />
    </XStack>
  )
}
