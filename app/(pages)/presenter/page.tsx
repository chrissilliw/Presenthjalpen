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
// import FullWidthBanner from "./components/FullWidthBanner";
// import GiftsOptionsGrid from "./components/GiftsOptionsGrid";
// import FullWidthContainer from "./components/FullWidthContainer";
// import RecipientOptionsGrid from "./components/RecipientOptionsGrid";
// import FullWidthContainerLeft from "./components/FullWidthContainerLeft";
// import RecipientButtonsGrid from "./components/RecipientButtonsGrid";
// import NewsLetterSection from "./components/NewsLetterSection";

const Birthday = () => {
  return (
    <>
      <Head>
        <title key="pagetitle">Home Page</title>
        <meta name="description" content="Home Page" key="metadescription" />
      </Head>
      <RightBanner />
      <PresentsRecipient />

      {/*<GiftsOptionsGrid />
      <FullWidthContainer />
      <RecipientOptionsGrid />
      <FullWidthContainerLeft />
      <RecipientButtonsGrid />
      <NewsLetterSection /> */}
    </>
  );
};

export default Birthday;
