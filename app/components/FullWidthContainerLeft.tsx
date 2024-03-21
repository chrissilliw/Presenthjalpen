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
      <Container paddingY={100} bg="##fff" minWidth="full" paddingX={0}>
        <Flex flex={1} alignItems="center" gap={100} margin="0">
          <Box marginLeft="100px">
            <Heading as="h3" size="md" mb={3}>
              Lorem Ipsum
            </Heading>
            <Text fontSize="md" mb={5} width="90%">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </Text>
            <Link textDecoration="underline" textUnderlineOffset={7}>
              SE SAMTLIGA SAKER
            </Link>
          </Box>
          <Image src="/images/soap.jpg" boxSize="60%" objectFit="cover" />
        </Flex>
      </Container>
    </>
  );
};

export default FullWidthContainer;
