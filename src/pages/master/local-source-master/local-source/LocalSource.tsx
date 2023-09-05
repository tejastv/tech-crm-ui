import React from "react";

import { BorderLayout, Loader, PageBreadcrumb, Table, TableType } from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { LocalSourceType, useLocalSourceApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";

export const LocalSource: React.FC = () => {
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { data: localsourceData, isLoading } = getLocalSource();


  const config = {
    breadcrumbConfig: {
      pageHeading: "Local Source",
      btnTitle: "Add Local Source",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },

  };
    const columns: ColumnDef<LocalSourceType>[] = [
      {
        id: "srNo",
        cell: (info) => info.getValue(),
        header: () => <>Sr no</>,
      },
      {
        accessorFn: (row) => row.localSource,
        id: "localsource",
        cell: (info) => info.getValue(),
        header: () => <>Local Source</>,
      },
      {
        accessorFn: (row) => row.currencyId,
        id: "currency",
        cell: (info) => info.getValue(),
        header: () => <>Currency Type</>,
      },
      {
        accessorFn: (row) => row.email,
        id: "email",
        cell: (info) => info.getValue(),
        header: () => <>Email</>,
      },
      {
        accessorFn: (row) => row.emailCc,
        id: "emailcc",
        cell: (info) => info.getValue(),
        header: () => <>EmailCC</>,
      },
      {
        accessorFn: (row) => row.countryName,
        id: "country",
        cell: (info) => info.getValue(),
        header: () => <>Country Name</>,
      },
      {
        id: "action",
        cell: (info) => info.getValue(),
        header: () => <>Action</>,
      },
    ];
    // const deleteCountryClick = (countryData: any) => {
    //   var conformation = confirm("Are you sure to delete it?");
    //   if (conformation) {
    //     deleteCountry(countryData.countryId);
    //   }
    // };
  
    // const editCountryClick = (countryData: any) => {
    //   console.log(countryData);
    //   navigate(COMMON_ROUTES.EDIT.replace(":id", countryData.countryId));
    // };
  
    const tableConfig: TableType<LocalSourceType> = {
      config: {
        columns: columns,
        tableData: localsourceData ? localsourceData : [],
        copyBtn: true,
        csvBtn: true,
        excelBtn: true,
        pdfBtn: true,
        printBtn: true,
        globalSearchBox: true,
        pagination: true,
        // onDeleteClick: deleteCountryClick,
        // onEditClick: editCountryClick,
      },
    };
  
  
  
 


  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>{isLoading && <Loader />}</Table>
      </BorderLayout>
    </>
  );
};
