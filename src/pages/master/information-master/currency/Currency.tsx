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
import { CurrencyType, useCurrencyApiCallHook } from "@pages/master";
import { useNavigate } from "react-router-dom";

export const Currency: React.FC = () => {
  const { getCurrency, deleteCurrencyMutation } = useCurrencyApiCallHook();
  const navigate = useNavigate();
  const config = {
    breadcrumbConfig: {
      pageHeading: "Currency",
      buttons: [
        {
          btnTitle: "Add Currency",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CurrencyType>[] = [
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
      accessorFn: (row) => row.currencyType,
      id: "currencytype",
      cell: (info) => info.getValue(),
      header: () => <>Currency Type</>,
    },
    {
      accessorFn: (row) => row.currencySymbol,
      id: "currencysymbol",
      cell: (info) => info.getValue(),
      header: () => <>Currency Symobol</>,
    },
    {
      accessorFn: (row) => row.currencyInWord,
      id: "currencyword",
      cell: (info) => info.getValue(),
      header: () => <>Currency in Word</>,
    },
    {
      accessorFn: (row) => row.exchangeRateRs,
      id: "prucheseexchg",
      cell: (info) => info.getValue(),
      header: () => <>Exchg.(Purchese)</>,
    },
    {
      accessorFn: (row) => row.entryDate,
      id: "purchesedate",
      cell: (info) => info.getValue(),
      header: () => <>Date.(Purchese)</>,
    },
    {
      accessorFn: (row) => row.exchangeRateRsSell,
      id: "sellexchg",
      cell: (info) => info.getValue(),
      header: () => <>Exchg(Sell)</>,
    },
    {
      accessorFn: (row) => row.entryDateSell,
      id: "selldate",
      cell: (info) => info.getValue(),
      header: () => <>Sell Date</>,
    },
  ];

  const { data: currencyData, isLoading } = getCurrency();
  const { mutateAsync: deleteCurrency } = deleteCurrencyMutation();

  const deleteCurrencyClick = async (currencyData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteCurrency(currencyData.currencyId);
    }
  };

  const editCurrencyClick = (currencyData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", currencyData.currencyId));
  };

  const tableConfig: TableType<CurrencyType> = {
    config: {
      tableName: "Currency",
      columns: columns,
      tableData: currencyData || [],
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
      onDeleteClick: deleteCurrencyClick,
      onEditClick: editCurrencyClick,
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
