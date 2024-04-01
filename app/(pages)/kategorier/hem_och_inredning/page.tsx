import FullWidthBannerCategory from "@/app/components/FullWidthBannerCategory";
import SubCategoryGrid from "@/app/components/SubCategoryGrid";
import React from "react";

const page = () => {
  const pageTitle = "Hem & Inredning";
  const pageInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <FullWidthBannerCategory pageTitle={pageTitle} pageInfo={pageInfo} />
      <SubCategoryGrid />
      <div>Barn & Familj</div>
    </>
  );
};

export default page;
