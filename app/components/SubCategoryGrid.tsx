import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const SubCategoryGrid = () => {
  const subCategoryButton = {
    borderRadius: "50px",
    paddingY: "23px",
    paddingX: "25px",
  };
  return (
    <>
      <Container maxWidth="90%" marginY={70}>
        <Heading as="h4" size="md">
          Underkategorier
        </Heading>
        <Flex flexWrap="wrap" gap={3} paddingTop={5}>
          <Button sx={subCategoryButton}>Kök</Button>
          <Button sx={subCategoryButton}>Vardgsrum</Button>
          <Button sx={subCategoryButton}>Badrum</Button>
        </Flex>
      </Container>
    </>
  );
};

export default SubCategoryGrid;
