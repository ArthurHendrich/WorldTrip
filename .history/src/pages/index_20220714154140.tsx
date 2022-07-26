import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

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
      >
        <Flex
          maxW={1480}
          mx="auto"
          justify="space-between"
          py={12}
          px={30}
          align="flex-start"
        >
          <Box flex="1" justifyContent="center">
            <Text fontSize={36} color="gray.100">
              5 Continentes
            </Text>
            <Text fontSize={36} color="gray.100">
              infinitas possibilidades.
            </Text>
            <Text>
              {" "}
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
            </Text>
          </Box>
          <Box>
            <Image src="/images/Airplane.png" alt="airplane" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
