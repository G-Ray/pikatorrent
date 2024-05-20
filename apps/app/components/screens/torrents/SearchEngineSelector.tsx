import React from 'react'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import {
  Adapt,
  Image,
  Paragraph,
  Select,
  Sheet,
  XStack,
  YStack,
  getFontSize,
  useMedia,
} from 'tamagui'

import { Engine } from './SearchBar'
import defaultSettings from '../../../defaultSettings.json'
import { useI18n } from '../../../hooks/use18n'

type SearchEngineSelectorProps = {
  engines: Array<Engine>
  onValueChange: (s: string) => void
  value: string
}

export const SearchEngineSelector = ({
  engines,
  onValueChange,
  value,
  ...props
}: SearchEngineSelectorProps) => {
  const selectedEngine =
    engines.find((e) => e.searchUrl === value) ||
    defaultSettings.searchEnginesUrls[0]
  const i18n = useI18n()
  const media = useMedia()

  return (
    <Select
      id="search-engine"
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      <Select.Trigger
        w={media.gtXs ? 180 : '$6'}
        size={media.gtXs ? '$4' : '$2'}
        iconAfter={ChevronDown}
        transparent
      >
        <XStack f={1} ai="center" jc="space-between">
          <XStack f={1} gap="$2">
            <Image
              source={{
                width: 24,
                height: 24,
                uri: selectedEngine.iconUrl,
              }}
            />
            {media.gtXs && (
              <Paragraph numberOfLines={1}>{selectedEngine.name}</Paragraph>
            )}
          </XStack>
        </XStack>
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native modal dismissOnSnapToBottom snapPointsMode="fit">
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
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
              <Select.Label>
                {i18n.t('torrents.searchEngineSelectorLabel')}
              </Select.Label>
              {engines.map((engine, i) => {
                return (
                  <Select.Item index={i} key={engine.name} value={engine.name}>
                    <XStack f={1} jc="space-between">
                      <XStack gap="$2" f={1}>
                        <Image
                          source={{
                            width: 24,
                            height: 24,
                            uri: engine.iconUrl,
                          }}
                        />
                        <Select.ItemText numberOfLines={1}>
                          {engine.name}
                        </Select.ItemText>
                      </XStack>
                      <Select.ItemIndicator>
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </XStack>
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
