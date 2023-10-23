// CompanyMaster.tsx
import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { CompanyType, useCompanyApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export const PurchaseBills: React.FC = () => {
  const { getCompany, deleteCompanyMutation } = useCompanyApiCallHook();
  const { data: companyData, isLoading } = getCompany();
  const { mutateAsync: deleteCompany } = deleteCompanyMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Purchase Bills(of Suppliers)",
      buttons: [
        {
          btnTitle: "Add Purchase Bills(of Suppliers)",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CompanyType>[] = [
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
    {
      id: "selectall",
      cell: (info) => info.getValue(),
      header: () => <>SN</>,
    },
    {
      id: "year",
      cell: (info) => info.getValue(),
      header: () => <>Inv No</>,
    },
    {
      id: "refno",
      cell: (info) => info.getValue(),
      header: () => <>Inv Date</>,
    },
    {
      accessorFn: (row) => row.companyName,
      id: "companyName",
      cell: (info) => info.getValue(),
      header: () => <>Supllier Name</>,
    },
    {
      accessorFn: (row) => row.companyName,
      id: "companyName",
      cell: (info) => info.getValue(),
      header: () => <>Amount</>,
    },
    {
      accessorFn: (row) => row.companyName,
      id: "companyName",
      cell: (info) => info.getValue(),
      header: () => <>ST</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>TAmount</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "city",
      cell: (info) => info.getValue(),
      header: () => <>EdCessPer</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "Zip",
      cell: (info) => info.getValue(),
      header: () => <>Ed.Cess</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <>Total Amount</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Note</>,
    },
  ];

  const deleteCompanyClick = (companyData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteCompany(companyData.companyId);
    }
  };

  const editCompanyClick = (companyData: any) => {
    console.log(companyData);
    navigate(COMMON_ROUTES.EDIT.replace(":id", companyData.companyId));
  };

  const tableConfig: TableType<CompanyType> = {
    config: {
      tableName: "Company Master",
      columns: columns,
      tableData: companyData || [],
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
      onDeleteClick: deleteCompanyClick,
      onEditClick: editCompanyClick,
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
