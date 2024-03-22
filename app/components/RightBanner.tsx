import Head from "next/head";
import { Box, Container, Heading, VStack, Text } from "@chakra-ui/react";

const RightBanner = () => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <Container maxWidth="95%" display="flex" alignItems="center">
        <VStack align="left" paddingLeft="50px">
          <Heading as="h1" size="2xl" lineHeight="1.1" marginBottom="10px">
            Födelsedagspresenter
          </Heading>
          <Text fontSize="lg" width="80%" lineHeight="1.4">
            Presentgatan.se är en tjänst där vi underlättar att hitta den
            perfekta presenter. Oavsett om det är till mor, far, student eller
            mor- /farföräldrar så har vi de bästa presenttipsen.
          </Text>
        </VStack>
        <Box
          borderBottomLeftRadius="50px"
          bg="#EEE6E6"
          h="500px"
          w="100%"
        ></Box>
      </Container>
    </>
  );
};

export default RightBanner;
