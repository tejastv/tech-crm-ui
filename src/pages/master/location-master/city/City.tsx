import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { ColumnDef } from "@tanstack/react-table";
import { CityType, useLocationMasterApiCall } from "@pages/master";
import { useQuery } from "@tanstack/react-query";
import { Puff } from "react-loader-spinner";

export const City: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "City",
      btnTitle: "Add City",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CityType>[] = [
    {
      accessorFn: (row) => row.id,
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>City Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.oscopies,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>OSCopies</>,
      footer: (props) => props.column.id,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const cityData = "city-data";

  const { getCityData } = useLocationMasterApiCall();

  const { data, isLoading, isError } = useQuery<CityType[]>({
    queryKey: [cityData],
    queryFn: getCityData,
  });

  if (isLoading) {
    console.log(isLoading);
  }

  const tableConfig: TableType<CityType> = {
    config: {
      columns: columns,
      tableData: data ? data : [],
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
        {/* <Loader /> */}
        {isLoading ? <Loader /> : <Table config={tableConfig.config}></Table>}
      </BorderLayout>
    </>
  );
};
