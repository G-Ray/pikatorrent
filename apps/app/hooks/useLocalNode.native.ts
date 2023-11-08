import * as transmission from '../lib/transmission.native'

export const useLocalNode = () => {
  const sendRPCMessage = (json: any) => {
    if (!transmission.transmission) return

    return new Promise((resolve, reject) => {
      transmission.transmission?.request(json, (err, res) => {
        if (err) {
          return reject(err)
        }

        saveTransmissionSettingsIfNeeded(json)
        resolve(res)
      })
    })
  }

  const saveTransmissionSettingsIfNeeded = (request) => {
    if (request.method === 'session-set') {
      // session have been updated, so save settings
      transmission.transmission.saveSettings()
    }
  }

  return {
    sendRPCMessage,
    isLocal: true,
    isConnected: true,
  }
}
