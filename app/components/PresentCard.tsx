import {
  Card,
  CardBody,
  Divider,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ICompany } from "../models/ICompany";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";

interface PresentCardProps {
  company: ICompany;
}

const PresentCard = ({ company }: PresentCardProps) => {
  const pathname = usePathname();
  // const basePath = pathname.includes("/presenter")

  return (
    <>
      <GridItem w="100%" key={company.id}>
        <Link
          href={`/presenter/${company.company}`}
          _hover={{ textDecoration: "none", cursor: "pointer" }}
          pointerEvents={"all"}
        >
          <Card padding={6} height="600px" borderRadius="none" cursor="pointer">
            <CardBody>
              <VStack>
                <Heading as="h4" size="sm">
                  {company.company}
                </Heading>
                <Image src={company.logo} boxSize="150px" objectFit="contain" />
                <Heading as="h3" size="lg" textAlign="center" mb={3}>
                  {company.info_title}
                </Heading>
                <Divider marginBottom={2} width="100px" borderColor="#373F51" />
                <Text textAlign="center">{company.info_text}</Text>
              </VStack>
            </CardBody>
          </Card>
        </Link>
      </GridItem>
    </>
  );
};

export default PresentCard;
