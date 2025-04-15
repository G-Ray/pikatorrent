import {
  Button,
  H2,
  Paragraph,
  Separator,
  Stack,
  useThemeName,
  XStack,
  YStack,
} from "tamagui";
import { Apple, Download, ExternalLink } from "@tamagui/lucide-icons";

import Link from "next/link";
import { Windows } from "./icons/Windows";
import { Linux } from "./icons/Linux";
import { Android } from "./icons/Android";

const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION;

if (!APP_VERSION) {
  throw new Error("APP_VERSION should be defined");
}

const downloadLinkPrefix = `https://github.com/G-Ray/pikatorrent/releases/download/v${APP_VERSION}/PikaTorrent-v${APP_VERSION}`;

export const DownloadLinks = () => {
  const theme = useThemeName();

  const iconColor = theme == "dark" ? "white" : "black";

  return (
    <YStack ai="center" rowGap={"$2"} id="downloads">
      <H2 fontWeight="bold" mb="$4" textAlign="center">
        Downloads
      </H2>

      <XStack columnGap="$16" rowGap="$8" flexWrap="wrap" jc="center">
        <YStack gap="$2" ai="center">
          <Windows height={32} fill={iconColor} />
          <Paragraph textAlign="center" fontSize={"$6"}>
            Windows
          </Paragraph>

          <Link
            href={"https://apps.microsoft.com/detail/9n9gjq9bdjw3?mode=direct"}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/microsoft-store-badge-english.svg"
              alt="flathub badge"
              height={48}
            />
          </Link>

          <Link
            href={`${downloadLinkPrefix}-windows-x64.zip`}
            style={{ textDecoration: "none" }}
          >
            <Button
              size="$3"
              iconAfter={Download}
              borderColor={"$purple9"}
              w="100%"
            >
              Portable (.zip)
            </Button>
          </Link>
        </YStack>
        <YStack gap="$2" ai="center">
          <Linux height={32} fill={iconColor} />
          <Paragraph textAlign="center" fontSize={"$6"}>
            Linux
          </Paragraph>
          <Paragraph textAlign="center">Flathub (Recommended)</Paragraph>
          <Link href={"https://flathub.org/apps/com.pikatorrent.PikaTorrent"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flathub-badge.webp" alt="flathub badge" height={48} />
          </Link>
          <Paragraph textAlign="center">
            Binaries (needs dependencies)
          </Paragraph>
          <Link
            href={`${downloadLinkPrefix}-linux-x64.zip`}
            style={{ textDecoration: "none" }}
          >
            <Button
              size="$3"
              iconAfter={Download}
              borderColor={"$purple9"}
              w="100%"
            >
              x64 (.zip)
            </Button>
          </Link>
          <Link
            href={`${downloadLinkPrefix}-linux-arm64.zip`}
            style={{ textDecoration: "none" }}
          >
            <Button
              size="$3"
              iconAfter={Download}
              borderColor={"$purple9"}
              w="100%"
            >
              arm64 (.zip)
            </Button>
          </Link>
        </YStack>
        <YStack gap="$2" ai="center">
          <Apple height={32} fill={iconColor} />
          <Paragraph textAlign="center" fontSize={"$6"}>
            MacOS
          </Paragraph>
          <Link
            href={`${downloadLinkPrefix}-macos-universal-experimental.app.zip`}
            style={{ textDecoration: "none" }}
          >
            <Paragraph textAlign="center">
              Experimental, unsigned binary
            </Paragraph>
            <Button
              size="$3"
              iconAfter={Download}
              borderColor={"$purple9"}
              w="100%"
            >
              Portable (.zip)
            </Button>
          </Link>
        </YStack>
      </XStack>

      <Separator w="100%" my="$4" borderWidth={"$0.5"} />

      <XStack columnGap="$16" rowGap="$8" flexWrap="wrap" jc="center">
        <YStack gap="$2" ai="center">
          <Android height={32} fill={iconColor} />

          <Paragraph textAlign="center" fontSize={"$6"}>
            Android
          </Paragraph>

          <Link
            href={
              "http://play.google.com/store/apps/details?id=com.pikatorrent.PikaTorrent"
            }
            style={{ textDecoration: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/google-play-badge-engligh.png"
              alt="google play badge"
              height={48}
            />
          </Link>

          <Link
            href={`${downloadLinkPrefix}-android.apk`}
            style={{ textDecoration: "none" }}
          >
            <Button size="$3" iconAfter={Download} borderColor={"$purple9"}>
              .apk
            </Button>
          </Link>
        </YStack>

        <YStack gap="$2" ai="center">
          <Apple height={32} fill={iconColor} />

          <Paragraph textAlign="center" fontSize={"$6"}>
            iOS
          </Paragraph>
          <Paragraph textAlign="center">Soon...</Paragraph>
        </YStack>
      </XStack>

      <Separator w="100%" my="$4" borderWidth={"$0.5"} />

      <YStack ai="center">
        <Link
          href={"https://github.com/G-Ray/pikatorrent/releases"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$3" icon={ExternalLink} borderColor={"$purple9"}>
            All downloads
          </Button>
        </Link>
      </YStack>
    </YStack>
  );
};
