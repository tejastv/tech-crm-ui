import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { CountryType, useCountryApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export const Country: React.FC = () => {
  const { getCountry, deleteCountryMutation } = useCountryApiCallHook();
  const { data: countryData, isFetching } = getCountry();
  const { mutateAsync: deleteCountry } = deleteCountryMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Country",
      buttons: [
        {
          btnTitle: "Add Country",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CountryType>[] = [
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
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
  ];

  const deleteCountryClick = (countryData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteCountry(countryData.countryId);
    }
  };

  const editCountryClick = (countryData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", countryData.countryId));
  };

  const tableConfig: TableType<CountryType> = {
    config: {
      tableName: "Country",
      columns: columns,
      tableData: (countryData && Object.values(countryData)) || [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
      },
      onDeleteClick: deleteCountryClick,
      onEditClick: editCountryClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>{isFetching && <Loader />}</Table>
      </BorderLayout>
    </>
  );
};
