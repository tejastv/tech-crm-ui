import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { ClientType, useCityApiCallHook, useClientApiCallHook, useStateApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const Client: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Client",
      btnTitle: "Add Client",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getClient, deleteClientMutation } = useClientApiCallHook();
  const navigate = useNavigate();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { data: cityData } = getCity();
  const { data: stateData } = getState();
  const columns: ColumnDef<ClientType>[] = [





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
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityId",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.zip,
      id: "zip",
      cell: (info) => info.getValue(),
      header: () => <>Zip</>,
    },
    {
      accessorFn: (row) => row.stateName,
      id: "stateId",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
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
      accessorFn: (row) => row.fax,
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
      accessorFn: (row) => row.currencyName,
      id: "currencyID",
      cell: (info) => info.getValue(),
      header: () => <>Currency Type</>,
    },
    {
      accessorFn: (row) => row.designation,
      id: "designation",
      cell: (info) => info.getValue(),
      header: () => <>Designation</>,
    },
    {
      accessorFn: (row) => row.osListPrInteger,
      id: "osListPrInteger",
      cell: (info) => info.getValue(),
      header: () => <>OSL is Printed</>,
    },
    {
      accessorFn: (row) => row.monthlyInvoice,
      id: "monthlyInvoice",
      cell: (info) => info.getValue(),
      header: () => <>Monthly Invoice</>,
    },
    {
      accessorFn: (row) => row.individualReport,
      id: "individualReport",
      cell: (info) => info.getValue(),
      header: () => <>Individual Report</>,
    },
    {
      accessorFn: (row) => row.enteredDate,
      id: "enteredDate",
      cell: (info) => info.getValue(),
      header: () => <>Entered Date</>,
    },
    {
      accessorFn: (row) => row.modifiedDate,
      id: "modifiedDate",
      cell: (info) => info.getValue(),
      header: () => <>Modified Date</>,
    },
    {
      accessorFn: (row) => row.instruction,
      id: "instruction",
      cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
    {
      accessorFn: (row) => row.groupName,
      id: "groupId",
      cell: (info) => info.getValue(),
      header: () => <>group Name</>,
    },
    {
      accessorFn: (row) => row.executive_id,
      id: "executive_id",
      cell: (info) => info.getValue(),
      header: () => <>Executive</>,
    },
    {
      accessorFn: (row) => row.disType,
      id: "disType",
      cell: (info) => info.getValue(),
      header: () => <>Dis Type</>,
    },
    {
      accessorFn: (row) => row.discount,
      id: "discount",
      cell: (info) => info.getValue(),
      header: () => <>Discount</>,
    },
    {
      accessorFn: (row) => row.toAdjust,
      id: "toAdjust",
      cell: (info) => info.getValue(),
      header: () => <>To Adjust</>,
    },
    {
      accessorFn: (row) => row.balToAdjust,
      id: "balToAdjust",
      cell: (info) => info.getValue(),
      header: () => <>Bal To Adjust</>,
    },
    {
      accessorFn: (row) => row.adjustPerEnq,
      id: "adjustPerEnq",
      cell: (info) => info.getValue(),
      header: () => <>Adjust Per Enq</>,
    },
    {
      accessorFn: (row) => row.remarks,
      id: "remarks",
      cell: (info) => info.getValue(),
      header: () => <>Remarks</>,
    },
    {
      accessorFn: (row) => row.adjustfromDate,
      id: "adjustfromDate",
      cell: (info) => info.getValue(),
      header: () => <>Adjust From Date</>,
    },
    {
      accessorFn: (row) => row.segmentName,
      id: "segmentId",
      cell: (info) => info.getValue(),
      header: () => <>Segment Name</>,
    },
    {
      accessorFn: (row) => row.crDays,
      id: "crDays",
      cell: (info) => info.getValue(),
      header: () => <>Cr Days</>,
    },
    {
      accessorFn: (row) => row.gstn,
      id: "gstn",
      cell: (info) => info.getValue(),
      header: () => <>GSTN</>,
    },
    {
      accessorFn: (row) => row.stateID,
      id: "stateID",
      cell: (info) => info.getValue(),
      header: () => <>State Code N</>,
    },
    {
      accessorFn: (row) => row.gstYN,
      id: "gstYN",
      cell: (info) => info.getValue(),
      header: () => <>GSTYN</>,
    },
 
  ];

  const { data: clientData, isLoading } = getClient();
  const { mutateAsync: deleteClient } = deleteClientMutation();

  const deleteClientClick = async (clientData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteClient(clientData.clientID);
    }
  };

  const editClientClick = (clientData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", clientData.clientID));
  };

  const tableConfig: TableType<ClientType> = {
    config: {
      tableName: "Client",
      columns: columns,
      tableData: clientData ? clientData : [],
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
      onDeleteClick: deleteClientClick,
      onEditClick: editClientClick,
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
