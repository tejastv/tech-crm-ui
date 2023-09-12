import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";

export const Client: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Client",
      btnTitle: "Add Client",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}></BorderLayout>
    </>
  );
};
