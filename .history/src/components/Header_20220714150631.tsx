import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      bg="red.100"
      mx="auto"
      align="center"
      justify="center"
    >
      <img src="../../public/images/Header.png" />
    </Flex>
  );
}
