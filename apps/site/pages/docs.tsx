import Link from 'next/link'
import { Button, H2, H3, Paragraph, Separator, XStack, YStack } from 'tamagui'

export default function Docs() {
  return (
    <YStack ai="center" style={{ wordBreak: 'break-all' }}>
      <YStack space mt="$8" px="$8" pb="$16" maxWidth={800}>
        <H2 fontWeight="bold" textAlign="center" mb="$8">
          Documentation
        </H2>
        <H3 fontWeight="bold">Installation</H3>
        <Paragraph>
          {`The recommended way to install PikaTorrent is from the app stores. You
          will receive automatic updates, and the app will be associated with
          "magnet:" and "pikatorrent:" links, as well as .torrent files on the
          desktop. You can find the store links for Android, Linux, and Windows
          on the`}{' '}
          <Link href="/">home page</Link>.
        </Paragraph>
        <Paragraph>
          If you prefer, you can access alternative downloads (setup.exe,
          portable .zip version, .apk) on the{' '}
          <Link
            target="_blank"
            href="https://github.com/G-Ray/pikatorrent/releases"
          >
            Github release page
          </Link>
          {`, by expanding the "Assets" section.`}
        </Paragraph>
        <H3 fontWeight="bold">
          Casting media files from the PikaTorrent mobile app
        </H3>
        <Paragraph>
          Using the Android app, you can cast media files (videos, music, etc.)
          with an external app like{' '}
          <Link target="_blank" href="https://www.videolan.org">
            VLC
          </Link>
          {`. Open the file you want to stream from the "Files" menu with VLC, and
          VLC will display a cast icon to stream to your available devices.`}
        </Paragraph>
        <H3 fontWeight="bold">Supported languages</H3>
        <Paragraph>
          Currently, preliminary translations are available for French, Russian,
          and Brazilian Portuguese.
        </Paragraph>
        <Paragraph>
          Please{' '}
          <Link
            href="https://github.com/G-Ray/pikatorrent/blob/main/docs/localization.md"
            target="_blank"
          >
            help us supporting more languages.
          </Link>
        </Paragraph>
        <H3 fontWeight="bold">Edit all Transmission settings</H3>
        <Paragraph>
          PikaTorrent uses libtransmission, the same lightweight, fast, and
          portable BitTorrent engine that{' '}
          <Link target="_blank" href="https://transmissionbt.com">
            Tranmission{' '}
          </Link>
          uses.
        </Paragraph>
        <Paragraph>
          {`You can edit all Transmission settings by modifying the
          "settings.json" file in PikaTorrent's config folder. Make sure to
          close PikaTorrent before saving your changes.`}
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Windows: %APPDATA%\pikatorrent\Config\transmission (for example,
              C:\Users\USERNAME\AppData\Roaming\pikatorrent\Config)
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Linux: ~/.config/pikatorrent/transmission (or
              $XDG_CONFIG_HOME/pikatorrent/transmission). If you installed
              PikaTorrent from flathub.org it should be
              ~/.var/app/com.pikatorrent.PikaTorrent/config/pikatorrent/transmission/
            </Paragraph>
          </li>
        </ul>
        <Link
          href="https://github.com/G-Ray/pikatorrent/edit/main/apps/site/pages/docs.tsx"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Button>Edit this page</Button>
        </Link>
      </YStack>
    </YStack>
  )
}
