import React, { useEffect, useState } from 'react'
import { Paragraph } from 'tamagui'
import { Dialog } from './Dialog'
import { BarCodeScanner } from 'expo-barcode-scanner'

export const ScanQRCodeDialog = ({ onScannedNode, onClose }) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    try {
      const parsed = JSON.parse(data)
      if (parsed.id && parsed.name) {
        onScannedNode({ id: parsed.id, name: parsed.name })
      }
    } catch (e) {}
  }

  return (
    <Dialog defaultOpen onOpenChange={onClose} title="Scan" snapPoints={[70]}>
      {!hasPermission && <Paragraph>Camera permission denied</Paragraph>}
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={handleBarCodeScanned}
        style={{ width: '100%', height: '100%', flex: 1 }}
      />
    </Dialog>
  )
}
