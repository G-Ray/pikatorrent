import React, { useContext } from 'react'
import { Button, Paragraph, XStack, YStack } from 'tamagui'
import { ExternalLink } from '@tamagui/lucide-icons'

import { Dialog } from '../reusable/Dialog'
import { openExternalLink } from '../../lib/links'
import { quitApp } from '../../lib/lifecycle'
import { SettingsContext } from '../../contexts/SettingsContext'
import { useI18n } from '../../hooks/use18n'

export const TermsOfUseDialog = () => {
  const i18n = useI18n()
  const { settings, updateSettings } = useContext(SettingsContext)

  const handleAccept = async () => {
    updateSettings({ isTermsOfUseAccepted: true })
  }

  return (
    <Dialog
      title={i18n.t('termsOfUseDialog.title')}
      open={!settings.isTermsOfUseAccepted}
      dismissOnOverlayPress={false}
      dismissOnSnapToBottom={false}
      snapPointsMode="fit"
    >
      <YStack maxWidth={500}>
        <Paragraph>{i18n.t('termsOfUseDialog.termsOfUseMessage')}</Paragraph>
        <XStack ai="center">
          <Paragraph>
            {' '}
            {i18n.t('termsOfUseDialog.privacyPolicyMessage')}
          </Paragraph>
          <Button
            ml="$2"
            size="$2"
            icon={ExternalLink}
            onPress={() => {
              openExternalLink('https://www.pikatorrent.com/privacy-policy')
            }}
          >
            {i18n.t('termsOfUseDialog.privacyPolicy')}.
          </Button>
        </XStack>
      </YStack>
      <XStack jc="flex-end" mt="$2" gap="$2">
        <Button onPress={quitApp}>{i18n.t('termsOfUseDialog.cancel')}</Button>
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            theme="yellow"
            borderColor={'$yellow7'}
            onPress={handleAccept}
          >
            {i18n.t('termsOfUseDialog.accept')}
          </Button>
        </Dialog.Close>
      </XStack>
    </Dialog>
  )
}
