import * as readline from 'node:readline'
import * as QRCode from 'qrcode'

import { default as config } from '../config.js'
import { settings } from '../index.js'
import { getOSName } from './devices.js'

export const printNodeInfo = async () => {
  const linkUrl = encodeURI(
    `${config.APP_URL}/settings?nodeId=${
      settings.nodeId
    }&name=PikaTorrent cli on ${getOSName()}`
  )

  const qrcode = await QRCode.toString(linkUrl)

  console.log(
    `> Control this node by clicking on the url, or scan the QR code from the mobile app:`
  )
  console.log(qrcode)
  console.log(linkUrl)
  console.log('\nDo not share your unique link or QR code with anyone.')
}
export const onAcceptOrRejectPeerCli = async (
  peerId: string,
  peerName: string
) => {
  return new Promise<boolean>((resolve, reject) => {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readlineInterface.question(
      `Accept connection from ${peerName} (${peerId}) ? Y/N\n`,
      (response) => {
        readlineInterface.close()

        if (['y', 'Y'].includes(response)) {
          resolve(true)
        } else if (['n', 'N'].includes(response)) {
          resolve(false)
        } else {
          // Do not save until we have a correct response
          resolve(false)
        }
      }
    )
  })
}
