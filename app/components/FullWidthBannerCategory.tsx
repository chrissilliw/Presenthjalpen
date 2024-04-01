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

interface FullWidthBannerCategory {
  pageTitle: string;
  pageInfo: string;
}

const FullWidthBannerCategory = ({
  pageTitle,
  pageInfo,
}: FullWidthBannerCategory) => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <Container maxWidth="95%" display="flex" alignItems="center">
        <Box
          bg="#EEE6E6"
          height="350px"
          width="100%"
          borderRadius={10}
          display="flex"
          alignItems="center"
        >
          <VStack align="left" paddingLeft="100px">
            <Heading as="h1" size="xl" width="50%" lineHeight="1.1">
              {pageTitle}
            </Heading>
            <Text fontSize="lg" width="50%" lineHeight="1.4">
              {pageInfo}
            </Text>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export default FullWidthBannerCategory;
