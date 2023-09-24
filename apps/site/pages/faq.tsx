import Link from 'next/link'
import { H2, H3, Paragraph, Separator, YStack } from 'tamagui'

export default function FAQ() {
  return (
    <YStack ai="center" style={{ wordBreak: 'break-all' }}>
      <YStack space mt="$8" px="$8" pb="$16" maxWidth={800}>
        <H2 fontWeight="bold" textAlign="center" mb="$8">
          Frequently Asked Questions
        </H2>
        <H3 fontWeight="bold">What is PikaTorrent ?</H3>
        <Paragraph>
          PikaTorrent is a cross-platform and open source Bittorrent client. It
          is currently available for Android, Linux, and Windows. A MacOS & iOS
          app might arrive later.
        </Paragraph>
        <H3 fontWeight="bold">Why PikaTorrent ?</H3>
        <Paragraph>
          People are used to centralized services to download and share files or
          stream videos. These services are often easy-to-use, but can have
          drawbacks:
          <ul>
            <li>Share links can expire</li>
            <li>Sharing big files can be costly</li>
            <li>Website can have downtime</li>
            <li>Speed can be slow, depending on servers load and bandwidth</li>
          </ul>
          With PikaTorrent, we try to offer the tools to redecentralize our
          files shares. BitTorrent is a very efficient protocol to share files.
          By using BitTorrent, PikaTorrent offers:
          <ul>
            <li>
              Unstoppable files sharing (while at least one device shares the
              files)
            </li>
            <li>Unlimited download speeds</li>
            <li>Sharing at no cost</li>
          </ul>
          While still offering an easy to use interface.
        </Paragraph>
        <H3 fontWeight="bold">{`Isn't bittorrent illegal ?`}</H3>
        <Paragraph>
          Using BitTorrent is not illegal by itself. However, in most countries,
          sharing copyrighted content without permission is prohibited.
        </Paragraph>
        <H3 fontWeight="bold">
          Why would I use PikaTorrent instead of uTorrent, qbittorrent, deluge,
          transmission, libretorrent... ?
        </H3>
        <Paragraph>
          uTorrent (and the BitTorrent client from the same company) has gained
          a bad reputation over time by installing toolbars, displaying ads and
          installing a cryptocurrency miner (see{' '}
          <Link
            target="_blank"
            href="https://en.wikipedia.org/wiki/%CE%9CTorrent"
          >
            https://en.wikipedia.org/wiki/MTorrent
          </Link>
          ). Open source softwares like qBittorrent, deluge, libretorrent or
          Transmission for instance, are great BitTorrent clients. In fact,
          PikaTorrent even uses the same engine as Transmission:
          libtransmission.
        </Paragraph>
        <Paragraph>
          However, we think these software might target more advanced users than
          PikaTorrent. For now, PikaTorrent might offers these nice features
          compared to alternatives:
          <ul>
            <li>An easy-to-use, modern interface</li>
            <li>Linking between the mobile app and desktop app</li>
            <li>Direct link sharing</li>
            <li>Search engines customization</li>
          </ul>
          If you would like to request features missing in PikaTorrent, you can
          do so on{' '}
          <Link
            href="https://github.com/G-Ray/pikatorrent/issues/new"
            target="_blank"
          >
            Github
          </Link>
          .
        </Paragraph>
        <H3 fontWeight="bold">
          How does linking works between mobile & desktop ?
        </H3>
        <Paragraph>
          {`The desktop application displays a qrcode in the settings section. You
        can flash it from the native mobile app, from Nodes -> scan QRCode
          . Once you confirm the connection from the desktop app, you should be
          able to control your desktop app from the mobile app. You don't need
          to register for an account, and the connection is secured with
          end-to-end encryption, thanks to WebRTC. Please note this might not
          work behind some restricted networks.`}
        </Paragraph>
        <H3 fontWeight="bold">Can I search for torrents with PikaTorrent ?</H3>
        <Paragraph>
          PikaTorrent allows to customize a list of preferred torrent search
          engines. This feature is a time-saving shortcut that opens your
          browser, opens a new tab, and types your query.
        </Paragraph>
        <H3 fontWeight="bold">
          Where can I find my downloaded files on Android ?
        </H3>
        <Paragraph>
          {`For security reasons, Android restricts accessible folders to
          applications. For now, downloaded files are saved in a private app
          folder. You can still open your files directly from PikaTorrent, with
          the "Files" entry of a torrent.`}
        </Paragraph>
        <H3 fontWeight="bold">Can I use PikaTorrent on the web ?</H3>
        <Paragraph>
          If you are an advanced user, you can start a pikatorrent node from a
          headless server, and use the displayed secret URL to link
          app.pikatorrent.com. See instructions on{' '}
          <Link
            href="https://www.npmjs.com/package/pikatorrent"
            target="_blank"
          >
            npmjs.com
          </Link>
        </Paragraph>
        <H3 fontWeight="bold">Can I stream torrents with PikaTorrent ?</H3>
        <Paragraph>
          Sequential downloading is planned to be worked on soon...
        </Paragraph>
        <H3 fontWeight="bold">Can I create torrents with PikaTorrent ?</H3>
        <Paragraph>
          Creating torrents from PikaTorrent is planned to be worked on soon...
        </Paragraph>
      </YStack>
    </YStack>
  )
}
