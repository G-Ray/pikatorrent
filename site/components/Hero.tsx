import { H1, H2, H3, H4, H6, XStack, YStack } from "tamagui";
import { useThemeName } from "tamagui";
import { Logo } from "./Logo";
import Link from "next/link";

export const Hero = () => {
  return (
    <YStack>
      <XStack jc="center" my="$4">
        <LogoWithText />
      </XStack>
      <H2 mb="$2" textAlign="center" fontWeight="bold">
        Just pick a Torrent
      </H2>
      <H3 textAlign="center">
        Stream and download torrents on all your devices.
      </H3>
    </YStack>
  );
};

const LogoWithText = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <XStack ai="center" gap="$4">
        <Logo />
        <XStack>
          <H1
            style={{
              background:
                "linear-gradient(to right, rgb(255, 214, 0), rgb(255, 255, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Pika
          </H1>
          <H1>Torrent</H1>
        </XStack>
      </XStack>
    </Link>
  );
};
