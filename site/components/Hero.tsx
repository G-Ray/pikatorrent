import { H2, H3, H4, H6, XStack, YStack } from "tamagui";
import { useThemeName } from "tamagui";
import { Logo } from "./Logo";
import Link from "next/link";

export const Hero = () => {
  return (
    <YStack>
      <XStack jc="center" my="$4">
        <LogoWithText />
      </XStack>
      <H4 mb="$2" textAlign="center" fontWeight="bold">
        The Torrent app for the 21st century
      </H4>
      <H6 textAlign="center">An easy to use Torrent app for everyone.</H6>
    </YStack>
  );
};

const LogoWithText = () => {
  const theme = useThemeName();
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <XStack ai="center">
        <Logo width={48} height={48} theme={theme} />
        <H2 color="$yellow9" fontWeight="600">
          Pika
        </H2>
        <H2 fontWeight="600">Torrent</H2>
      </XStack>
    </Link>
  );
};
