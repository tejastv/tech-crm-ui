import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "constants";

export const GroupMaster: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Group Master",
      btnTitle: "Add Group Master",
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
