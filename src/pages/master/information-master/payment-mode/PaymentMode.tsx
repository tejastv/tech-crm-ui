import React from "react";

import { BorderLayout, PageBreadcrumb, Table } from "@shared/index";
import { COMMON_ROUTES } from "constants";

export const PaymentMode: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Payment Mode",
      btnTitle: "Add Payment Mode",
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
