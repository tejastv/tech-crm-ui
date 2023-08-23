import React from "react";

import { BorderLayout, PageBreadcrumb, Table, TableType } from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { ColumnDef } from "@tanstack/react-table";
import { CityType } from "@pages/master";
import { useHttp } from "@hooks/useHttp";
import { useRequestProcessor } from "@hooks/useRequestProcessor";

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

  const { query } = useRequestProcessor();
  const { getData } = useHttp();

  const { data, isLoading, isError } = query<CityType>("city-data", getData);
  console.log(data, isLoading, isError);

  const tableConfig: TableType<CityType> = {
    config: {
      columns: columns,
      tableData: [],
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
        <Table config={tableConfig.config}></Table>
      </BorderLayout>
    </>
  );
};
