# Hub

The `hub` is a signaling server, to discover webrtc peers.

## Deploy a hub instance

Example of `docker-compose.yml` to deploy a hub with automatic TLS with caddy.

```yml
version: '3'

services:
  hub:
    image: node:18
    restart: unless-stopped
    command: sh -c "npm install -g @pikatorrent/hub && node /usr/local/lib/node_modules/@pikatorrent/hub"

  caddy:
    image: caddy:2.6-alpine
    restart: unless-stopped
    command: caddy reverse-proxy --from hub.pikatorrent.com --to hub:9001
    ports:
      - '80:80'
      - '443:443'
      - '443:443/udp'
    volumes:
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```
