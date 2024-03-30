import Head from "next/head";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import RightBanner from "@/app/components/RightBanner";
import PresentsRecipient from "@/app/components/PresentsRecipient";
import PresentSectionLeft from "@/app/components/PresentSectionLeft";

const Birthday = () => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <RightBanner />
      <PresentsRecipient />
    </>
  );
};

export default Birthday;
