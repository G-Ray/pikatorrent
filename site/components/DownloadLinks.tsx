import { Button, XStack, YStack } from "tamagui";
import { Download, ExternalLink } from "@tamagui/lucide-icons";

import Link from "next/link";

export const DownloadLinks = () => {
  return (
    <YStack ai="center" gap="$4">
      <XStack gap="$4" flexWrap="wrap" justifyContent="center">
        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.10.0/pikatorrent-windows.zip"
          }
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$4" iconAfter={Download} borderColor={"$yellow9"}>
            Windows (portable .zip)
          </Button>
        </Link>

        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.10.0/pikatorrent-linux.zip"
          }
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$4" iconAfter={Download} borderColor={"$yellow9"}>
            Linux (.zip)
          </Button>
        </Link>

        <Button disabled size="$4">
          MacOS (Soon)
        </Button>
      </XStack>

      <XStack gap="$4" flexWrap="wrap" justifyContent="center">
        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.10.0/pikatorrent-windows.zip"
          }
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$4" iconAfter={Download} borderColor={"$yellow9"}>
            Android (.apk)
          </Button>
        </Link>

        <Link
          href={
            "https://github.com/G-Ray/pikatorrent/releases/download/v0.10.0/pikatorrent-android.apk"
          }
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$4">iOS (Soon)</Button>
        </Link>
      </XStack>

      <YStack ai="center">
        <Link
          href={"https://github.com/G-Ray/pikatorrent/releases"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="$2" icon={ExternalLink} bc="$backgroundTransparent">
            All downloads
          </Button>
        </Link>
      </YStack>
    </YStack>
  );
};
