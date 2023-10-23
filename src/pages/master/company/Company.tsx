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

export const CompanyMaster: React.FC = () => {
  const { getCompany, deleteCompanyMutation } = useCompanyApiCallHook();
  const { data: companyData, isLoading } = getCompany();
  const { mutateAsync: deleteCompany } = deleteCompanyMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Company Master",
      buttons: [
        {
          btnTitle: "Add Company",
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
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>SN</>,
    },
    {
      accessorFn: (row) => row.companyName,
      id: "companyName",
      cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      accessorFn: (row) => row.hsCode,
      id: "hsCode",
      cell: (info) => info.getValue(),
      header: () => <>HS Code</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },

    {
      accessorFn: (row) => row.countryName,
      id: "country",
      cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      accessorFn: (row) => row.phone,
      id: "phone",
      cell: (info) => info.getValue(),
      header: () => <>Phone</>,
    },
    {
      accessorFn: (row) => row.email,
      id: "email",
      cell: (info) => info.getValue(),
      header: () => <>Email</>,
    },
    {
      accessorFn: (row) => row.website,
      id: "website",
      cell: (info) => info.getValue(),
      header: () => <>Website</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Contact Person</>,
    },
    {
      accessorFn: (row) => row.regdOffice,
      id: "regdOffice",
      cell: (info) => info.getValue(),
      header: () => <>Registered Office</>,
    },
    {
      accessorFn: (row) => row.cmie,
      id: "cmie",
      cell: (info) => info.getValue(),
      header: () => <>CMIE</>,
    },
    {
      accessorFn: (row) => row.rocStatus,
      id: "rocStatus",
      cell: (info) => info.getValue(),
      header: () => <>ROC Status</>,
    },
    {
      accessorFn: (row) => row.records,
      id: "records",
      cell: (info) => info.getValue(),
      header: () => <>Records</>,
    },
    {
      accessorFn: (row) => row.recFin,
      id: "recFin",
      cell: (info) => info.getValue(),
      header: () => <>RecFin</>,
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
