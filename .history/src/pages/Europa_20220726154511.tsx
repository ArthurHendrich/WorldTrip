import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Europa() {
  return (
    <>
      <Head>
        <title>Europa | WorldTrip</title>
      </Head>

      <Box as="section">
        <Image
          src="/images/Banner.png"
          alt="airplane"
          maxH="500px"
          width="100%"
        />
        <Text
        position="absolute"
        margin="0"
        left="200px"
        bottom="180px"
        fontSize="48px"
        fontWeight="semibold"
        color="white"
        >Europa</Text>
      </Box>

      <Box
        as="section"
        maxWidth={1480}
        margin="auto"
        mt="5rem"
        mb="5rem"
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        color="gray.800"
        fontWeight="bold"
      >
        teste
      </Box>
    </>
  );
}
