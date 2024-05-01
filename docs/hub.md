# Hub

The `hub` is a signaling server, to discover webrtc peers.

## Deploy a hub instance

Example of `docker-compose.yml` to deploy a hub with automatic TLS with caddy.

```yml
version: '3'

services:
  hub:
    image: docker.io/library/node:18-slim
    restart: unless-stopped
    command: sh -c "apt update && apt install -y git cmake && npm i -g pikatorrent && pikatorrent hub"

  caddy:
    image: docker.io/library/caddy:2-alpine
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
