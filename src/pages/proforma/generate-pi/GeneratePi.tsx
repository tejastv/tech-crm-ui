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
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { GeneratePiType, useProformaApiCallHook } from "..";

export const GeneratePi: React.FC = () => {
  const { getEnquiryPi, deleteProformaMutation } = useProformaApiCallHook();
  const { data: proformaData, isLoading } = getEnquiryPi();
  const { mutateAsync: deleteProforma } = deleteProformaMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Generate Invoice(PI)",
      buttons: [
        {
          btnTitle: "Add Generate Invoice(PI)",
          btnRoute: COMMON_ROUTES.ADD,
        },
        {
          btnTitle: "Find Invoice",
          btnRoute: COMMON_ROUTES.LIST,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<GeneratePiType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      id: "year",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.fyear,
      header: () => <>Year</>,
    },
    {
      id: "ref_no",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.refNo,
      header: () => <>Ref.no</>,
    },
    {
      id: "enq_date",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.enteredDate,
      header: () => <>Enq.Date</>,
    },
    {
      id: "report_date",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.reportDate,
      header: () => <>Report Date</>,
    },
    {
      id: "company",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.companyName,
      header: () => <>Company</>,
    },
    {
      id: "given_address",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.givenAddress,
      header: () => <>Given Address</>,
    },
    {
      id: "city",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.cityName,
      header: () => <>City</>,
    },
    {
      id: "zip",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.zip,
      header: () => <>Zip</>,
    },
    {
      id: "state",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.stateName,
      header: () => <>State</>,
    },
    {
      id: "countryName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.countryName,
      header: () => <>Country</>,
    },
    {
      id: "phone",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.phone,
      header: () => <>Phone</>,
    },
    {
      id: "fax",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.fax,
      header: () => <>Fax</>,
    },
    {
      id: "email",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.email,
      header: () => <>Email</>,
    },
    {
      id: "website",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.website,
      header: () => <>Website</>,
    },
    {
      id: "contactPerson",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.contactPerson,
      header: () => <>Contact Person</>,
    },
    {
      id: "designation",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.designation,
      header: () => <>Designation</>,
    },
    {
      id: "bankers",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.bankers,
      header: () => <>Bankers</>,
    },
    {
      id: "notes",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.notes,
      header: () => <>Notes</>,
    },
    {
      id: "sourceName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.sourceName,
      header: () => <>Source</>,
    },
    {
      id: "enquiryStatus",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.enquiryStatus,
      header: () => <>Enq.Status</>,
    },
    {
      id: "localSource",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.localSource,
      header: () => <>Local Source</>,
    },
    {
      id: "clientRefNo",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientRefNo,
      header: () => <>Client Ref</>,
    },
    {
      id: "clientName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientName,
      header: () => <>Client</>,
    },
    {
      id: "clientAddress",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientAddress,
      header: () => <>Client Address</>,
    },
    {
      id: "clientCityName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientCityName,
      header: () => <>Client City</>,
    },
    {
      id: "clientZip",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientZip,
      header: () => <>Client Zip</>,
    },
    {
      id: "clientState",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientState,
      header: () => <>Client State</>,
    },
    {
      id: "clientCountryName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientCountryName,
      header: () => <>Client Country</>,
    },
    {
      id: "clientPhone",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientPhone,
      header: () => <>Client Phone</>,
    },
    {
      id: "clientFax",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientFax,
      header: () => <>Client Fax</>,
    },
    {
      id: "clientContactPerson",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientContactPerson,
      header: () => <>Client ContactPerson</>,
    },
    {
      id: "clientDesignation",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.clientDesignation,
      header: () => <>Client Designation</>,
    },
    {
      id: "printStatus",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.printStatus,
      header: () => <>Print Status</>,
    },
    {
      id: "dueDate",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.dueDate,
      header: () => <>Due On</>,
    },
    {
      id: "serviceTypeName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.serviceTypeName,
      header: () => <>Service Type</>,
    },
    {
      id: "executiveName",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.executiveName,
      header: () => <>Executive</>,
    },
    {
      id: "requestNo",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.requestNo,
      header: () => <>Request No</>,
    },
    {
      id: "instruction",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.instruction,
      header: () => <>Instruction</>,
    },
    {
      id: "reportPrice",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.reportPrice,
      header: () => <>Report Price</>,
    },
    {
      id: "adjustment",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.adjustment,
      header: () => <>Adjustment</>,
    },
    {
      id: "remarks",
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.remarks,
      header: () => <>Remarks</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const deleteProformaClick = (proformaData: GeneratePiType) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteProforma(proformaData.enqID.toString());
    }
  };

  const editProformaClick = (proformaData: GeneratePiType) => {
    console.log(proformaData);
    navigate(COMMON_ROUTES.EDIT.replace(":id", proformaData.enqID.toString()));
  };

  const tableConfig: TableType<GeneratePiType> = {
    config: {
      tableName: "Proforma Master",
      columns: columns,
      tableData: proformaData ? proformaData : [],
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
      onDeleteClick: deleteProformaClick,
      onEditClick: editProformaClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
      {!isLoading ? <Table config={tableConfig.config}/> :  <Loader />}
      </BorderLayout>
    </>
  );
};
