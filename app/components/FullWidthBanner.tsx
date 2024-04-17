import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const FullWidthBanner = () => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <Container
        width="100%"
        maxWidth="1440px"
        display="flex"
        alignItems="center"
      >
        <Box
          bg="#EEE6E6"
          height="500px"
          width="100%"
          borderRadius={10}
          display="flex"
          alignItems="center"
        >
          <VStack align="left" paddingLeft="100px">
            <Heading as="h1" size="2xl" width="50%" lineHeight="1.1">
              Hitta bästa presenten smidigt!
            </Heading>
            <Text fontSize="lg" width="40%" lineHeight="1.4" marginY={4}>
              Presentgatan.se är en tjänst där vi underlättar att hitta den
              perfekta presenter. Oavsett om det är till mor, far, student eller
              mor- /farföräldrar så har vi de bästa presenttipsen.
            </Text>
            <Link href="/present_generator">
              <Button>Prova Present generatorn</Button>
            </Link>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export default FullWidthBanner;
