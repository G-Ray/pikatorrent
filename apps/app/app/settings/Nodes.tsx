import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
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
      ...settings,
      selectedNodeId:
        settings.selectedNodeId === id ? null : settings.selectedNodeId,
      nodes: nodes.filter((n) => n.id !== id),
    })
  }

  const updateSelectedNodeId = (id: string) => {
    updateSettings({ ...settings, selectedNodeId: id })
  }

  const handleAddNode = ({ id, name }) => {
    updateSettings({
      nodes: [...nodes, { id, name }],
      selectedNodeId: id,
    })
    setIsScanOpen(false)
  }

  return (
    <YStack space ai="flex-start">
      <H2>Nodes</H2>
      <>
        <Paragraph>Add a node, and select the node to connect to</Paragraph>
        <XStack space w="100%">
          <YGroup alignSelf="center" bordered size="$4">
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
        </XStack>
      </>
      {Platform.OS === 'web' && (
        <AddNodeDialog settingsContext={settingsContext} />
      )}
      {isElectron() && (
        <>
          <Paragraph>
            Link the mobile app with the desktop app by flashing the following
            qrcode
          </Paragraph>
          <QRCode xml={qrCodeXML} />
          <AcceptedOrRejectedPeers />
        </>
      )}
      {Platform.OS !== 'web' && (
        <XStack>
          <Button
            theme="yellow"
            icon={Camera}
            onPress={() => setIsScanOpen(true)}
            size="$4"
            f={1}
          >
            Scan QrCode
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
