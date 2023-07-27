import * as transmission from '../lib/transmission.native'

export const useLocalNode = () => {
  const sendRPCMessage = (json: any) => {
    if (!transmission.transmission) return

    return new Promise((resolve, reject) => {
      transmission.transmission?.request(json, (err, res) => {
        return err ? reject(err) : resolve(res) // FIXME do no parse anymore
      })
    })
  }

  return {
    sendRPCMessage,
    isLocal: true,
    isConnected: true,
  }
}
