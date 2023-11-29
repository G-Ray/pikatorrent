import React, { useMemo } from 'react'
import { useContext, useEffect, useState } from 'react'
import {
  H2,
  Input,
  Paragraph,
  Switch,
  XStack,
  YStack,
  useThemeName,
} from 'tamagui'
import debounce from 'lodash/debounce'

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

  const saveSessionValue = async ({ key, value }) => {
    try {
      await sendRPCMessage({
        method: 'session-set',
        arguments: {
          [key]: value,
        },
      })

      fetchSession()
    } catch (e) {
      console.log('error updating session info', e)
    }
  }

  // Save port with debounce
  const saveSessionPort = useMemo(
    () =>
      debounce((number) => {
        console.log('debounce', number)
      }, 500),
    []
  )

  if (!session || !isConnected) return null

  return (
    <YStack space ai="flex-start" w="100%">
      <H2>{i18n.t('settings.torrents.title')}</H2>
      <XStack jc="space-between" w="100%">
        <Paragraph>{i18n.t('settings.torrents.downloadDirectory')}</Paragraph>
        <DownloadDirectoryInput
          session={session}
          onSelect={(path) =>
            saveSessionValue({ key: 'download-dir', value: path })
          }
        />
      </XStack>

      <XStack jc="space-between" w="100%">
        <Paragraph>Encryption {session.encryption}</Paragraph>
        <XStack minWidth={180}>
          {session.encryption && (
            <Select
              label={i18n.t('settings.torrents.encryption')}
              id="encryption"
              placeholder={i18n.t('settings.torrents.encryption')}
              value={session.encryption}
              onValueChange={(mode) => {
                saveSessionValue({ key: 'encryption', value: mode })
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
            saveSessionValue({ key: 'utp-enabled', value: isEnabled })
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
            saveSessionValue({ key: 'dht-enabled', value: isEnabled })
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
            saveSessionValue({ key: 'lpd-enabled', value: isEnabled })
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
            saveSessionValue({ key: 'pex-enabled', value: isEnabled })
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
            saveSessionValue({
              key: 'port-forwarding-enabled',
              value: isEnabled,
            })
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
              setSession((s) => ({ ...s, 'peer-port': parsedNumber }))
              saveSessionPort(parsedNumber)
            } catch (e) {
              console.error(e)
            }
          }}
        />
      </XStack>
    </YStack>
  )
}

const encryptionModes = ['required', 'preferred', 'tolerated']

const encryptionModesTexts = encryptionModes.map((mode) =>
  i18n.t('settings.torrents.encryptionModes.' + mode)
)

const DownloadDirectoryInput = ({ session, onSelect }) => {
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
          onSelect(text)
        }}
      />
      <DirectoryPickerDialog
        selectedPath={session['download-dir']}
        onSelect={(path) => {
          onSelect(path)
        }}
      />
    </XStack>
  )
}
