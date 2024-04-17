import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const GiftsOptionsGrid = () => {
  return (
    <>
      <Container width="100%" maxWidth="1440px" marginY={70}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <Link href="/presenter/fodelsedag">
            <GridItem
              paddingY="50px"
              boxShadow="0 5px 20px 0 rgba(0,0,0,.15)"
              transition="box-shadow, transform 300ms ease-in-out"
              _hover={{
                boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                transform: "scale(1.05)",
              }}
            >
              <VStack>
                <Image
                  src="/images/birthday_img.jpg"
                  alt="birthday image"
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h6" size="sm" marginTop={3}>
                  Födelsedagspresent
                </Heading>
                <Text fontSize="md" align="center" marginBottom={3}>
                  Hitta roliga och smarta födelsedagspresenter
                </Text>
                <Button>Inspiration</Button>
              </VStack>
            </GridItem>
          </Link>
          <Link href="/presenter/fodelsedag">
            <GridItem
              paddingY="50px"
              boxShadow="0 5px 20px 0 rgba(0,0,0,.15)"
              transition="box-shadow, transform 300ms ease-in-out"
              _hover={{
                boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                transform: "scale(1.05)",
              }}
            >
              <VStack>
                <Image
                  src="/images/wedding_img.jpg"
                  alt="Wedding image"
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h6" size="sm" marginTop={3}>
                  Bröllopspresent
                </Heading>
                <Text fontSize="md" align="center" marginBottom={3}>
                  Hitta roliga och smarta födelsedagspresenter
                </Text>
                <Button>Inspiration</Button>
              </VStack>
            </GridItem>
          </Link>
          <Link href="/presenter/fodelsedag">
            <GridItem
              paddingY="50px"
              boxShadow="0 5px 20px 0 rgba(0,0,0,.15)"
              transition="box-shadow, transform 300ms ease-in-out"
              _hover={{
                boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                transform: "scale(1.05)",
              }}
            >
              <VStack>
                <Image
                  src="/images/engagement_img.jpg"
                  alt="Engagement image"
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h6" size="sm" marginTop={3}>
                  Gåva till förlovning
                </Heading>
                <Text fontSize="md" align="center" marginBottom={3}>
                  Hitta roliga och smarta födelsedagspresenter
                </Text>
                <Button>Inspiration</Button>
              </VStack>
            </GridItem>
          </Link>
          <Link href="/presenter/fodelsedag">
            <GridItem
              paddingY="50px"
              boxShadow="0 5px 20px 0 rgba(0,0,0,.15)"
              transition="box-shadow, transform 300ms ease-in-out"
              _hover={{
                boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                transform: "scale(1.05)",
              }}
            >
              <VStack>
                <Image
                  src="/images/student_img.jpg"
                  alt="Student image"
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h6" size="sm" marginTop={3}>
                  Studentpresent
                </Heading>
                <Text fontSize="md" align="center" marginBottom={3}>
                  Hitta roliga och smarta födelsedagspresenter
                </Text>
                <Button>Inspiration</Button>
              </VStack>
            </GridItem>
          </Link>
          <Link href="/presenter/fodelsedag">
            <GridItem
              paddingY="50px"
              boxShadow="0 5px 20px 0 rgba(0,0,0,.15)"
              transition="box-shadow, transform 300ms ease-in-out"
              _hover={{
                boxShadow: "0 5px 30px 0 rgba(0,0,0,.15)",
                transform: "scale(1.05)",
              }}
            >
              <VStack>
                <Image
                  src="/images/mothersday_img.jpg"
                  alt="Mothers day image"
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h6" size="sm" marginTop={3}>
                  Mors dag / Fars dag present
                </Heading>
                <Text fontSize="md" align="center" marginBottom={3}>
                  Hitta roliga och smarta födelsedagspresenter
                </Text>
                <Button>Inspiration</Button>
              </VStack>
            </GridItem>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

export default GiftsOptionsGrid;
