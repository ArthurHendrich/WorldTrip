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
        left="210px"
        bottom="180px"
        fontSize="48px"
        fontWeight="semibold"
        color="white"
        >Europa</Text>
      </Box>

    </>
  );
}
