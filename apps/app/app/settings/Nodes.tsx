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

import { SettingsContext } from '../../contexts/SettingsContext'
import { ConfirmNodeDeleteAlertDialog } from '../../dialogs/ConfirmNodeDeleteAlertDialog'
import { QRCode } from '../../components/QRCode'
import { Platform } from 'react-native'
import isElectron from 'is-electron'
import { ScanQRCodeDialog } from '../../dialogs/ScanQRCodeDialog'
import { getDeviceName } from '../../lib/device'
import { Camera, Clipboard } from '@tamagui/lucide-icons'
import { AcceptedOrRejectedPeers } from '../../components/AcceptedOrRejectPeers'
import { NodeContext } from '../../contexts/NodeContext'
import { AddNodeDialog } from '../../dialogs/AddNodeDialog'
import { SettingLayout } from '../../components/SettingLayout'
import { APP_URL } from '../../config'
import i18n from '../../i18n'
import { useToastController } from '@tamagui/toast'

export const Nodes = () => {
  const settingsContext = useContext(SettingsContext)
  const { settings, updateSettings } = settingsContext
  const [qrCodeXML, setQrCodeXML] = useState(null)
  const [isScanOpen, setIsScanOpen] = useState(false)
  const node = useContext(NodeContext)
  const toast = useToastController()

  const nodes = settings.nodes || []

  const nodeId = node?.settings?.nodeId
  const linkURL = `${APP_URL}/settings?nodeId=${nodeId}&name=${getDeviceName()}`

  console.log('linkURL', linkURL)

  useEffect(() => {
    if (!isElectron()) return

    const buildQrCode = async () => {
      if (!node.settings) return

      QRCodeGenerator.toString(encodeURI(linkURL), { type: 'svg' }).then(
        setQrCodeXML
      )
    }

    buildQrCode()
  }, [node.settings, linkURL])

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

      {isElectron() && (
        <>
          <SettingLayout>
            <Paragraph>{i18n.t('settings.nodes.qrCodeLabel')}</Paragraph>
            <Card ai="center" jc="center" bordered p="$1" bg="white">
              <QRCode xml={qrCodeXML} />
            </Card>
          </SettingLayout>
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
        </>
      )}
      {isElectron() && <AcceptedOrRejectedPeers />}

      {Platform.OS !== 'web' && (
        <XStack>
          <Button
            size="$4"
            theme="yellow"
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
  return (
    <YGroup bordered size="$4">
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
      {nodes.map((node) => (
        <YGroup.Item key={node.id}>
          <ListItem
            gap="$4"
            iconAfter={
              <ConfirmNodeDeleteAlertDialog
                onConfirm={() => {
                  handleDeleteNode(node.id)
                }}
              />
            }
          >
            <RadioGroup
              value={settings.selectedNodeId}
              onValueChange={updateSelectedNodeId}
            >
              <RadioGroup.Item id={node.id} value={node.id}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </RadioGroup>
            {node.name}
          </ListItem>
        </YGroup.Item>
      ))}
    </YGroup>
  )
}
