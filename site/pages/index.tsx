import { Paragraph, YStack } from "tamagui";

import { Screenshots } from "../components/Screenshots";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DownloadLinks } from "@/components/DownloadLinks";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.substring(1).length > 0) {
      const appLink = "pikatorrent://#" + hash.substring(1);
      window.location.href = appLink;
    }
  }, [params]);

  return (
    <YStack ai="center" px="$8" pb="$4" gap="$4">
      <YStack py="$4" gap="$8" ai="center">
        <Hero />
      </YStack>

      <YStack gap="$8">
        <DownloadLinks />

        <Screenshots />

        <Features />
      </YStack>

      <Paragraph mt="$8">Google Play is a trademark of Google LLC.</Paragraph>
    </YStack>
  );
}
