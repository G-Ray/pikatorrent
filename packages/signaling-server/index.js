const clients = []

require('uWebSockets.js')
  .App()
  .ws('/*', {
    open: (ws) => {
      clients.push(ws)
    },
    close: (ws) => {
      const index = clients.findIndex((c) => c === ws)
      clients.splice(index, 1)
    },
    message: (ws, message, isBinary) => {
      console.log('message', JSON.parse(Buffer.from(message)))
      clients.forEach((c) => c.send(message, isBinary, true))
    },
  })
  .listen(9001, (listenSocket) => {
    if (listenSocket) {
      console.log('Listening to port 9001')
    }
  })
