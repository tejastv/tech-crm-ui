import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "constants";

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
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        {/* <Table config={{
          columns: [],
          data: [],
          sorting: undefined,
          copyBtn: undefined,
          csvBtn: undefined,
          excelBtn: undefined,
          pdfBtn: undefined,
          printBtn: undefined,
          globalSearchBox: undefined,
          pagination: undefined,
          showItemCountDropdown: undefined
        }}></Table> */}
      </BorderLayout>
    </>
  );
};
