import { Button, Separator, Stack, XStack, YStack } from "tamagui";
import { Download, ExternalLink } from "@tamagui/lucide-icons";

import Link from "next/link";

export const DownloadLinks = () => {
  return (
    <YStack ai="center" rowGap={"$2"}>
      <XStack gap="$2" flexWrap="wrap" justifyContent="center">
        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.11.1/PikaTorrent-v0.11.1-windows-x64.zip"
          }
          style={{ textDecoration: "none" }}
        >
          <Button size="$3" iconAfter={Download} borderColor={"$purple9"}>
            Windows (.zip)
          </Button>
        </Link>

        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.11.1/PikaTorrent-v0.11.1-linux-x64.zip"
          }
          style={{ textDecoration: "none" }}
        >
          <Button size="$3" iconAfter={Download} borderColor={"$purple9"}>
            Linux x64 (.zip)
          </Button>
        </Link>

        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.11.1/PikaTorrent-v0.11.1-linux-arm64.zip"
          }
          style={{ textDecoration: "none" }}
        >
          <Button size="$3" iconAfter={Download} borderColor={"$purple9"}>
            Linux arm64 (.zip)
          </Button>
        </Link>

        <Button size="$3" disabled>
          MacOS (Soon)
        </Button>
      </XStack>

      <XStack gap="$2" flexWrap="wrap" justifyContent="center">
        <Link href={"https://flathub.org/apps/com.pikatorrent.PikaTorrent"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/flathub-badge.webp" alt="flathub badge" height={48} />
        </Link>

        {/* <Link href="https://apps.microsoft.com/detail/9n9gjq9bdjw3?mode=direct">
          <img
            src="https://get.microsoft.com/images/en-us%20dark.svg"
            alt=""
            height={48}
          />
        </Link> */}
      </XStack>

      <Separator w="100%" my="$4" borderWidth={"$0.5"} />

      <XStack gap="$2" flexWrap="wrap" justifyContent="center">
        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.11.1/PikaTorrent-v0.11.1-android.apk"
          }
          style={{ textDecoration: "none" }}
        >
          <Button size="$3" iconAfter={Download} borderColor={"$purple9"}>
            Android (.apk)
          </Button>
        </Link>

        <Button size="$3" disabled>
          iOS (Soon)
        </Button>
      </XStack>

      <XStack gap="$2" flexWrap="wrap" justifyContent="center">
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
      </XStack>

      <YStack ai="center">
        <Link
          href={"https://github.com/G-Ray/pikatorrent/releases"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$3" icon={ExternalLink} bc="$backgroundTransparent">
            All downloads
          </Button>
        </Link>
      </YStack>
    </YStack>
  );
};
