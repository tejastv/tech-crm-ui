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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const State: React.FC = () => {
  const { getState, deleteState } = useLocationMasterApiCall();
  const queryClient = useQueryClient();

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
      id: "srNo",
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
    queryFn: getState,
    staleTime: Infinity,
  });

  const deleteStateClick = (stateData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteStateMutation.mutate(stateData.id);
    }
  };

  const deleteStateMutation = useMutation({
    mutationFn: deleteState,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.STATE_DATA] });
    },
    onError: () => {
      console.log("Error");
    },
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
      onDeleteClick: deleteStateClick,
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
