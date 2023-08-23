import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "constants";

export const Executive: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Sales Executive",
      btnTitle: "Add Sales Executive",
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
