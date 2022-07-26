import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box as="section" w="100%" bgImage="url('/images/Background.png')">
        <Flex maxW={1480} mx="auto" justify="space-between">
          <Box>
            <h1>Chegou o grande dia</h1>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
