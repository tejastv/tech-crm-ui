// CompanyMaster.tsx
import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";

export const ActualBuyer: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Actual Buyer Master",
      btnTitle: "Add Actual Buyer Master",
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
