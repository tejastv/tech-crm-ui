// Client.tsx
import React, { useState } from "react";
import { COMMON_ROUTES } from "@constants/route-constants";
import { BorderLayout, PageBreadcrumb, Table, TableType } from "@shared/index";
import { ColumnDef } from "@tanstack/react-table";
import { makeData } from "../makeData";
import { ClientType } from "@pages/master";

const Client: React.FC = () => {
  const [tableData, setData] = useState(() => makeData(50));

  const config = {
    breadcrumbConfig: {
      pageHeading: "Client Master",
      btnTitle: "Add Client",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<ClientType>[] = [
    {
      accessorFn: (row) => row.srNo,
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Address</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.zip,
      id: "zip",
      cell: (info) => info.getValue(),
      header: () => <>Zip</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.state,
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.phone,
      id: "phone",
      cell: (info) => info.getValue(),
      header: () => <>Phone</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.fax,
      id: "fax",
      cell: (info) => info.getValue(),
      header: () => <>Fax</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.email,
      id: "email",
      cell: (info) => info.getValue(),
      header: () => <>Email</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.website,
      id: "website",
      cell: (info) => info.getValue(),
      header: () => <>Website</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Contact Person</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.designation,
      id: "designation",
      cell: (info) => info.getValue(),
      header: () => <>Designation</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.currencyType,
      id: "currencyType",
      cell: (info) => info.getValue(),
      header: () => <>Currency Type</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.OSLIsPrinted,
      id: "OSLIsPrinted",
      cell: (info) => info.getValue(),
      header: () => <>OSL is Printed</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.monthlyInvoice,
      id: "monthlyInvoice",
      cell: (info) => info.getValue(),
      header: () => <>Monthly Invoice</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.individualReport,
      id: "individualReport",
      cell: (info) => info.getValue(),
      header: () => <>Individual Report</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.enteredDate,
      id: "enteredDate",
      cell: (info) => info.getValue(),
      header: () => <>Entered Date</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.modifiedDate,
      id: "modifiedDate",
      cell: (info) => info.getValue(),
      header: () => <>Modified Date</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.instruction,
      id: "instruction",
      cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.groupName,
      id: "groupName",
      cell: (info) => info.getValue(),
      header: () => <>Group Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.executive,
      id: "executive",
      cell: (info) => info.getValue(),
      header: () => <>Executive</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.disType,
      id: "disType",
      cell: (info) => info.getValue(),
      header: () => <>Dis Type</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.discount,
      id: "discount",
      cell: (info) => info.getValue(),
      header: () => <>Discount</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.toAdjust,
      id: "toAdjust",
      cell: (info) => info.getValue(),
      header: () => <>To Adjust</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.balToAdjust,
      id: "balToAdjust",
      cell: (info) => info.getValue(),
      header: () => <>Bal to Adjust</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.adjustPerEnquiry,
      id: "adjustPerEnquiry",
      cell: (info) => info.getValue(),
      header: () => <>Adjust Per Enquiry</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.remarks,
      id: "remarks",
      cell: (info) => info.getValue(),
      header: () => <>Remarks</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.adjustFromDate,
      id: "adjustFromDate",
      cell: (info) => info.getValue(),
      header: () => <>Adjust From Date</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.segmentName,
      id: "segmentName",
      cell: (info) => info.getValue(),
      header: () => <>Segment Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.crDays,
      id: "crDays",
      cell: (info) => info.getValue(),
      header: () => <>Cr Days</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.GSTN,
      id: "GSTN",
      cell: (info) => info.getValue(),
      header: () => <>GSTN</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.stateCodeN,
      id: "stateCodeN",
      cell: (info) => info.getValue(),
      header: () => <>State Code N</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.GSTYN,
      id: "GSTYN",
      cell: (info) => info.getValue(),
      header: () => <>GSTYN</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.action,
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
      footer: (props) => props.column.id,
    },
  ];

  const tableConfig: TableType<ClientType> = {
    config: {
      columns: columns,
      data: [],
      pdfBtn: true,
      globalSearchBox: true,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config} />
      </BorderLayout>
    </>
  );
};

export default Client;
