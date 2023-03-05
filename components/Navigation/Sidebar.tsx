import { YStack } from "tamagui";
import React from "react";
import { ButtonLink } from "./ButtonLink";

import { buttons } from "./buttons";

export const Sidebar = () => {
  return (
    <YStack p="$8" gap="$4">
      {buttons.map((button, index) => (
        <ButtonLink key={index} {...button} />
      ))}
    </YStack>
  );
};
