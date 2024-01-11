import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { CreditDaysType, useCreditDaysApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const CreditDays: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Credit Period",
      buttons: [
        {
          btnTitle: "Add Credit Period",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getCreditDays, deleteCreditDaysMutation } =
    useCreditDaysApiCallHook();
  const navigate = useNavigate();
  const columns: ColumnDef<CreditDaysType>[] = [
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
      accessorFn: (row) => row.creditPeriod,
      id: "creditPeriod",
      cell: (info) => info.getValue(),
      header: () => <>Credit Days</>,
    },
  ];

  const { data: creditDaysData, isFetching } = getCreditDays();
  const { mutateAsync: deleteCreditDays } = deleteCreditDaysMutation();

  const deleteCreditDaysClick = async (creditDaysData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteCreditDays(creditDaysData.creditPeriodId);
    }
  };

  const editCreditDaysClick = (creditDaysData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", creditDaysData.creditPeriodId), {
      state: null,
    });
  };

  const tableConfig: TableType<CreditDaysType> = {
    config: {
      tableName: "Credit Period",
      columns: columns,
      tableData: creditDaysData || [],
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
      onDeleteClick: deleteCreditDaysClick,
      onEditClick: editCreditDaysClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>{isFetching && <Loader />}</Table>
      </BorderLayout>
    </>
  );
};
