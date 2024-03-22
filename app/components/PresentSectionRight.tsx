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

const PresentSectionRight = () => {
  return (
    <>
      <Container paddingY="70px" bg="#fff" minWidth="full" paddingX="200px">
        <Flex flex={1} alignItems="center" gap={10} margin="0">
          <Box>
            <Heading as="h3" size="md" mb={3}>
              Lorem Ipsum
            </Heading>
            <Text fontSize="md" mb={5} width="80%">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </Text>
            <Link textDecoration="underline" textUnderlineOffset={7}>
              SE SAMTLIGA SAKER
            </Link>
          </Box>
          <Box
            borderBottomRightRadius="50px"
            border="1px"
            borderColor="#000"
            h="450px"
            w="80%"
            marginTop={14}
          ></Box>
        </Flex>
      </Container>
    </>
  );
};

export default PresentSectionRight;
