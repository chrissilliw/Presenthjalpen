import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const RecipientButtonsGrid = () => {
  return (
    <>
      <Container minWidth="full" maxWidth="1440px" bg="#EEE6E6" paddingY="50px">
        <Box>
          <Container minWidth="full" marginTop="30px" paddingX="80px">
            <Heading as="h3" marginBottom="20px">
              Letar du efter...
            </Heading>
            {/* <HStack display="flex" justifyContent="space-between"> */}
            <Flex justify="space-between" w="full" gap={4}>
              <Button
                flex={1}
                colorScheme="#fff"
                bg="#fff"
                border="2px"
                variant="outline"
                textTransform="uppercase"
                borderRadius="none"
              >
                Present till Henne
              </Button>
              <Button
                flex={1}
                colorScheme="#fff"
                bg="#fff"
                border="2px"
                variant="outline"
                textTransform="uppercase"
                borderRadius="none"
              >
                Present till Honom
              </Button>
              <Button
                flex={1}
                colorScheme="#fff"
                bg="#fff"
                border="2px"
                variant="outline"
                textTransform="uppercase"
                borderRadius="none"
              >
                Present till Tonåringen
              </Button>
              <Button
                flex={1}
                colorScheme="#fff"
                bg="#fff"
                border="2px"
                variant="outline"
                textTransform="uppercase"
                borderRadius="none"
              >
                Present till Barn
              </Button>
            </Flex>
            {/* </HStack> */}
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default RecipientButtonsGrid;
