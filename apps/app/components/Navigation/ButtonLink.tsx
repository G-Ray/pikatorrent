import { Link, usePathname } from "expo-router";
import { Button } from "tamagui";

export const ButtonLink = ({ title, href, icon }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} asChild style={{ textDecorationLine: "none" }}>
      <Button
        size="$6"
        br={50}
        icon={icon}
        theme={isActive ? "yellow" : null}
        active={isActive}
      >
        {title}
      </Button>
    </Link>
  );
};
