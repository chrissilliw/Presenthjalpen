import FullWidthBannerCategory from "@/app/components/FullWidthBannerCategory";
import React from "react";

const page = () => {
  const pageTitle = "Barn & Familj";
  const pageInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <FullWidthBannerCategory pageTitle={pageTitle} pageInfo={pageInfo} />
      <div>Barn & Familj</div>
    </>
  );
};

export default page;
