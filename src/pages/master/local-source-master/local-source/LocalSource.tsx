import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { LocalSourceType, useLocalSourceApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export const LocalSource: React.FC = () => {
  const { getLocalSource, deleteLocalSourceMutation } =
    useLocalSourceApiCallHook();
  const { data: localsourceData, isFetching } = getLocalSource();

  const { mutateAsync: deleteLocalSource } = deleteLocalSourceMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Local Source",
      buttons: [
        {
          btnTitle: "Add Local Source",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };
  const columns: ColumnDef<LocalSourceType>[] = [
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
      accessorFn: (row) => row.localSource,
      id: "localsource",
      cell: (info) => info.getValue(),
      header: () => <>Local Source</>,
    },
    {
      accessorFn: (row) => row.currency,
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
  ];
  const deleteLocalSourceClick = (localsourceData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteLocalSource(localsourceData.localSourceId);
    }
  };

  const editLocalSourceClick = (localsourceData: any) => {
    console.log(localsourceData);
    navigate(COMMON_ROUTES.EDIT.replace(":id", localsourceData.localSourceId), {
      state: localsourceData,
    });
  };

  const tableConfig: TableType<LocalSourceType> = {
    config: {
      tableName: "Local Source",
      columns: columns,
      tableData: (localsourceData && Object.values(localsourceData)) || [],
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
      onDeleteClick: deleteLocalSourceClick,
      onEditClick: editLocalSourceClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        {!isFetching ? <Table config={tableConfig.config} /> : <Loader />}
      </BorderLayout>
    </>
  );
};
