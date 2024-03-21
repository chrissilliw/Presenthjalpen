import Head from "next/head";
import { Box, Container, Heading, VStack, Text } from "@chakra-ui/react";

const FullWidthBanner = () => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <Container maxWidth="95%" display="flex" alignItems="center">
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
            <Text fontSize="lg" width="40%" lineHeight="1.4">
              Presentgatan.se är en tjänst där vi underlättar att hitta den
              perfekta presenter. Oavsett om det är till mor, far, student eller
              mor- /farföräldrar så har vi de bästa presenttipsen.
            </Text>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export default FullWidthBanner;
