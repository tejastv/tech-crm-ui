import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { PaymentModeType, usePaymentModeApiCallHook } from "@pages/master";
import { ColumnDef } from "@tanstack/react-table";
import { COMMON_ROUTES } from "@constants/index";
import { useNavigate } from "react-router-dom";

export const PaymentMode: React.FC = () => {
  const { getPaymentMode, deletePaymentModeMutation } =
    usePaymentModeApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Payment Mode",
      buttons: [
        {
          btnTitle: "Add Payment Mode",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<PaymentModeType>[] = [
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
      accessorFn: (row) => row.paymentMode,
      id: "paymentMode",
      cell: (info) => info.getValue(),
      header: () => <>PaymentMode</>,
    },
  ];

  const { data: paymentModeData, isLoading } = getPaymentMode();
  const { mutateAsync: deletePaymentMode } = deletePaymentModeMutation();

  const deletePaymentModeClick = async (paymentData: any) => {
    var paymentMode = confirm("Are you sure to delete it?");
    if (paymentMode) {
      await deletePaymentMode(paymentData.paymentModeId);
    }
  };

  const editPaymentModeClick = (paymentData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", paymentData.paymentModeId));
  };

  const tableConfig: TableType<PaymentModeType> = {
    config: {
      tableName: "Payment Mode",
      columns: columns,
      tableData: paymentModeData ? paymentModeData : [],
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
      onDeleteClick: deletePaymentModeClick,
      onEditClick: editPaymentModeClick,
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
