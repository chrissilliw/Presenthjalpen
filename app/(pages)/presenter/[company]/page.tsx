import React from "react";
import { ICompany } from "@/app/models/ICompany";

interface Props {
  params: { company: ICompany };
}

const CompanyDetailPage = ({ params: { company } }: Props) => {
  const companyId = company;
  return (
    <>
      {/* <div>{companyId}</div> */}
      <div>{company.company}</div>
      <div>{company.info_title}</div>
    </>
  );
};

export default CompanyDetailPage;
