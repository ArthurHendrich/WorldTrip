import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Europa() {
  return (
    <>
      <Head>
        <title>Europa | WorldTrip</title>
      </Head>

      <Box as="section" position="initial">
        <Image
          src="/images/Banner.png"
          alt="airplane"
          maxH="500px"
          width="100%"
        />
        <Text
          position="absolute"
          margin="0"
          left="215px"
          bottom="330px"
          fontSize="3rem"
          fontWeight="semibold"
          color="white"
        >
          Europa
        </Text>
      </Box>

      <Box
        as="section"
        maxWidth={1480}
        margin="auto"
        mt="5rem"
        mb="5rem"
        display="grid"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(auto-fit, minmax(500px, 1fr))"
        gap="4.375rem"
      >
        <Box as="div" flex="1">
          <Text
            color="gray.600"
            fontSize="1.5rem"
            lineHeight="2.5rem"
            textAlign="justify"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box
          as="div"
          display="grid"
          alignItems="center"
          justifyContent="center"
          gridTemplateColumns="repeat(3, 1fr)"
          gap="2.625rem"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text color="yellow.400" fontSize="3rem">
              50
            </Text>
            <Text fontSize="2.5rem" mt="-1rem">
              paises
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text color="yellow.400" fontSize="3rem">
              60
            </Text>
            <Text fontSize="2.5rem" mt="-1rem">
              línguas
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text color="yellow.400" fontSize="3rem">
              27
            </Text>
            <Box display="flex">
              <Text fontSize="2.5rem" mt="-1rem" textAlign="center" mr="0.875rem">
                cidades
              </Text>
              <Text fontSize="2.5rem" mt="-1rem" textAlign="center">
                +100
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
