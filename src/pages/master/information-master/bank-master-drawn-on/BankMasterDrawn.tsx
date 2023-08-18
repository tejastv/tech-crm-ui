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
        <Table config={{
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
        }}></Table>
      </BorderLayout>
    </>
  );
};