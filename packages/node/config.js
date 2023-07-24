const { NODE_ENV } = process.env

const development = {
  SIGNALING_URL: 'ws://localhost:9001',
  APP_URL: 'http://localhost:8081',
}

const production = {
  SIGNALING_URL: 'wss://hub.pikatorrent.com',
  APP_URL: 'https://app.pikatorrent.com',
}

export default NODE_ENV === 'production' ? production : development
