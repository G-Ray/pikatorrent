import { YStack } from "tamagui";

import { Screenshots } from "../components/Screenshots";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DownloadLinks } from "@/components/DownloadLinks";

export default function Home() {
  return (
    <YStack ai="center" px="$8" pb="$16">
      <YStack gap="$8" ai="center">
        <Hero />

        <DownloadLinks />
      </YStack>

      <Screenshots />

      <Features />
    </YStack>
  );
}
