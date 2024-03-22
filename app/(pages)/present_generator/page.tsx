"use client";
import { useEffect, useState } from "react";
import cdata from "../../data.json";
import { ICompany } from "@/app/models/ICompany";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import PresentGeneratorGrid from "../../components/presentGenerator/PresentGeneratorGrid";

const PresentGenerator = () => {
  const [companyData, setCompanyData] = useState<ICompany[]>(cdata);
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    console.log(selectedCategoryList);
  }, [selectedCategoryList]);

  const getUniqueCategory = (data: ICompany[], field: string) => {
    let newElement = data.map((currentElement: any) => {
      return currentElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const categoryType = getUniqueCategory(cdata, "category");

  const handleClick = (selectedCategory: string) => {
    if (selectedCategoryList.includes(selectedCategory)) {
      setSelectedCategoryList(
        selectedCategoryList.filter((category) => category !== selectedCategory)
      );
    } else {
      setSelectedCategoryList([...selectedCategoryList, selectedCategory]);
    }
  };

  return (
    <>
      <Container maxWidth="80%" display="flex" justifyContent="center">
        <VStack minWidth="100%">
          <Heading as="h1" size="lg">
            Present Generatorn
          </Heading>
          <Container bg="lightblue" paddingY="40px" paddingX="30px">
            <Heading as="h2" size="md" mb={4}>
              Vad gillar de?
            </Heading>
            <Flex flexWrap="wrap" gap={3}>
              {categoryType.map((data) => (
                <Button
                  variant={
                    selectedCategoryList.includes(data) ? "solid" : "outline"
                  }
                  borderRadius="50px"
                  onClick={() => handleClick(data)}
                  key={data}
                >
                  {data}
                </Button>
              ))}
            </Flex>
          </Container>
        </VStack>
      </Container>
      <Container maxWidth="80%" display="flex" justifyContent="center">
        <Grid>
          {/* {selectedCategoryList.map((data: string) => (
            <li>{data}</li>
          ))} */}
        </Grid>
      </Container>
      {/* <PresentGeneratorGrid /> */}
    </>
  );
};

export default PresentGenerator;
