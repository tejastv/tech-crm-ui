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
import { ActualBuyerType, useActualBuyerApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const ActualBuyer: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Actual Buyer Master",
      buttons: [
        {
          btnTitle: "Add Actual Buyer Master",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getActualBuyer, deleteActualBuyerMutation } =
    useActualBuyerApiCallHook();
  const navigate = useNavigate();

  const columns: ColumnDef<ActualBuyerType>[] = [
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
      accessorFn: (row) => row.partyName,
      id: "partyName",
      cell: (info) => info.getValue(),
      header: () => <>Actual Buyer</>,
    },
    {
      accessorFn: (row) => row.partyAddress,
      id: "partyAddress",
      cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      accessorFn: (row) => row.telNo,
      id: "telNo",
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
      accessorFn: (row) => row.personResponsible,
      id: "personResponsible",
      cell: (info) => info.getValue(),
      header: () => <>Contact Person</>,
    },
    {
      accessorFn: (row) => row.personDesg,
      id: "personDesg",
      cell: (info) => info.getValue(),
      header: () => <>Designation</>,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.state,
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
      accessorFn: (row) => row.website,
      id: "website",
      cell: (info) => info.getValue(),
      header: () => <>Website</>,
    },
    {
      accessorFn: (row) => row.revisionCntr,
      id: "revisionCntr",
      cell: (info) => info.getValue(),
      header: () => <>Date</>,
    },
    {
      accessorFn: (row) => row.gstn,
      id: "gstn",
      cell: (info) => info.getValue(),
      header: () => <>GSTN</>,
    },
  ];

  const { data: actualBuyerData, isLoading } = getActualBuyer();
  const { mutateAsync: deleteActualBuyer } = deleteActualBuyerMutation();

  const deleteActualBuyerClick = async (actualBuyerData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteActualBuyer(actualBuyerData.actualBuyerId);
    }
  };

  const editActualBuyerClick = (actualBuyerData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", actualBuyerData.actualBuyerId));
  };

  const tableConfig: TableType<ActualBuyerType> = {
    config: {
      tableName: "ActualBuyer",
      columns: columns,
      tableData: actualBuyerData ? actualBuyerData : [],
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
      onDeleteClick: deleteActualBuyerClick,
      onEditClick: editActualBuyerClick,
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
