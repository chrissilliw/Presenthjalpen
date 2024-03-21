import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const GiftsOptionsGrid = () => {
  return (
    <>
      <Container maxWidth="90%" marginY={70}>
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem>
            <VStack>
              <Image
                src="/images/birthday_img.jpg"
                alt="birthday image"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="xs">
                Födelsedagspresent
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/wedding_img.jpg"
                alt="Wedding image"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="xs">
                Bröllopspresent
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/engagement_img.jpg"
                alt="Engagement image"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="xs">
                Gåva till förlovning
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/student_img.jpg"
                alt="Student image"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="xs">
                Studentpresent
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack>
              <Image
                src="/images/mothersday_img.jpg"
                alt="Mothers day image"
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading as="h6" size="xs">
                Mors dag / Fars dag present
              </Heading>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default GiftsOptionsGrid;
