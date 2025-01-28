import { useEffect, useState } from "react";
import { Card, useThemeName, YStack } from "tamagui";

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
    <YStack pt={32} px="$4" alignItems="center" width={"100%"} gap="$8">
      <Card
        theme="yellow"
        style={{ textAlign: "center" }}
        borderWidth={"$0.5"}
        borderRadius={"$4"}
        borderColor={"$yellow9"}
        backgroundColor={theme == "light" ? "none" : "$background"}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={desktopImageSource}
          alt="Desktop & tablets screenshot"
          width={"100%"}
        />
      </Card>
      <Card
        theme="yellow"
        style={{ textAlign: "center" }}
        maxWidth={360}
        borderWidth={"$0.5"}
        borderRadius={"$4"}
        borderColor={"$yellow9"}
        backgroundColor={theme == "light" ? "none" : "$background"}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mobileImageSource} alt="Mobile screenshot" width={"100%"} />
      </Card>
    </YStack>
  );
};
