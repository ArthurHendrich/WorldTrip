import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      mx="auto"
      align="center"
      justify="center"
      p="4"
    >
      <Image src="images/logo.png" alt="WorldTrip" />
    </Flex>
  );
}
