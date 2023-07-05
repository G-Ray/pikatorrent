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
  useMedia,
} from 'tamagui'
import * as QRCodeGenerator from 'qrcode'

import { SettingsContext } from '../../contexts/SettingsContext'
import { ConfirmNodeDeleteAlertDialog } from '../../dialogs/ConfirmNodeDeleteAlertDialog'
import { QRCode } from '../../components/QRCode'
import { Platform } from 'react-native'
import isElectron from 'is-electron'
import { ScanQRCodeDialog } from '../../dialogs/ScanQRCodeDialog'
import { getDeviceName } from '../../lib/device'
import { Camera } from '@tamagui/lucide-icons'
import { AcceptedOrRejectedPeers } from '../../components/AcceptedOrRejectPeers'
import { NodeContext } from '../../contexts/NodeContext'
import { AddNodeDialog } from '../../dialogs/AddNodeDialog'

export const Nodes = () => {
  const settingsContext = useContext(SettingsContext)
  const { settings, updateSettings } = settingsContext
  const [qrCodeXML, setQrCodeXML] = useState(null)
  const [isScanOpen, setIsScanOpen] = useState(false)
  const node = useContext(NodeContext)

  const nodes = settings.nodes || []

  useEffect(() => {
    if (!isElectron()) return

    const buildQrCode = async () => {
      if (!node.settings) return

      const nodeId = await node.settings.nodeId
      QRCodeGenerator.toString(
        JSON.stringify({ id: nodeId, name: getDeviceName() }),
        { type: 'svg' }
      ).then(setQrCodeXML)
    }

    buildQrCode()
  }, [node.settings])

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
    <YStack space w="100%">
      <H2>Nodes</H2>
      <SettingLayout>
        <Paragraph>Local & remote nodes</Paragraph>
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
        <SettingLayout>
          <Paragraph>QR code to link the mobile app</Paragraph>
          <Card ai="center" jc="center" bordered p="$1" bg="white">
            <QRCode xml={qrCodeXML} />
          </Card>
        </SettingLayout>
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
            Scan QR code
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

export const SettingLayout = ({ children }) => {
  const media = useMedia()

  return media.gtXs ? (
    <XStack jc="space-between" w="100%">
      {children}
    </XStack>
  ) : (
    <YStack w="100%">{children}</YStack>
  )
}
