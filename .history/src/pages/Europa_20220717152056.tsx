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
          maxH="600px"
          width="100%"
          objectFit="cover"
        />
      </Box>

      <Box
        as="section"
        maxWidth={1180}
        margin="auto"
        mt="5rem"
        mb="5rem"
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        color="gray.800"
        fontWeight="bold"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          marginRight="8.125rem"
        >
          <Image src="/images/cocktail.png" alt="predio" />
          <Text marginTop="1.5rem">vida noturna</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          marginRight="8.125rem"
        >
          <Image src="/images/surf.png" alt="predio" />
          <Text marginTop="1.5rem">praia</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          marginRight="8.125rem"
        >
          <Image src="/images/building.png" alt="predio" />
          <Text marginTop="1.5rem">moderno</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          marginRight="8.125rem"
        >
          <Image src="/images/museum.png" alt="predio" />
          <Text marginTop="1.5rem">clássico</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Image src="/images/Group.png" alt="predio" />
          <Text marginTop="1.5rem">e mais...</Text>
        </Box>
      </Box>
    </>
  );
}
