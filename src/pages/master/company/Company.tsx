// CompanyMaster.tsx
import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "constants";

export const CompanyMaster: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Company Master",
      btnTitle: "Add Company",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        {/* <Table></Table> */}
      </BorderLayout>
    </>
  );
};
