import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { menuItems } from "../const/menuItem";

const Navbar = () => {
  return (
    <>
      <Container width="100%" maxW="1440px" marginY={5}>
        <Flex alignItems="center">
          <Link href="/">
            <Box display="flex" alignItems="center">
              <Image src="/logo.svg" boxSize="50px" alt="logo-image" />
              <Heading color="#000">Presenthjälpen</Heading>
            </Box>
          </Link>
          <Spacer />
          <Box display="flex">
            <Flex gap={4} alignItems="center">
              {menuItems.map((menuItem) => (
                <Link
                  key={menuItem.menuName}
                  href={menuItem.menuLink}
                  textUnderlineOffset="none"
                >
                  {menuItem.menuName}
                </Link>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
