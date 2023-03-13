const Peer = require('simple-peer')
const wrtc = require('wrtc')
const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:9001')

// Listen for messages
ws.addEventListener('message', (event) => {
  const json = JSON.parse(event.data)

  if (json.type === 'offer') {
    // Create new peer
    createPeer(json)
  }
})

const createPeer = (offer) => {
  p = new Peer({ initiator: false, wrtc })

  p.on('error', (err) => console.log('error', err))

  p.on('signal', (data) => {
    if (data.type === 'answer') {
      ws.send(JSON.stringify(data))
    }
  })

  p.on('connect', () => {
    console.log('CONNECT')
    p.send('whatever' + Math.random())
  })

  p.on('data', (data) => {
    console.log('DATA' + data)
  })

  p.signal(offer)
}
