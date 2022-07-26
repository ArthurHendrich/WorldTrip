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

      <Box
        as="section"
        maxWidth={1480}
        margin="auto"
        mt="5rem"
        mb="5rem"
        display="grid"
        justifyContent="space-between"
        color="gray.800"
        fontWeight="bold"
      >
        <Box as ="div" flex="1">
          <Text fontSize="2xl" fontWeight="bold">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box as="div" flex="1">
          <Box><Text>50</Text><Text>paises</Text></Box>
          <Box><Text>50</Text><Text>paises</Text></Box>
          <Box><Text>50</Text><Text>paises</Text></Box>
        </Box>
      </Box>
    </>
  );
}
