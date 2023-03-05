import React from "react";
import { Separator, XStack, YStack } from "tamagui";
import { ButtonLink } from "./ButtonLink";

import { buttons } from "./buttons";

export const BottomTabs = () => {
  return (
    <YStack w="100%">
      <Separator />
      <XStack jc="space-around" p="$4" gap="$4">
        {buttons.map((button, index) => (
          <ButtonLink key={index} {...button} />
        ))}
      </XStack>
    </YStack>
  );
};
