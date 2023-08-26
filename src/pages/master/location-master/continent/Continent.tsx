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
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";

export const Continent: React.FC = () => {
  const { getContinent } = useLocationMasterApiCall();

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
