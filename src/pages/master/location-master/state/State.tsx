import React from "react";
import { ColumnDef } from "@tanstack/react-table";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { StateType, queryKeys, useLocationMasterApiCall } from "@pages/master";
import { useQuery } from "@tanstack/react-query";

export const State: React.FC = () => {
  const { getStateData } = useLocationMasterApiCall();

  const config = {
    breadcrumbConfig: {
      pageHeading: "State",
      btnTitle: "Add State",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<StateType>[] = [
    {
      accessorFn: (row) => row.stateId,
      id: "stateId",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.state,
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    },
    {
      accessorFn: (row) => row.stateCodeN,
      id: "stateCodeN",
      cell: (info) => info.getValue(),
      header: () => <>StateCodeN</>,
    },
    {
      accessorFn: (row) => row.stateCodeA,
      id: "stateCodeA",
      cell: (info) => info.getValue(),
      header: () => <>StateCodeA</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: stateData, isLoading } = useQuery<StateType[]>({
    queryKey: [queryKeys.STATE_DATA],
    queryFn: getStateData,
    staleTime: Infinity,
  });

  const tableConfig: TableType<StateType> = {
    config: {
      columns: columns,
      tableData: stateData ? stateData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>
          {isLoading ? <Loader /> : null}
        </Table>
      </BorderLayout>
    </>
  );
};
