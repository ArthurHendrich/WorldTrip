import { Flex, Image } from "@chakra-ui/react";
import header from '../../public/images/Header.png';

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
      <img src="../../public/images/Header.png" alt="teste"/>
    </Flex>
  );
}
