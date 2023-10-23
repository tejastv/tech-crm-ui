import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import {
  BankDepositType,
  useBankMasterDepositApiCallHook,
} from "@pages/master";
import { ColumnDef } from "@tanstack/react-table";
import { COMMON_ROUTES } from "@constants/index";
import { useNavigate } from "react-router-dom";

export const BankMasterDeposit: React.FC = () => {
  const { getBankMasterDeposit, deleteBankMasterDepositMutation } =
    useBankMasterDepositApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Bank Master(Deposit)",
      buttons: [
        {
          btnTitle: "Add Bank Master(Deposit)",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<BankDepositType>[] = [
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
    {
      accessorFn: (row) => row.accountNo,
      id: "accountNo",
      cell: (info) => info.getValue(),
      header: () => <>Account No</>,
    },
  ];

  const { data: BankMasterDepositData, isLoading } = getBankMasterDeposit();
  const { mutateAsync: deleteBankMasterDeposit } =
    deleteBankMasterDepositMutation();

  const deleteBankMasterDepositClick = async (BankMasterDepositData: any) => {
    var paymentMode = confirm("Are you sure to delete it?");
    if (paymentMode) {
      await deleteBankMasterDeposit(BankMasterDepositData.id);
    }
  };

  const editBankMasterDepositClick = (BankMasterDepositData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", BankMasterDepositData.id));
  };

  const tableConfig: TableType<BankDepositType> = {
    config: {
      tableName: "Bank Master(Deposit)",
      columns: columns,
      tableData: BankMasterDepositData ? BankMasterDepositData : [],
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
      onDeleteClick: deleteBankMasterDepositClick,
      onEditClick: editBankMasterDepositClick,
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
