import React from "react";

import { BorderLayout, PageBreadcrumb, Table } from "@shared/index";
import { COMMON_ROUTES } from "constants";

export const BankMasterDrawn: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Bank Master(Drawn)",
      btnTitle: "Add Bank Master(Drawn)",
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
        <Table></Table>
      </BorderLayout>
    </>
  );
};