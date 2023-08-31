import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Adapt, Select, Sheet, XStack, YStack, getFontSize } from 'tamagui'
import { SettingsContext } from '../contexts/SettingsContext'
import isElectron from 'is-electron'

export const ThemeSelector = (props) => {
  const { settings, updateSettings } = useContext(SettingsContext)

  const handleCheckedChange = async (theme: string) => {
    updateSettings({ theme })

    if (isElectron()) {
      window.theme.set(theme)
    }
  }

  return (
    <Select
      id="theme"
      value={settings.theme}
      onValueChange={(value) => handleCheckedChange(value.toLowerCase())}
      {...props}
    >
      <Select.Trigger iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
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
              <Select.Label>Theme</Select.Label>
              {items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item} value={item}>
                    <Select.ItemText>{item}</Select.ItemText>
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

const items = ['System', 'Light', 'Dark']
