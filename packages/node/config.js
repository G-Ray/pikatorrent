const { NODE_ENV } = process.env

const commonConfig = {
  WEBSOCKET_RETRY_DELAY: 5000,
}

const development = {
  ...commonConfig,
  SIGNALING_URL: 'ws://localhost:9001',
  APP_URL: 'http://localhost:8081',
}

const production = {
  ...commonConfig,
  SIGNALING_URL: 'wss://hub.pikatorrent.com',
  APP_URL: 'https://app.pikatorrent.com',
}

export default NODE_ENV === 'production' ? production : development
