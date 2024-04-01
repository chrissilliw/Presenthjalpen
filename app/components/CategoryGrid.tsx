import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
  Link,
} from "@chakra-ui/react";

const CategoryGrid = () => {
  const categoryGridImage = {
    height: "400px",
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const categoryGridHeading = {
    textAlign: "right",
    paddingX: "20px",
  };
  return (
    <>
      <Container maxWidth="95%" marginY={70}>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Link href="/kategorier/barn_och_familj">
            <GridItem>
              <VStack align="right">
                <Image
                  src="/images/birthday_img.jpg"
                  alt="birthday image"
                  sx={categoryGridImage}
                />
                <Heading as="h6" size="md" sx={categoryGridHeading}>
                  Barn & Familj
                </Heading>
              </VStack>
            </GridItem>
          </Link>
          <Link href="/kategorier/hem_och_inredning">
            <GridItem>
              <VStack align="right">
                <Image
                  className="rounded-bl-3xl"
                  src="/images/birthday_img.jpg"
                  alt="birthday image"
                  sx={categoryGridImage}
                />
                <Heading as="h6" size="md" sx={categoryGridHeading}>
                  Hem & Inredning
                </Heading>
              </VStack>
            </GridItem>
          </Link>
          <GridItem>
            <VStack align="right">
              <Image
                className="rounded-bl-3xl"
                src="/images/birthday_img.jpg"
                alt="birthday image"
                sx={categoryGridImage}
              />
              <Heading as="h6" size="md" sx={categoryGridHeading}>
                Bygg & Trädgård
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="right">
              <Image
                className="rounded-bl-3xl"
                src="/images/birthday_img.jpg"
                alt="birthday image"
                sx={categoryGridImage}
              />
              <Heading as="h6" size="md" sx={categoryGridHeading}>
                Elektronik & Teknik
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="left">
              <Image
                className="rounded-bl-3xl"
                src="/images/birthday_img.jpg"
                alt="birthday image"
                sx={categoryGridImage}
              />
              <Heading as="h6" size="md" sx={categoryGridHeading}>
                Hobby & Fritid
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="left">
              <Image
                className="rounded-bl-3xl"
                src="/images/birthday_img.jpg"
                alt="birthday image"
                sx={categoryGridImage}
              />
              <Heading as="h6" size="md" sx={categoryGridHeading}>
                Kläder & Accessoarer
              </Heading>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="left">
              <Image
                className="rounded-bl-3xl"
                src="/images/birthday_img.jpg"
                alt="birthday image"
                sx={categoryGridImage}
              />
              <Heading as="h6" size="md" sx={categoryGridHeading}>
                Presenter & blommor
              </Heading>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default CategoryGrid;
