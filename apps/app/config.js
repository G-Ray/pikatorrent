const { NODE_ENV } = process.env

const development = {
  SIGNALING_URL: process.env.SIGNALING_URL || 'ws://localhost:9001',
  APP_URL: process.env.APP_URL || 'http://localhost:8081',
  // Availabe flags: none
  FEATURES_FLAGS: [],
}

const production = {
  SIGNALING_URL: 'wss://hub.pikatorrent.com',
  APP_URL: 'https://app.pikatorrent.com',
  FEATURES_FLAGS: [],
}

module.exports = NODE_ENV === 'production' ? production : development
