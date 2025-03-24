import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, useThemeName, XStack, YStack } from "tamagui";

export const Screenshots = () => {
  const [desktopImageSource, setDesktopImageSource] =
    useState("/desktop-light.png");
  const [mobileImageSource, setMobileImageSource] =
    useState("/mobile-light.png");

  const theme = useThemeName();

  useEffect(() => {
    setDesktopImageSource(
      theme === "light" ? "/desktop-light.png" : "/desktop-dark.png"
    );
    setMobileImageSource(
      theme === "light" ? "/mobile-light.png" : "/mobile-dark.png"
    );
  }, [theme]);

  return (
    <XStack
      alignItems="center"
      width={"100%"}
      maxWidth={1024}
      gap="$4"
      justifyContent="space-between"
    >
      <Link href={desktopImageSource} target="_blank" style={{ width: "65%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={desktopImageSource}
          alt="Desktop & tablets screenshot"
          width={"100%"}
        />
      </Link>
      <Link href={mobileImageSource} target="_blank" style={{ width: "35%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mobileImageSource} alt="Mobile screenshot" width={"100%"} />
      </Link>
    </XStack>
  );
};
