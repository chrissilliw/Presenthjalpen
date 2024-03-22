import PresentRecipientSection from "@/app/components/PresentRecpientSection";
import PresentSectionLeft from "@/app/components/PresentSectionLeft";
import PresentSectionRight from "@/app/components/PresentSectionRight";
import PresentsRecipient from "@/app/components/PresentsRecipient";
import RightBanner from "@/app/components/RightBanner";
import React from "react";

const Fodelsedag = () => {
  return (
    <>
      <RightBanner />
      <PresentsRecipient />
      <PresentSectionLeft />
      <PresentSectionRight />
      <PresentRecipientSection />
    </>
  );
};

export default Fodelsedag;
