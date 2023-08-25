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

export const City: React.FC = () => {
  const { getCityData } = useLocationMasterApiCall();

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
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City Name</>,
    },
    {
      accessorFn: (row) => row.oscopies,
      id: "oscopies",
      cell: (info) => info.getValue(),
      header: () => <>OSCopies</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const cityDataKey = "city-data";

  const { data: cityData, isLoading } = useQuery<CityType[]>({
    queryKey: [cityDataKey],
    queryFn: getCityData,
    staleTime: Infinity,
  });

  const tableConfig: TableType<CityType> = {
    config: {
      columns: columns,
      tableData: cityData ? cityData : [],
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
