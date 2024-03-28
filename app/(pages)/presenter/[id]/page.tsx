"use client";
import React, { useEffect } from "react";
import { ICompany } from "@/app/models/ICompany";
import cdata from "../../../data.json";
import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  params: { id: string };
}

const CompanyDetailPage = ({ params: { id } }: Props) => {
  const companyId = +id;

  const getCompany = () => {
    return cdata.find((companyData) => +companyData.id === companyId);
  };

  const company: ICompany | undefined = getCompany();
  return (
    <>
      <Container maxWidth="100%" display="flex" paddingX={8}>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <GridItem colSpan={2} maxHeight="600px" bg="lightblue">
            <Image src={company?.image} boxSize="full " objectFit="cover" />
          </GridItem>
          <GridItem height="100%" bg="lightblue">
            <VStack align="left" padding={10}>
              <Heading as="h2" size="md" marginTop={4} marginBottom={6}>
                {company?.company}
              </Heading>
              <Text>{company?.info_text}</Text>
              <Text>{company?.all_text}</Text>
            </VStack>
          </GridItem>
          <GridItem bg="lightblue">
            <VStack padding={10}>
              <Container display="flex" justifyContent="center">
                <Image
                  src={company?.logo}
                  boxSize="130px"
                  objectFit="contain"
                />
              </Container>
              <Container display="flex" justifyContent="center">
                <VStack>
                  <Text textAlign="center" fontSize="lg">
                    {company?.info_title}
                  </Text>
                  <Container marginTop={5}>
                    <Text textAlign="center" color="tomato">
                      Pris
                    </Text>
                    <Text textAlign="center">
                      {company?.minPrice} kr - {company?.maxPrice} kr
                    </Text>
                  </Container>
                  <Container marginTop={5}>
                    <Text textAlign="center" color="tomato">
                      Ålder
                    </Text>
                    <Text textAlign="center">
                      {company?.minAge} - {company?.maxAge}
                    </Text>
                  </Container>

                  <Link href={company?.website} marginTop={8}>
                    <Button>Gå till butiken</Button>
                  </Link>
                </VStack>
              </Container>
            </VStack>
          </GridItem>
        </Grid>
        <Grid></Grid>
      </Container>
    </>
  );
};

export default CompanyDetailPage;
