import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "constants";
import {
  ContinentType,
  queryKeys,
  useLocationMasterApiCall,
} from "@master/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";

export const Continent: React.FC = () => {
  const { getContinent, deleteContinent } = useLocationMasterApiCall();
  const queryClient = useQueryClient();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Continent",
      btnTitle: "Add Continent",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<ContinentType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.continent,
      id: "continent",
      cell: (info) => info.getValue(),
      header: () => <>Continent</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: continentData, isLoading } = useQuery<ContinentType[]>({
    queryKey: [queryKeys.CONTINENT_DATA],
    queryFn: getContinent,
    staleTime: Infinity,
  });

  const deleteContinentClick = (continentData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteContinentMutation.mutate(continentData.id);
    }
  };

  const deleteContinentMutation = useMutation({
    mutationFn: deleteContinent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.CONTINENT_DATA] });
    },
    onError: () => {
      console.log("Error");
    },
  });

  const tableConfig: TableType<ContinentType> = {
    config: {
      columns: columns,
      tableData: continentData ? continentData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
      onDeleteClick: deleteContinentClick,
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
