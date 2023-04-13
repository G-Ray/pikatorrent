import * as uWebSockets from 'uWebSockets.js'

uWebSockets
  .App()
  .ws('/*', {
    message: (ws, message, isBinary) => {
      // Send message to a recipient
      try {
        const json = JSON.parse(Buffer.from(message).toString())

        // Subscribe to a specific id
        if (json.type === 'subscribe' && json.id) {
          if (!ws.isSubscribed(json.id)) {
            console.log('subscribe', json.id)
            ws.subscribe(json.id)
          }

          return
        }

        if (json.type === 'signal' && json.toId) {
          if (ws) {
            ws.publish(json.toId, message, isBinary)
          }
        }
      } catch (e) {
        console.error(e)
      }
    },
  })
  .listen(9001, (listenSocket) => {
    if (listenSocket) {
      console.log('Listening to port 9001')
    }
  })
