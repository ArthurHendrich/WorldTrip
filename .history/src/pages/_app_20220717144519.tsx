import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';


import "swiper/css/bundle";
import "./styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
