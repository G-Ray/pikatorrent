import React, { useCallback, useMemo } from 'react'
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

import { NodeContext } from '../../../../contexts/NodeContext'
import { useSession } from '../../../../hooks/useSession'
import { Select } from '../../../reusable/Select'
import { DirectoryPickerDialog } from '../../../dialogs/DirectoryPickerDialog'
import { useI18n } from '../../../../hooks/use18n'
import { SettingLayout } from '../SettingLayout'

export const Torrents = () => {
  const { sendRPCMessage, isConnected } = useContext(NodeContext)
  const { session: initialSession, fetchSession } = useSession()
  const [session, setSession] = useState({})
  const theme = useThemeName()
  const i18n = useI18n()

  useEffect(() => {
    setSession(initialSession)
  }, [initialSession])

  const saveSessionValue = useCallback(
    async ({ key, value }) => {
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
    },
    [fetchSession, sendRPCMessage]
  )

  // Save port with debounce
  const saveSessionPort = useMemo(
    () =>
      debounce((port: number) => {
        saveSessionValue({ key: 'peer-port', value: port })
      }, 500),
    [saveSessionValue]
  )

  const encryptionModesTexts = encryptionModes.map((mode) =>
    i18n.t('settings.torrents.encryptionModes.' + mode)
  )
  if (!session || !isConnected) return null

  return (
    <YStack ai="flex-start" w="100%" gap="$4">
      <H2>{i18n.t('settings.torrents.title')}</H2>
      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.downloadDirectory')}</Paragraph>
        <DownloadDirectoryInput
          session={session}
          onSelect={(path) =>
            saveSessionValue({ key: 'download-dir', value: path })
          }
        />
      </SettingLayout>

      <SettingLayout>
        <Paragraph>Encryption</Paragraph>
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
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enableUTP')}</Paragraph>
        <Switch
          id={'utp-enabled'}
          checked={session['utp-enabled']}
          onCheckedChange={(isEnabled) => {
            saveSessionValue({ key: 'utp-enabled', value: isEnabled })
          }}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enableDHT')}</Paragraph>
        <Switch
          id={'dht-enabled'}
          checked={session['dht-enabled']}
          onCheckedChange={(isEnabled) => {
            saveSessionValue({ key: 'dht-enabled', value: isEnabled })
          }}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enableLPD')}</Paragraph>
        <Switch
          id={'lpd-enabled'}
          checked={session['lpd-enabled']}
          onCheckedChange={(isEnabled) => {
            saveSessionValue({ key: 'lpd-enabled', value: isEnabled })
          }}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.enablePEX')}</Paragraph>
        <Switch
          id={'pex-enabled'}
          checked={session['pex-enabled']}
          onCheckedChange={(isEnabled) => {
            saveSessionValue({ key: 'pex-enabled', value: isEnabled })
          }}
        >
          <Switch.Thumb animation="quick" />
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
            saveSessionValue({
              key: 'port-forwarding-enabled',
              value: isEnabled,
            })
          }}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.torrents.peerPort')}</Paragraph>
        <Input
          minWidth={180}
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
      </SettingLayout>
    </YStack>
  )
}

const encryptionModes = ['required', 'preferred', 'tolerated']

const DownloadDirectoryInput = ({ session, onSelect }) => {
  const node = useContext(NodeContext)

  if (!node.isLocal) {
    return (
      <Input
        editable={false}
        minWidth={180}
        o={0.5}
        flex={1}
        value={session['download-dir'] || ''}
      />
    )
  }

  return (
    <XStack gap="$2" f={1} justifyContent="flex-end">
      <Input
        f={1}
        editable={false}
        maxWidth={240}
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
