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
import { CityType, useCityApiCallHook } from "@pages/master";
import { queryKeys } from "@constants/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const City: React.FC = () => {
  const { getCity, deleteCity } = useCityApiCallHook();
  const queryClient = useQueryClient();

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

  const { data: cityData, isLoading } = useQuery<CityType[]>({
    queryKey: [queryKeys.CITY_DATA],
    queryFn: getCity,
    staleTime: Infinity,
  });

  const deleteCityClick = (cityData: any) => {
    var continent = confirm("Are you sure to delete it?");
    if (continent == true) {
      deleteCityMutation.mutate(cityData.id);
    }
  };

  const deleteCityMutation = useMutation({
    mutationFn: deleteCity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
    },
    onError: () => {
      console.log("Error");
    },
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
      onDeleteClick: deleteCityClick,
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
