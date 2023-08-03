// CompanyMaster.tsx
import React from "react";
import { BorderLayout, PageBreadcrumb, Table } from "../../../../../shared";
import { ADD_COMPANY } from "../../..";

export const CompanyMaster: React.FC = () => {
  return (
    <>
      <PageBreadcrumb
        pageHeading="Company Master"
        btnTitle="Add Company"
        btnRoute={ADD_COMPANY}
      ></PageBreadcrumb>
      <BorderLayout heading="List">
        <Table></Table>
      </BorderLayout>
    </>
  );
};
