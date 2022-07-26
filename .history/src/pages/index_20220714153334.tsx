import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box as="section" w="100%" maxH="300px" bgImage="url('/images/Background.png')">
        <Flex
          maxW={1480}
          mx="auto"
          justify="space-between"
          p={12}
          align="center"
        >
          <Box>
            <Text fontSize={30} color="white">
              5 Continentes, infinitas possibilidades.
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
