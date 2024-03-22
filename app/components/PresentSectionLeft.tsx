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

const PresentSectionLeft = () => {
  return (
    <>
      <Container paddingY="100px" bg="#EEE6E6" minWidth="full" paddingX="130px">
        <Flex flex={1} alignItems="center" gap={100} margin="0">
          {/* <Image src="/images/soap.jpg" boxSize="60%" objectFit="cover" /> */}
          <Container>
            <Flex gap={5}>
              <Box
                borderBottomLeftRadius="50px"
                border="1px"
                borderColor="#000"
                h="400px"
                w="50%"
                marginBottom={14}
              ></Box>
              <Box
                borderBottomRightRadius="50px"
                border="1px"
                borderColor="#000"
                h="400px"
                w="50%"
                marginTop={14}
              ></Box>
            </Flex>
          </Container>
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
        </Flex>
      </Container>
    </>
  );
};

export default PresentSectionLeft;
