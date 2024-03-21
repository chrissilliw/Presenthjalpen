import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Container maxW="100%" marginBottom={6}>
        <Flex alignItems="center">
          <Box display="flex" alignItems="center">
            <Image src="/logo.svg" boxSize="50px" alt="logo-image" />
            <Heading color="#000">Presenthjälpen</Heading>
          </Box>
          <Spacer />
          <Box display="flex">
            <Flex gap={4} alignItems="center">
              <Link href={"/"} textUnderlineOffset="none">
                Blog
              </Link>
              <Link href={"/"} textUnderlineOffset="none">
                Blog
              </Link>{" "}
              <Link href={"/"} textUnderlineOffset="none">
                Blog
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
