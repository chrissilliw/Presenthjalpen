import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  transition,
  Button,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const PresentsRecipient = () => {
  const recipientCardImageStyles = {
    objectFit: "cover",
    borderRadius: "full",
  };

  const recipientCardTextStyles = {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  const recipientCardBoxStyles = {
    borderRadius: "full",
    boxShadow: "0 5px 20px 0 rgba(0,0,0,.15)",
    transition: "box-shadow, transform 300ms ease-in-out",
  };

  return (
    <>
      <Container maxWidth="90%" marginY="100px">
        <Grid templateColumns="repeat(4, 1fr)" gap={12}>
          <GridItem>
            <Link href="/">
              <Box
                position="relative"
                sx={recipientCardBoxStyles}
                _hover={{
                  boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  src="/images/wedding_img.jpg"
                  alt="Birthday image"
                  sx={recipientCardImageStyles}
                />
                <VStack sx={recipientCardTextStyles}>
                  <Heading as="h3" size="md">
                    Till Henne
                  </Heading>
                  <Button>Läs mer</Button>
                </VStack>
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Box
                position="relative"
                sx={recipientCardBoxStyles}
                _hover={{
                  boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  src="/images/wedding_img.jpg"
                  alt="Birthday image"
                  sx={recipientCardImageStyles}
                />
                <VStack sx={recipientCardTextStyles}>
                  <Heading as="h3" size="md">
                    Till Honom
                  </Heading>
                  <Button>Läs mer</Button>
                </VStack>
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Box
                position="relative"
                sx={recipientCardBoxStyles}
                _hover={{
                  boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  src="/images/wedding_img.jpg"
                  alt="Birthday image"
                  sx={recipientCardImageStyles}
                />
                <VStack sx={recipientCardTextStyles}>
                  <Heading as="h3" size="md">
                    Till Tonåringen
                  </Heading>
                  <Button>Läs mer</Button>
                </VStack>
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Box
                position="relative"
                sx={recipientCardBoxStyles}
                _hover={{
                  boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  src="/images/wedding_img.jpg"
                  alt="Birthday image"
                  sx={recipientCardImageStyles}
                />
                <VStack sx={recipientCardTextStyles}>
                  <Heading as="h3" size="md">
                    Till Lillen
                  </Heading>
                  <Button>Läs mer</Button>
                </VStack>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default PresentsRecipient;
