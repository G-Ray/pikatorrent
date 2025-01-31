import { Github, MessagesSquare, Moon, Sun } from "@tamagui/lucide-icons";
import { useThemeSetting } from "@tamagui/next-theme";
import { Button, Switch, XStack, useThemeName } from "tamagui";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  return (
    <XStack ml="auto" my="$2" mr="$2">
      <XStack gap="$4">
        <Links />
        <DarkModeToggle />
      </XStack>
    </XStack>
  );
};

const Links = () => {
  return (
    <XStack gap="$2" f={1} flexWrap="wrap">
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
    </XStack>
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
    <XStack ai="center" gap="$2">
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
