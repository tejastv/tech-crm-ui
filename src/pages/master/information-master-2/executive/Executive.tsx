import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { ExecutiveType, useExecutiveApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const Executive: React.FC = () => {
  const { getExecutive, deleteExecutiveMutation } = useExecutiveApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Sales Executive",
      buttons: [
        {
          btnTitle: "Add Sales Executive",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<ExecutiveType>[] = [
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
      accessorFn: (row) => row.executive,
      id: "executive",
      cell: (info) => info.getValue(),
      header: () => <>Executive</>,
    },
    {
      accessorFn: (row) => row.email,
      id: "email",
      cell: (info) => info.getValue(),
      header: () => <>Email</>,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.invoiceRequired,
      id: "invoiceRequired",
      cell: (info) => info.getValue(),
      header: () => <>InvoiceRequired</>,
    },
    {
      accessorFn: (row) => row.stateName,
      id: "stateName",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    },
  ];

  const { data: executiveData, isFetching } = getExecutive();
  const { mutateAsync: deleteExecutive } = deleteExecutiveMutation();

  const deleteExecutiveClick = async (executiveData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteExecutive(executiveData.executiveId);
    }
  };

  const editExecutiveClick = (executiveData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", executiveData.executiveId), {
      state: null,
    });
  };

  const tableConfig: TableType<ExecutiveType> = {
    config: {
      tableName: "Sales Executive",
      columns: columns,
      tableData: executiveData || [],
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
      onDeleteClick: deleteExecutiveClick,
      onEditClick: editExecutiveClick,
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
