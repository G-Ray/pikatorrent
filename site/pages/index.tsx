import { Paragraph, YStack } from "tamagui";

import { Screenshots } from "../components/Screenshots";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DownloadLinks } from "@/components/DownloadLinks";

export default function Home() {
  return (
    <YStack ai="center" px="$8" pb="$4" gap="$4">
      <YStack gap="$8" ai="center">
        <Hero />
      </YStack>

      <Screenshots />

      <DownloadLinks />

      <Features />

      {/* <Paragraph mt="$8">Google Play is a trademark of Google LLC.</Paragraph> */}
    </YStack>
  );
}
