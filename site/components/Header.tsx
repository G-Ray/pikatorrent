import {
  Download,
  Github,
  Home,
  MessagesSquare,
  Moon,
  Sun,
  Zap,
} from "@tamagui/lucide-icons";
import { useThemeSetting } from "@tamagui/next-theme";
import { Button, Switch, XStack, useMedia, useThemeName } from "tamagui";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const media = useMedia();

  return (
    <XStack my="$2" px="$2" flexWrap="wrap">
      <Links />
      <XStack ml={media.gtXs ? "auto" : null}>
        <DarkModeToggle />
      </XStack>
    </XStack>
  );
};

const Links = () => {
  return (
    <>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Button fontWeight={"bold"} icon={Home} bc="$backgroundTransparent">
          Home
        </Button>
      </Link>
      <Link
        href="https://discord.gg/6HxCV4aGdy"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Button
          fontWeight={"bold"}
          icon={MessagesSquare}
          bc="$backgroundTransparent"
        >
          Discord
        </Button>
      </Link>
      <Link
        href="https://github.com/G-Ray/pikatorrent"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Button fontWeight={"bold"} icon={Github} bc="$backgroundTransparent">
          Github
        </Button>
      </Link>
    </>
  );
};

const DarkModeToggle = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const themeSettings = useThemeSetting();
  const theme = useThemeName();

  if (!isClient) {
    return null;
  }

  return (
    <XStack px="$4" ai="center" gap="$2">
      {theme === "light" ? <Sun /> : <Moon />}
      <Switch
        id="dark-theme-switch"
        checked={theme === "dark"}
        onCheckedChange={() =>
          themeSettings.set(theme === "dark" ? "light" : "dark")
        }
      >
        <Switch.Thumb animation="quick" />
      </Switch>
    </XStack>
  );
};
