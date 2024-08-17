import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  Card,
  H2,
  ListItem,
  Paragraph,
  RadioGroup,
  XStack,
  YGroup,
  YStack,
} from 'tamagui'
import * as QRCodeGenerator from 'qrcode'

import { SettingsContext } from '../../../../contexts/SettingsContext'
import { ConfirmNodeDeleteAlertDialog } from '../../../dialogs/ConfirmNodeDeleteAlertDialog'
import { QRCode } from '../../../reusable/QRCode'
import { Platform } from 'react-native'
import { ScanQRCodeDialog } from '../../../dialogs/ScanQRCodeDialog'
import { getDeviceName } from '../../../../lib/device'
import {
  Camera,
  ChevronDown,
  ChevronUp,
  Clipboard,
  Delete,
} from '@tamagui/lucide-icons'
import { AcceptedOrRejectedPeers } from './AcceptedOrRejectPeers'
import { AddNodeDialog } from '../../../dialogs/AddNodeDialog'
import { SettingLayout } from '../SettingLayout'
import { useToastController } from '@tamagui/toast'
import { useLocalNode } from '../../../../hooks/useLocalNode'
import { useI18n } from '../../../../hooks/use18n'
import isElectron from 'is-electron'

const appUrl = process.env.EXPO_PUBLIC_APP_URL

export const Nodes = () => {
  const settingsContext = useContext(SettingsContext)
  const { settings, updateSettings } = settingsContext
  const [isScanOpen, setIsScanOpen] = useState(false)
  const i18n = useI18n()

  const nodes = settings.nodes || []

  const handleDeleteNode = async (id: string) => {
    updateSettings({
      selectedNodeId:
        settings.selectedNodeId === id ? null : settings.selectedNodeId,
      nodes: nodes.filter((n) => n.id !== id),
    })
  }

  const updateSelectedNodeId = (id: string) => {
    updateSettings({ selectedNodeId: id })
  }

  const handleAddNode = ({ id, name }) => {
    updateSettings({
      nodes: [...nodes, { id, name }],
      selectedNodeId: id,
    })
    setIsScanOpen(false)
  }

  return (
    <YStack space w="100%" gap="$2">
      <H2>{i18n.t('settings.nodes.title')}</H2>
      <SettingLayout>
        <Paragraph>{i18n.t('settings.nodes.listLabel')}</Paragraph>
        <YStack gap="$2">
          <NodesList
            nodes={nodes}
            settings={settings}
            updateSelectedNodeId={updateSelectedNodeId}
            handleDeleteNode={handleDeleteNode}
          />

          {Platform.OS === 'web' && (
            <AddNodeDialog settingsContext={settingsContext} />
          )}
        </YStack>
      </SettingLayout>

      {isElectron() && <LocalNodeQrcode />}

      {Platform.OS !== 'web' && (
        <XStack>
          <Button
            size="$4"
            theme="yellow"
            borderColor={'$yellow7'}
            icon={Camera}
            onPress={() => setIsScanOpen(true)}
            f={1}
          >
            {i18n.t('settings.nodes.qrCodeScanButtonLabel')}
          </Button>
          {isScanOpen && (
            <ScanQRCodeDialog
              onScannedNode={handleAddNode}
              onClose={() => setIsScanOpen(false)}
            />
          )}
        </XStack>
      )}
    </YStack>
  )
}

const NodesList = ({
  nodes,
  settings,
  updateSelectedNodeId,
  handleDeleteNode,
}) => {
  const [deletingNodeId, setDeletingNodeId] = useState(null)

  return (
    <YGroup bordered size="$4">
      {deletingNodeId !== null && (
        <ConfirmNodeDeleteAlertDialog
          onConfirm={() => {
            handleDeleteNode(deletingNodeId)
            setDeletingNodeId(null)
          }}
          onOpenChange={() => setDeletingNodeId(null)}
        />
      )}
      {(Platform.OS !== 'web' || isElectron()) && (
        <ListItem gap="$4">
          <RadioGroup
            value={settings.selectedNodeId}
            onValueChange={updateSelectedNodeId}
          >
            <RadioGroup.Item id={'local'} value={'local'}>
              <RadioGroup.Indicator />
            </RadioGroup.Item>
          </RadioGroup>
          Local node
        </ListItem>
      )}
      {nodes.map((node, index) => (
        <YGroup.Item key={index}>
          <ListItem gap="$4">
            <RadioGroup
              value={settings.selectedNodeId}
              onValueChange={updateSelectedNodeId}
            >
              <RadioGroup.Item id={node.id} value={node.id}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </RadioGroup>
            {node.name}
            {settings.selectedNodeId !== node.id && (
              <>
                <Button
                  icon={Delete}
                  theme="red"
                  size="$2"
                  onPress={() => {
                    setDeletingNodeId(node.id)
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </ListItem>
        </YGroup.Item>
      ))}
    </YGroup>
  )
}

const LocalNodeQrcode = () => {
  const i18n = useI18n()
  const toast = useToastController()
  const localNode = useLocalNode()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [qrCodeXML, setQrCodeXML] = useState(null)
  const linkURL = localNode?.settings?.nodeId
    ? `${appUrl}/settings?nodeId=${
        localNode?.settings?.nodeId
      }&name=${getDeviceName()}`
    : null

  useEffect(() => {
    if (linkURL) {
      QRCodeGenerator.toString(encodeURI(linkURL), { type: 'svg' }).then(
        setQrCodeXML,
      )
    }
  }, [linkURL])

  if (!qrCodeXML) {
    return null
  }

  return (
    <YStack gap="$4">
      <XStack jc="space-between" w="100%">
        <Paragraph>{i18n.t('settings.nodes.qrCodeLabel')}</Paragraph>
        <YStack gap="$4">
          <XStack alignSelf="flex-end">
            <Button
              onPress={() => setIsDisplayed(!isDisplayed)}
              icon={isDisplayed ? ChevronUp : ChevronDown}
            >
              {i18n.t(
                isDisplayed
                  ? 'settings.nodes.hideQRCode'
                  : 'settings.nodes.showQRCode',
              )}
            </Button>
          </XStack>
          {isDisplayed && (
            <Card ai="center" jc="center" bordered p="$1" bg="white">
              <QRCode xml={qrCodeXML} />
            </Card>
          )}
        </YStack>
      </XStack>
      <SettingLayout>
        <Paragraph>{i18n.t('settings.nodes.secretLinkLabel')}</Paragraph>
        <Button
          icon={Clipboard}
          onPress={async () => {
            navigator.clipboard.writeText(linkURL)
            toast.show(i18n.t('toasts.linkCopied'))
          }}
        >
          {i18n.t('settings.nodes.copyLink')}
        </Button>
      </SettingLayout>

      <AcceptedOrRejectedPeers />
    </YStack>
  )
}
