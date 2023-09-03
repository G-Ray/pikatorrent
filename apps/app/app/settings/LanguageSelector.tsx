import React from 'react'
import { XStack, YStack } from 'tamagui'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useContext } from 'react'
import { Adapt, Select, Sheet, getFontSize } from 'tamagui'
import { SettingsContext } from '../../contexts/SettingsContext'
import isElectron from 'is-electron'

import i18n, { translationsLanguages } from '../../i18n'
import { getLocales } from 'expo-localization'

// On Android/iOS, the language should be set in the OS settings
export const LanguageSelector = (props) => {
  const { settings, updateSettings, isLoaded } = useContext(SettingsContext)

  const handleCheckedChange = async (language: string) => {
    updateSettings({ language })
    i18n.locale = language
    if (isElectron()) {
      window.location.reload()
    }
  }

  if (!isLoaded) return null

  return (
    <Select
      id="language"
      value={settings.language || getLocales()[0].languageCode}
      onValueChange={(value) => handleCheckedChange(value.toLowerCase())}
      {...props}
    >
      <Select.Trigger iconAfter={ChevronDown}>
        <Select.Value placeholder={i18n.t('settings.app.language')} />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <XStack>
            <Select.Group space="$0">
              <Select.Label>{i18n.t('settings.app.language')}</Select.Label>
              {languages.map((item, i) => {
                return (
                  <Select.Item index={i} key={item} value={item}>
                    <Select.ItemText>
                      {translationsLanguages[item]}
                    </Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Group>
            {/* special icon treatment for native */}
            {props.native && (
              <YStack
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                width={'$4'}
                pointerEvents="none"
              >
                <ChevronDown
                  size={getFontSize((props.size ?? '$true') as any)}
                />
              </YStack>
            )}
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}

const languages = Object.keys(translationsLanguages)
