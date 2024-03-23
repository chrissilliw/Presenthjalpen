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
import PresentCard from "@/app/components/PresentCard";

const PresentGenerator = () => {
  const [companyData, setCompanyData] = useState<ICompany[]>(cdata);

  const [selectedOccasionsList, setSelectedOccassionsList] = useState<string[]>(
    []
  );
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>(
    []
  );

  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCompanyData, setFilteredCompanyData] = useState<ICompany[]>(
    []
  );

  useEffect(() => {
    console.log(selectedOccasionsList);
  }, [selectedOccasionsList]);

  useEffect(() => {
    const filterCompaniesByCategoryAndOccasion = () => {
      const filteredData = companyData.filter(
        (company) =>
          selectedCategoryList.includes(company.category) &&
          company.occasion.some((occasion) =>
            selectedOccasionsList.includes(occasion)
          )
      );
      setFilteredCompanyData(filteredData);
    };
    filterCompaniesByCategoryAndOccasion();
    console.log(filteredCompanyData);
  }, [selectedCategoryList, selectedOccasionsList]);

  const getUniqueCategory = (data: ICompany[], field: string) => {
    let newElement = data.map((currentElement: any) => {
      return currentElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const getUniqueOccasions = (data: ICompany[], field: string) => {
    let allOccations: string[] = [];

    data.forEach((company: ICompany) => {
      allOccations = allOccations.concat(company.occasion);
    });
    return [...new Set(allOccations)];
  };

  const categoryType = getUniqueCategory(cdata, "category");
  const occasionType = getUniqueOccasions(cdata, "occasion");

  const handleClickCategory = (selectedCategory: string) => {
    if (selectedCategoryList.includes(selectedCategory)) {
      setSelectedCategoryList(
        selectedCategoryList.filter((category) => category !== selectedCategory)
      );
    } else {
      setSelectedCategoryList([...selectedCategoryList, selectedCategory]);
    }
  };

  const handleClickOccasion = (selectedOccasion: string) => {
    if (selectedOccasionsList.includes(selectedOccasion)) {
      setSelectedOccassionsList(
        selectedOccasionsList.filter(
          (occasion) => occasion !== selectedOccasion
        )
      );
    } else {
      setSelectedOccassionsList([...selectedOccasionsList, selectedOccasion]);
    }
  };

  return (
    <>
      <Container maxWidth="100%" display="flex" justifyContent="center">
        <VStack minWidth="100%">
          <Heading as="h1" size="lg">
            Present Generatorn
          </Heading>
          <Container bg="lightblue" paddingY="40px" paddingX="30px">
            <Heading as="h2" size="md" mb={4}>
              Vad för tillfälle?
            </Heading>
            <Flex flexWrap="wrap" gap={3}>
              {occasionType.map((data) => (
                <Button
                  variant={
                    selectedOccasionsList.includes(data) ? "solid" : "outline"
                  }
                  borderRadius="50px"
                  onClick={() => handleClickOccasion(data)}
                  key={data}
                >
                  {data}
                </Button>
              ))}
            </Flex>
          </Container>
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
                  onClick={() => handleClickCategory(data)}
                  key={data}
                >
                  {data}
                </Button>
              ))}
            </Flex>
          </Container>
        </VStack>
      </Container>
      <Container
        maxWidth="95%"
        display="flex"
        justifyContent="center"
        marginTop="80px"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {filteredCompanyData.map((company) => (
            <PresentCard company={company} key={company.id} />
            // <li key={company.company}>{company.company}</li>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PresentGenerator;
