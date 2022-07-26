import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box as="section" w="100%" bgImage="url('/images/Background.png')" >
        <Flex maxW={1480} mx="auto" justify="space-between" paddingTop={12} paddingBottom={12}>
          <Box>
            <Text fontSize={20} color="white">5 Continentes, infinitas possibilidades.</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
