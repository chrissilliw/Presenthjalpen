import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PresentsRecipient = () => {
  return (
    <>
      <Container maxWidth="90%" marginY="100px">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem>
            <VStack>
              <Image
                src="/images/wedding_img.jpg"
                alt="Wedding image"
                boxSize="250px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="s" marginTop="10px">
                Till Henne
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/engagement_img.jpg"
                alt="Engagement image"
                boxSize="250px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="s" marginTop="10px">
                Till Honom
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/student_img.jpg"
                alt="Student image"
                boxSize="250px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="s" marginTop="10px">
                Till Tonåringen
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/mothersday_img.jpg"
                alt="Mothers day image"
                boxSize="250px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="s" marginTop="10px">
                Till Lillen
              </Heading>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default PresentsRecipient;
