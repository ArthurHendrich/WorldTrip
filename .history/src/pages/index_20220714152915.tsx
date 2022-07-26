import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box as="section" w="100%" bgImage="url('/images/Background.png')" >
        <Flex maxW={1480} mx="auto" justify="space-between" paddingTop="4px" paddingBottom={2}>
          <Box>
            <Text color="white">5 Continentes, infinitas possibilidades.</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
