import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      mx="auto"
      align="center"
      justify="center"
      p="2"
    >
      <Link href="/">
      <Image src="images/logo.png" alt="WorldTrip" />
      </Link>
    </Flex>
  );
}
