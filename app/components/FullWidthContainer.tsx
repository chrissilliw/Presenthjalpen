import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FullWidthContainer = () => {
  return (
    <>
      <Container paddingY={100} bg="#EEE6E6" minWidth="full" paddingX={0}>
        <Flex flex={1} alignItems="center" gap={100} margin="0">
          <Image src="/images/soap.jpg" boxSize="60%" objectFit="cover" />
          <Box>
            <Heading as="h3" size="md" mb={3}>
              Månadens presentkort
            </Heading>
            <Text fontSize="md" mb={5} width="80%">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </Text>
            <Link textDecoration="underline" textUnderlineOffset={7}>
              SE NÅGRA FÖRSLAG
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default FullWidthContainer;
