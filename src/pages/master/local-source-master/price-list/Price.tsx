import React from "react";

import { BorderLayout, PageBreadcrumb, Table } from "@shared/index";
import { COMMON_ROUTES } from "constants";

export const Price: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Price Master",
      btnTitle: "Add Price",
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