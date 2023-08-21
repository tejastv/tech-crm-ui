import React, { useState } from "react";

import { BorderLayout, PageBreadcrumb, Table, TableType } from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { useHttp } from "@hooks/useHttp";

export const User: React.FC = () => {
  const { getData } = useHttp();
  const [tableData, setData] = useState([]);

  const config = {
    breadcrumbConfig: {
      pageHeading: "User Master",
      btnTitle: "Add User",
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
