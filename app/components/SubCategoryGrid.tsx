import { Button, Container, Flex } from "@chakra-ui/react";
import React from "react";

const SubCategoryGrid = () => {
  return (
    <>
      <Container maxWidth="90%" marginY={70} bg="tomato">
        <Flex flexWrap="wrap" gap={3}>
          <Button borderRadius="50px">Kök</Button>
          <Button borderRadius="50px">Vardgsrum</Button>
          <Button borderRadius="50px">Badrum</Button>
        </Flex>
      </Container>
    </>
  );
};

export default SubCategoryGrid;
