import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Europa() {
  return (
    <>
      <Head>
        <title>Europa | WorldTrip</title>
      </Head>

      <Box
        as="section"
        minH="500px"
        maxW="1800px"
        objectFit="cover"
        bgImage="url('/images/Banner.png')"
      >
        <Image mt="2rem" src="/images/Airplane.png" alt="airplane" />
      </Box>
    </>
  );
}
