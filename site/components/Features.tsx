import {
  Files,
  Filter,
  FolderOpen,
  HeartHandshake,
  Link2,
  MonitorSmartphone,
  Moon,
  Search,
  Share2,
  Tags,
  Zap,
} from "@tamagui/lucide-icons";
import { H2, Paragraph, Separator, XStack, YStack } from "tamagui";

export const Features = () => {
  return (
    <YStack mt="$16" gap="$4">
      <H2 fontWeight="bold" mb="$4" textAlign="center">
        Features
      </H2>
      <XStack gap="$2">
        <MonitorSmartphone style={{ flexShrink: 0 }} />
        <Paragraph>
          Available on Windows, Linux, Android, and soon on MacOs & iOS !
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Moon style={{ flexShrink: 0 }} />
        <Paragraph>
          A modern and clean user interface, with dark mode support
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Zap style={{ flexShrink: 0 }} />
        <Paragraph>
          Supercharge your download speeds, with low cpu & memory usage
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Tags style={{ flexShrink: 0 }} />
        <Paragraph>Add tags to your torrents</Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Files style={{ flexShrink: 0 }} />
        <Paragraph>Select files to download or to pause</Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <FolderOpen style={{ flexShrink: 0 }} />
        <Paragraph>Browse and open files included in your torrents</Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <HeartHandshake style={{ flexShrink: 0 }} />
        <Paragraph>Open Source software</Paragraph>
      </XStack>
    </YStack>
  );
};
