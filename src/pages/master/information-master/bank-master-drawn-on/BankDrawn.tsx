import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { BankdrawnonType, useBankMasterDrawnApiCallHook } from "@pages/master";
import { ColumnDef } from "@tanstack/react-table";
import { COMMON_ROUTES } from "@constants/index";
import { useNavigate } from "react-router-dom";

export const BankMasterDrawn: React.FC = () => {
  const { getBankMasterDrawnOn, deleteBankMasterDrawnOnMutation } =
    useBankMasterDrawnApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Bank Master(Drawn)",
      buttons: [
        {
          btnTitle: "Add Bank Master(Drawn)",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<BankdrawnonType>[] = [
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
      accessorFn: (row) => row.bankName,
      id: "bankName",
      cell: (info) => info.getValue(),
      header: () => <>Bank Name</>,
    },
  ];

  const { data: BankMasterDrawnData, isLoading } = getBankMasterDrawnOn();
  const { mutateAsync: deleteBankMasterDrawn } =
    deleteBankMasterDrawnOnMutation();

  const deleteBankMasterDrawnClick = async (BankMasterDrawnData: any) => {
    var paymentMode = confirm("Are you sure to delete it?");
    if (paymentMode) {
      await deleteBankMasterDrawn(BankMasterDrawnData.bankId);
    }
  };

  const editBankMasterDrawnClick = (BankMasterDrawnData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", BankMasterDrawnData.bankId));
  };

  const tableConfig: TableType<BankdrawnonType> = {
    config: {
      tableName: "Bank Master(Drawn)",
      columns: columns,
      tableData: BankMasterDrawnData || [],
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
      onDeleteClick: deleteBankMasterDrawnClick,
      onEditClick: editBankMasterDrawnClick,
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
