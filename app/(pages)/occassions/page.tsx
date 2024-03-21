import Head from "next/head";
import Navbar from "./components/Navbar";
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
import FullWidthBanner from "./components/FullWidthBanner";
import GiftsOptionsGrid from "./components/GiftsOptionsGrid";
import FullWidthContainer from "./components/FullWidthContainer";
import RecipientOptionsGrid from "./components/RecipientOptionsGrid";
import FullWidthContainerLeft from "./components/FullWidthContainerLeft";
import RecipientButtonsGrid from "./components/RecipientButtonsGrid";
import NewsLetterSection from "./components/NewsLetterSection";

const Birthday = () => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <FullWidthBanner />
      <GiftsOptionsGrid />
      <FullWidthContainer />
      <RecipientOptionsGrid />
      <FullWidthContainerLeft />
      <RecipientButtonsGrid />
      <NewsLetterSection />
    </>
  );
};

export default Birthday;
