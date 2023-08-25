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
  CountryType,
  queryKeys,
  useLocationMasterApiCall,
} from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

export const Country: React.FC = () => {
  const { getCountryData } = useLocationMasterApiCall();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Country",
      btnTitle: "Add Country",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CountryType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
    {
      accessorFn: (row) => row.countryCode,
      id: "countryCode",
      cell: (info) => info.getValue(),
      header: () => <>Country Code</>,
    },
    {
      accessorFn: (row) => row.continentId,
      id: "continentId",
      cell: (info) => info.getValue(),
      header: () => <>Continent ID</>,
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

  const { data: stateData, isLoading } = useQuery<CountryType[]>({
    queryKey: [queryKeys.COUNTRY_DATA],
    queryFn: getCountryData,
    staleTime: Infinity,
  });

  const tableConfig: TableType<CountryType> = {
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
