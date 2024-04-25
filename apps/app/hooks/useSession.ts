import { useCallback, useContext, useEffect, useState } from 'react'
import { NodeContext } from '../contexts/NodeContext'

// See https://github.com/transmission/transmission/blob/main/docs/rpc-spec.md
interface Session {
  'alt-speed-down': number // max global download speed (KBps)
  'alt-speed-enabled': boolean // true means use the alt speeds
  'alt-speed-time-begin': number // when to turn on alt speeds (units: minutes after midnight)
  'alt-speed-time-day': number // what day(s) to turn on alt speeds (look at tr_sched_day)
  'alt-speed-time-enabled': boolean // true means the scheduled on/off times are used
  'alt-speed-time-end': number // when to turn off alt speeds (units: same)
  'alt-speed-up': number // max global upload speed (KBps)
  'blocklist-enabled': boolean // true means enabled
  'blocklist-size': number // number of rules in the blocklist
  'blocklist-url': string // location of the blocklist to use for blocklist-update
  'cache-size-mb': number // maximum size of the disk cache (MB)
  'config-dir': string // location of transmission's configuration directory
  'default-trackers': string // list of default trackers to use on public torrents
  'dht-enabled': boolean // true means allow dht in public torrents
  'download-dir': string // default path to download torrents
  'download-dir-free-space': number //	DEPRECATED Use the free-space method instead.
  'download-queue-enabled': boolean // if true, limit how many torrents can be downloaded at once
  'download-queue-size': number //	max number of torrents to download at once (see download-queue-enabled)
  encryption: 'required' | 'preferred' | 'tolerated'
  'idle-seeding-limit-enabled': boolean // true if the seeding inactivity limit is honored by default
  'idle-seeding-limit': number // torrents we're seeding will be stopped if they're idle for this long
  'incomplete-dir-enabled': boolean // true means keep torrents in incomplete-dir until done
  'incomplete-dir': string // path for incomplete torrents, when enabled
  'lpd-enabled': boolean // true means allow Local Peer Discovery in public torrents
  'peer-limit-global': number // maximum global number of peers
  'peer-limit-per-torrent': number // maximum global number of peers
  'peer-port-random-on-start': boolean // true means pick a random peer port on launch
  'peer-port': number // 	port number
  'pex-enabled': boolean // 	true means allow pex in public torrents
  'port-forwarding-enabled': boolean // true means ask upstream router to forward the configured peer port to transmission using UPnP or NAT-PMP
  'queue-stalled-enabled': boolean // whether or not to consider idle torrents as stalled
  'queue-stalled-minutes': number // torrents that are idle for N minuets aren't counted toward seed-queue-size or download-queue-size
  'rename-partial-files': boolean // true means append .part to incomplete files
  'rpc-version-minimum': number // the minimum RPC API version supported
  'rpc-version-semver': string //	the current RPC API version in a semver-compatible string
  'rpc-version': number // the current RPC API version
  'script-torrent-added-enabled': boolean // whether or not to call the added script
  'script-torrent-added-filename': string //filename of the script to run
  'script-torrent-done-enabled': boolean //	whether or not to call the done script
  'script-torrent-done-filename': string //	filename of the script to run
  'script-torrent-done-seeding-enabled': boolean //	whether or not to call the seeding-done script
  'script-torrent-done-seeding-filename': string //	filename of the script to run
  'seed-queue-enabled': boolean //if true, limit how many torrents can be uploaded at once
  'seed-queue-size': number //max number of torrents to uploaded at once (see seed-queue-enabled)
  seedRatioLimit: number // the default seed ratio for torrents to use
  seedRatioLimited: boolean //true if seedRatioLimit is honored by default
  'speed-limit-down-enabled': boolean //true means enabled
  'speed-limit-down ': number //max global download speed (KBps)
  'speed-limit-up-enabled': boolean // true means enabled
  'speed-limit-up': number //max global upload speed (KBps)
  'start-added-torrents': boolean // true means added torrents will be started right away
  'trash-original-torrent-files': boolean // true means the .torrent file of added torrents will be deleted
  units: Units // see below
  'utp-enabled': boolean // 	true means allow utp
  version: string
}

interface Units {
  'speed-units': string[] // 4 strings: KB/s, MB/s, GB/s, TB/s
  'speed-bytes': number //	number of bytes in a KB (1000 for kB; 1024 for KiB)
  'size-units': string[] // 4 strings: KB/s, MB/s, GB/s, TB/s
  'size-bytes': number // number of bytes in a KB (1000 for kB; 1024 for KiB)
  'memory-units': string[] // 4 strings: KB/s, MB/s, GB/s, TB/s
  'memory-bytes': number // number of bytes in a KB (1000 for kB; 1024 for KiB)
}

export const useSession = () => {
  const { sendRPCMessage } = useContext(NodeContext)
  const [session, setSession] = useState<Session | Record<string, never>>({})

  const fetchSession = useCallback(async () => {
    try {
      const response = await sendRPCMessage({
        method: 'session-get',
      })

      setSession(response.arguments)
    } catch (e) {
      console.log('error fetching session info', e)
    }
  }, [sendRPCMessage])

  useEffect(() => {
    fetchSession()
  }, [sendRPCMessage, fetchSession])

  return { session, fetchSession }
}
