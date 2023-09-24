import Head from 'next/head'
import { Paragraph, YStack } from 'tamagui'

export default function PrivacyPolicy() {
  return (
    <YStack p="$8" gap="$4">
      <Paragraph>
        PikaTorrent is an open source application available on Android and
        Desktop.
      </Paragraph>
      <Paragraph>
        PikaTorrent apps send to a server (hub.pikatorrent.com) a unique
        identifier for each device and a generic generated device name. These
        data are sent to the server in the sole purpose of letting devices joins
        together in order to establish a webrtc connection. The whole process of
        joining devices is called signaling. Signaling data (see library
        https://github.com/feross/simple-peer/) is sent to the server in order
        for devices to find a way to find each other. Once a signaling process
        is successful, devices communicate in a peer-to-peer manner, within an
        encrypted webrtc data channel.
      </Paragraph>
      <Paragraph>
        The server implementation hosted at hub.pikatorrent.com is also open
        source and can be reviewed. Once a device disconnects from the server,
        no data is kept.
      </Paragraph>
    </YStack>
  )
}
