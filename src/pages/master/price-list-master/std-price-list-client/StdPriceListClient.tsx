import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Button,
  Card,
  EditCell,
  Loader,
  Select,
  Table,
  TableCell,
  TableType,
} from "@shared/index";
import {
  AddStdPriceClientsType,
  StdPriceClientsType,
  addStdPriceClientsFormFields,
  useCurrencyApiCallHook,
  useStdPriceClientsApiCallHook,
} from "@master/index";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const StdPriceListClient: React.FC = () => {
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Standard Price",
      heading: "Action Buttons",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Table",
    },
  };

  const methods = useForm<AddStdPriceClientsType>();
  const [currency, setCurrency] = useState("0");
  const { getCurrency } = useCurrencyApiCallHook();
  const { data: currencyData } = getCurrency();
  const { getStdPriceClientsData, updateStandardPriceMutation } =
    useStdPriceClientsApiCallHook();
  const { mutateAsync: updateStandardPrice } = updateStandardPriceMutation();

  if (currencyData) {
    addStdPriceClientsFormFields.stdPriceClientCurrency.config.options =
      selectOptionsMaker(currencyData, "currencyId", "currencyInWord");
  }

  // const columns: ColumnDef<StdPriceClientsType>[] = [
  //   {
  //     id: "srNo",
  //     cell: (info) => info.getValue(),
  //     header: () => <>Sr no</>,
  //   },
  //   {
  //     accessorFn: (row) => row.countryID,
  //     id: "countryId",
  //     cell: (info) => info.getValue(),
  //     header: () => <>Country Id</>,
  //   },
  //   {
  //     accessorFn: (row) => row.countryName,
  //     id: "country",
  //     cell: (info) => info.getValue(),
  //     header: () => <>Country Name</>,
  //   },
  //   {
  //     accessorFn: (row) => row.price,
  //     id: "price",
  //     cell: (info) => info.getValue(),
  //     header: () => <>Normal Price</>,
  //   },
  //   {
  //     accessorFn: (row) => row.priceHighDel,
  //     id: "priceHighDel",
  //     cell: (info) => info.getValue(),
  //     header: () => <>High Del Price</>,
  //   },
  //   {
  //     accessorFn: (row) => row.priceOnline,
  //     id: "on-line",
  //     cell: (info) => info.getValue(),
  //     header: () => <>On-Line</>,
  //   },
  //   {
  //     accessorFn: (row) => row.priceSuperflash,
  //     id: "superflash",
  //     cell: (info) => info.getValue(),
  //     header: () => <>Superflash</>,
  //   },
  // ];

  const columnHelper = createColumnHelper<StdPriceClientsType>();

  const columns = [
    columnHelper.accessor("srNo", {
      header: "Sr no",
      id: "srNo",
    }),
    columnHelper.accessor("countryId", {
      header: "Country ID",
      id: "countryID",
    }),
    columnHelper.accessor("countryName", {
      header: "Country",
      id: "countryName",
    }),
    columnHelper.accessor("otherCharges", {
      header: "Normal Price",
      id: "price",
      cell: TableCell,
      meta: {
        type: "number",
      },
    }),
    columnHelper.accessor("priceHighDel", {
      header: "High Del Price",
      id: "priceHighDel",
      cell: TableCell,
      meta: {
        type: "number",
      },
    }),
    columnHelper.accessor("priceOnline", {
      header: "On-Line",
      id: "priceOnline",
      cell: TableCell,
      meta: {
        type: "number",
      },
    }),
    columnHelper.accessor("priceSuperflash", {
      header: "Superflash",
      id: "priceSuperflash",
      cell: TableCell,
      meta: {
        type: "number",
      },
    }),
    columnHelper.display({
      id: "edit",
      cell: EditCell,
    }),
  ];

  const { data: stdPriceData, isLoading } = getStdPriceClientsData(currency);

  const onDataEditClick = async (data: any, others: any) => {
    let cellData: any = Object.values(data.dataObj);
    if (cellData.length > 0) {
      cellData[0]["currency_id"] = currency;
      console.log(cellData);
      await updateStandardPrice(cellData).then((onSuccessData: any) => {
        console.log(onSuccessData);
        if (others) {
          others.options.meta?.setEditedRows((old: []) => ({
            ...old,
            [onSuccessData.rowId]: !old[onSuccessData.rowId],
          }));
          others.options.meta.updateDataSuccess(
            onSuccessData.rowId,
            onSuccessData.columnId,
            onSuccessData.value
          );
        }
      });
    }
  };

  const tableConfig: TableType<StdPriceClientsType> = {
    config: {
      tableName: "Standard Price",
      columns: columns,
      tableData: stdPriceData || [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      onEditClick: onDataEditClick,
      pagination: {
        showItemCountDropdown: false,
        pageSize: -1,
        nextPreviousBtnShow: false,
        tableMetaDataShow: false,
      },
    },
  };

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      setCurrency("" + selectedOption.value);
    }
  };

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off" className="p-t-20">
            <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
              <div className="row">
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={
                      addStdPriceClientsFormFields.stdPriceClientCurrency.config
                    }
                    onChangeHandler={handleSelectChange}
                  />
                </div>
              </div>
              <div className="row m-6 justify-content-end">
                <div className="col-mt- col-xs-12 text-end">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i> Save
                  </Button>
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {!isLoading ? <Table config={tableConfig.config} /> : <Loader />}
        </BorderLayout>
      </Card>
    </>
  );
};
