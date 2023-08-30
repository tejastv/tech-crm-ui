import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { CountryType, useCountryApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export const Country: React.FC = () => {
  const { getCountry, deleteCountryMutation } = useCountryApiCallHook();
  const navigate = useNavigate();

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

  const { data: stateData, isLoading } = getCountry();
  const { mutateAsync: deleteCountry } = deleteCountryMutation();

  const deleteCountryClick = (countryData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteCountry(countryData.countryId);
    }
  };

  const editCountryClick = (countryData: any) => {
    console.log(countryData);
    navigate(COMMON_ROUTES.EDIT.replace(":id", countryData.countryId));
  };

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
      onDeleteClick: deleteCountryClick,
      onEditClick: editCountryClick,
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
