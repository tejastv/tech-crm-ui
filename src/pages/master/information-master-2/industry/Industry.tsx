import React, { useState } from "react";

import { BorderLayout, PageBreadcrumb, Table, TableType } from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { useHttp } from "@hooks/useHttp";

export const Industry: React.FC = () => {
  const { getData } = useHttp();
  const [tableData, setData] = useState([]);

  const config = {
    breadcrumbConfig: {
      pageHeading: "Industry",
      btnTitle: "Add Industry",
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
