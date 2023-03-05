import { Circle, Paragraph, Text, XStack } from "tamagui";

export const ConnectionStatus = () => {
  return (
    <XStack ai="center" gap="$2">
      <Circle bc="$green9" size={12} />
      <Paragraph>Connected</Paragraph>
    </XStack>
  );
};
