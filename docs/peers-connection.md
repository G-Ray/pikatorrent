## Definitions

A `node` is the continously running "demon" where transmission-native is running.

A `app` is a client application, which can be running on the web, or on a mobile.

A `peer` can designate either a `node` or `app`, which will be connected to each other with webrtc.

## Signaling connection connection

A `node` or `app` first need to open a connection to a signaling server in order to exchange data needed to find each other.

The implemented server use `websockets`.

1. Each `peer` opens a `websocket` connection to the server
2. Each `peer` subscribes to a `channel` to expect responses. Each `peer` can open a channel with its chosen unique id (a random one). To subscribe, they send a message to the websocket with the following data:

```jsonc
{
    "type": "subscribe",
    id // peer id to receive messages
}
```

3. Each `peer` sends signaling data (see [simple-peer documentation](https://github.com/feross/simple-peer#peeronsignal-data--) documentation) whenever the `signal` event is emitted to a specific `peer` id, specifying its own `fromId` in order to receive the response back.

```jsonc
{
    "type": "signal",
    fromId, // client or node id
    fromName, // Device name
    toId, // client or node id
    signal
}
```

4. When a new peer try to connect for the first time, we ask on the receiving peer to accept or reject the new connection. Once the user has accepted/rejected, we save the nodeId in a accepted/rejected list.

5. Once `peers` has exchanged signals data (`offer` & `answer`), a webrtc connection should be established between an `app` and `node` with `simple-peer`.
