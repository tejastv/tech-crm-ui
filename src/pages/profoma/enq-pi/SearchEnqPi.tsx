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

export const SearchEnqPi: React.FC = () => {
  const { getCompany, deleteCompanyMutation } = useCompanyApiCallHook();
  const { data: companyData, isLoading } = getCompany();
  const { mutateAsync: deleteCompany } = deleteCompanyMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Generate Invoice(PI)",
      buttons: [
        {
          btnTitle: "",
          btnRoute: "",
        },
      ],
    },

    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CompanyType>[] = [
    {
      id: "selectall",
      cell: (info) => info.getValue(),
      header: () => <>Select All</>,
    },
    {
      id: "year",
      cell: (info) => info.getValue(),
      header: () => <>Year</>,
    },
    {
      id: "refno",
      cell: (info) => info.getValue(),
      header: () => <>Ref.no</>,
    },
    {
      id: "enqdate",
      cell: (info) => info.getValue(),
      header: () => <>Enq.Date</>,
    },
    {
      id: "reportdate",
      cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
    },
    {
      accessorFn: (row) => row.companyName,
      id: "companyName",
      cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Given Address</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "city",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "Zip",
      cell: (info) => info.getValue(),
      header: () => <>Zip</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
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
      accessorFn: (row) => row.phone,
      id: "fax",
      cell: (info) => info.getValue(),
      header: () => <>Fax</>,
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
      accessorFn: (row) => row.contactPerson,
      id: "designation",
      cell: (info) => info.getValue(),
      header: () => <>Designation</>,
    },
    {
      accessorFn: (row) => row.regdOffice,
      id: "bankers",
      cell: (info) => info.getValue(),
      header: () => <>Bankers</>,
    },
    {
      accessorFn: (row) => row.regdOffice,
      id: "notes",
      cell: (info) => info.getValue(),
      header: () => <>Notes</>,
    },
    {
      accessorFn: (row) => row.regdOffice,
      id: "source",
      cell: (info) => info.getValue(),
      header: () => <>Source</>,
    },
    {
      accessorFn: (row) => row.regdOffice,
      id: "enqstatus",
      cell: (info) => info.getValue(),
      header: () => <>Enq.Status</>,
    },
    {
      accessorFn: (row) => row.regdOffice,
      id: "localsource",
      cell: (info) => info.getValue(),
      header: () => <>Local Source</>,
    },
    {
      accessorFn: (row) => row.cmie,
      id: "clientref",
      cell: (info) => info.getValue(),
      header: () => <>Client Ref.</>,
    },
    {
      accessorFn: (row) => row.rocStatus,
      id: "client",
      cell: (info) => info.getValue(),
      header: () => <>client</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Client Address</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "city",
      cell: (info) => info.getValue(),
      header: () => <>Client City</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "Zip",
      cell: (info) => info.getValue(),
      header: () => <>Client Zip</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <>Client State</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Client Country</>,
    },
    {
      accessorFn: (row) => row.phone,
      id: "phone",
      cell: (info) => info.getValue(),
      header: () => <>Client Phone</>,
    },
    {
      accessorFn: (row) => row.phone,
      id: "fax",
      cell: (info) => info.getValue(),
      header: () => <>Client Fax</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Client Contact Person</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Client Designation</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Client Print Status</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Due on</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Service Type </>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Executive</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Due on</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
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
