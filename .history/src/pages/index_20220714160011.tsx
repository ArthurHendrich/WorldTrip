import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

import {} from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box
        as="section"
        w="100%"
        maxH="300px"
        bgImage="url('/images/Background.png')"
        objectFit="cover"
      >
        <Flex
          maxW={1480}
          mx="auto"
          paddingX="6rem"
          display="flex"
          alignItems="center"
        >
          <Box flex="1" justifyContent="center" lineHeight={1.35}>
            <Text fontSize={36} color="gray.100">
              5 Continentes,
            </Text>
            <Text fontSize={36} color="gray.100">
              infinitas possibilidades.
            </Text>
            <Text fontSize={18} mt={4} color="gray.400">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
            </Text>
          </Box>
          <Box>
            <Image mt="2rem" src="/images/Airplane.png" alt="airplane" />
          </Box>
        </Flex>
      </Box>

      <Box as="section" maxW={1480} mx="auto" display="flex">
        teste
      </Box>

    </>
  );
}
