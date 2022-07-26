import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Box
        as="section"
        w="100%"
        maxH="300px"
        bgImage="url('/images/Background.png')"
        objectFit="cover"
      >
        <Flex
          maxW={1480}
          mx="auto"
          paddingX="6rem"
          display="flex"
          alignItems="center"
        >
          <Box flex="1" justifyContent="center" lineHeight={1.35}>
            <Text fontSize={36} color="gray.100">
              5 Continentes,
            </Text>
            <Text fontSize={36} color="gray.100">
              infinitas possibilidades.
            </Text>
            <Text fontSize={18} mt={4} color="gray.400">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
            </Text>
          </Box>
          <Box>
            <Image mt="2rem" src="/images/Airplane.png" alt="airplane" />
          </Box>
        </Flex>
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

      <Box
        maxWidth="4.25rem"
        margin="auto"
        bg="gray.500"
        height="2px"
        borderRadius="5px"
        marginBottom="3.25rem"
      ></Box>

      <Box
        as="section"
        maxWidth={1180}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        lineHeight={1.4}
        fontSize={30}
        margin="auto"
        marginBottom="3.25rem"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>

      <Box as="section" maxWidth={1280} margin="auto" marginBottom="3.25rem">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="/Europa">
              <a>

              <Box position="absolute">
                <Text color="white" fontSize="3rem" fontWeight="bold">
                  Europa
                </Text>
                <Text color="gray.300" fontSize="1.5rem" fontWeight="bold">
                  O continente mais antigo
                </Text>
              </Box>
              </a>
            </Link>
            <Image src="images/Europe.png" alt="slide1" opacity="1" />
          </SwiperSlide>
          <SwiperSlide>
            <Box position="absolute">
              <Text color="white" fontSize="3rem" fontWeight="bold">
                America do Norte
              </Text>
              <Text color="gray.300" fontSize="1.5rem" fontWeight="bold">
                O grande polo
              </Text>
            </Box>
            <Image src="images/Na.jpg" alt="slide1" opacity="0.25" />
          </SwiperSlide>
          <SwiperSlide>
            <Box position="absolute">
              <Text color="white" fontSize="3rem" fontWeight="bold">
                America do Sul
              </Text>
              <Text color="gray.300" fontSize="1.5rem" fontWeight="bold">
                A grande natureza
              </Text>
            </Box>
            <Image src="images/Sa.jpg" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Box position="absolute">
              <Text color="white" fontSize="3rem" fontWeight="bold">
                Africa
              </Text>
              <Text color="gray.300" fontSize="1.5rem" fontWeight="bold">
                As maravilhas
              </Text>
            </Box>
            <Image src="images/Africa.jpg" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Box position="absolute">
              <Text color="white" fontSize="3rem" fontWeight="bold">
                Oceania
              </Text>
              <Text color="gray.300" fontSize="1.5rem" fontWeight="bold">
                A paz
              </Text>
            </Box>
            <Image src="images/Oceania.jpg" alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
