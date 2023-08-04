// CompanyMaster.tsx
import React from "react";

import { BorderLayout, PageBreadcrumb, Table } from "@shared/index";
import { ADD_COMPANY } from "@master/index";

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
