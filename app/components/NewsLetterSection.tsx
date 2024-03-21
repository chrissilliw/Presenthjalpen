import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NewsLetterSection = () => {
  return (
    <>
      <Container
        minWidth="full"
        maxWidth="1440px"
        bg="#F2F7F5"
        paddingY="50px"
        marginTop="100px"
      >
        <Box>
          <Container minWidth="full" marginTop="30px" paddingX="80px">
            <Heading as="h3" marginBottom="20px">
              Prenumerera på vårt nyhetsbrev
            </Heading>
            <Flex justify="space-between" w="full" gap={4}>
              <Text w="50%">
                Skriv upp dig på vårat nyhetsbrev för att få bra presenttips,
                påminnelser om högtider, grymma rabatter och bra erbjudanden i
                din mailkorg.
              </Text>
              <Button
                colorScheme="#fff"
                bg="#fff"
                border="2px"
                variant="outline"
                textTransform="uppercase"
                w="300px"
              >
                Prenumerera
              </Button>
            </Flex>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default NewsLetterSection;
