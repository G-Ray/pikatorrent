const Peer = require('simple-peer')
const wrtc = require('wrtc')
const WS = require('ws')

const Transmission = require('transmission-native')

const ws = new WS('ws://localhost:9001')

const tr = new Transmission('./transmission', 'transmission')

// Listen for messages
ws.addEventListener('message', (event) => {
  const json = JSON.parse(event.data)

  if (json.type === 'offer') {
    // Create new peer
    createPeer(json)
  }
})

const createPeer = (offer) => {
  const peer = new Peer({ initiator: false, wrtc })

  peer.on('error', (err) => console.log('error', err))

  peer.on('signal', (data) => {
    if (data.type === 'answer') {
      ws.send(JSON.stringify(data))
    }
  })

  peer.on('connect', () => {
    console.log('CONNECT')
  })

  peer.on('data', async (data) => {
    const { payload } = JSON.parse(data)
    let response

    // Trigger request
    try {
      response = await tr.request(payload)
    } catch (e) {
      response = { error: e.message }
    }

    // Return response
    peer.send(JSON.stringify({ id: JSON.parse(data).id, payload: response }))
  })

  peer.signal(offer)
}

// Handle exit gracefully
process.on('SIGINT', () => {
  tr.close()
  process.exit()
})
