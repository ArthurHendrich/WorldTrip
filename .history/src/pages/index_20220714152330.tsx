import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box as="section" w="100%" bgImage="url('/images/Background.png')">
        <Flex maxW={1480} mx="auto">
          teste
        </Flex>
      </Box>
    </>
  );
}
