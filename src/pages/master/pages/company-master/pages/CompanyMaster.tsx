// CompanyMaster.tsx
import React from "react";
import { BorderLayout, PageBreadcrumb, Table } from "../../../../../shared";
import { ADD_COMPANY } from "../../..";

export const CompanyMaster: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Company Master",
      btnTitle: "Add Company",
      btnRoute: ADD_COMPANY,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table></Table>
      </BorderLayout>
    </>
  );
};
