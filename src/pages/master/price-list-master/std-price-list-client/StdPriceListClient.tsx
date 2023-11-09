import React, { useState, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Button,
  Card,
  Loader,
  Select,
  Table,
  TableType,
} from "@shared/index";
import {
  AddStdPriceClientsType,
  StdPriceClientsType,
  addStdPriceClientsFormFields,
  useCurrencyApiCallHook,
  useStdPriceClientsApiCallHook,
} from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { queryKeys } from "@constants/query-keys";
import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

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

  const [tableData, setTableData] = useState({} as any);

  const columns = useMemo<ColumnDef<StdPriceClientsType>[]>(
    () => [
      {
        id: "srNo",
        cell: (info) => info.getValue(),
        header: () => <>Sr no</>,
      },
      {
        accessorFn: (row) => row.countryId,
        id: "countryId",
        cell: (info) => info.getValue(),
        header: () => <>Country Id</>,
      },
      {
        accessorFn: (row) => row.countryName,
        id: "country",
        cell: (info) => info.getValue(),
        header: () => <>Country Name</>,
      },
      {
        accessorFn: (row) => row.price,
        id: "price",
        cell: ({ getValue, row, column: { id }, table }) => {
          const initialValue = getValue();
          // We need to keep and update the state of the cell normally
          const [value, setValue] = React.useState(initialValue);

          // When the input is blurred, we'll call our table meta's updateData function
          const onBlur = () => {
            let cellMap = tableData[row.id];
            if (!cellMap) {
              tableData[row.id] = {
                price: row.original.price,
                priceHighDel: row.original.priceHighDel,
                priceOnline: row.original.priceOnline,
                priceSuperFlash: row.original.priceSuperFlash,
                priceSME: row.original.priceSME,
                countryId: row.original.countryId,
              };
              tableData[row.id][id] = Number(value);
            } else {
              cellMap[id] = Number(value);
            }
            setTableData(tableData);
            // table.options.meta?.updateData(index, id, value);
          };

          // If the initialValue is changed external, sync it up with our state
          React.useEffect(() => {
            setValue(initialValue);
          }, [initialValue]);

          return (
            <input
              value={value as number}
              type="number"
              onChange={(e) => setValue(+e.target.value)}
              onBlur={onBlur}
              className="editable-cell-style"
            />
          );
        },
        header: () => <>Normal Price</>,
      },
      {
        accessorFn: (row) => row.priceHighDel,
        id: "priceHighDel",
        cell: ({ getValue, row, column: { id }, table }) => {
          const initialValue = getValue();
          // We need to keep and update the state of the cell normally
          const [value, setValue] = React.useState(initialValue);

          // When the input is blurred, we'll call our table meta's updateData function
          const onBlur = () => {
            let cellMap = tableData[row.id];
            if (!cellMap) {
              tableData[row.id] = {
                price: row.original.price,
                priceHighDel: row.original.priceHighDel,
                priceOnline: row.original.priceOnline,
                priceSuperFlash: row.original.priceSuperFlash,
                priceSME: row.original.priceSME,
                countryId: row.original.countryId,
              };
              tableData[row.id][id] = Number(value);
            } else {
              cellMap[id] = Number(value);
            }
            setTableData(tableData);
            // table.options.meta?.updateData(index, id, value);
          };

          // If the initialValue is changed external, sync it up with our state
          React.useEffect(() => {
            setValue(initialValue || "");
          }, [initialValue]);

          return (
            <input
              value={value as number}
              type="number"
              onChange={(e) => setValue(e.target.value)}
              onBlur={onBlur}
              className="editable-cell-style"
            />
          );
        },
        header: () => <>High Del Price</>,
      },
      {
        accessorFn: (row) => row.priceOnline,
        id: "priceOnline",
        cell: ({ getValue, row, column: { id }, table }) => {
          const initialValue = getValue();
          // We need to keep and update the state of the cell normally
          const [value, setValue] = React.useState(initialValue);

          // When the input is blurred, we'll call our table meta's updateData function
          const onBlur = () => {
            let cellMap = tableData[row.id];
            if (!cellMap) {
              tableData[row.id] = {
                price: row.original.price,
                priceHighDel: row.original.priceHighDel,
                priceOnline: row.original.priceOnline,
                priceSuperFlash: row.original.priceSuperFlash,
                priceSME: row.original.priceSME,
                countryId: row.original.countryId,
              };
              tableData[row.id][id] = Number(value);
            } else {
              cellMap[id] = Number(value);
            }
            setTableData(tableData);
            // table.options.meta?.updateData(index, id, value);
          };

          // If the initialValue is changed external, sync it up with our state
          React.useEffect(() => {
            setValue(initialValue || "");
          }, [initialValue]);

          return (
            <input
              value={value as number}
              type="number"
              onChange={(e) => setValue(e.target.value)}
              onBlur={onBlur}
              className="editable-cell-style"
            />
          );
        },
        header: () => <>On-Line</>,
      },
      {
        accessorFn: (row) => row.priceSuperFlash,
        id: "priceSuperFlash",
        cell: ({ getValue, row, column: { id }, table }) => {
          const initialValue = getValue();
          // We need to keep and update the state of the cell normally
          const [value, setValue] = React.useState(initialValue);

          // When the input is blurred, we'll call our table meta's updateData function
          const onBlur = () => {
            let cellMap = tableData[row.id];
            if (!cellMap) {
              tableData[row.id] = {
                price: row.original.price,
                priceHighDel: row.original.priceHighDel,
                priceOnline: row.original.priceOnline,
                priceSuperFlash: row.original.priceSuperFlash,
                priceSME: row.original.priceSME,
                countryId: row.original.countryId,
              };
              tableData[row.id][id] = Number(value);
            } else {
              cellMap[id] = Number(value);
            }
            setTableData(tableData);
            // table.options.meta?.updateData(index, id, value);
          };

          // If the initialValue is changed external, sync it up with our state
          React.useEffect(() => {
            setValue(initialValue || "");
          }, [initialValue]);

          return (
            <input
              value={value as number}
              type="number"
              onChange={(e) => setValue(e.target.value)}
              onBlur={onBlur}
              className="editable-cell-style"
            />
          );
        },
        header: () => <>Superflash</>,
      },
      {
        accessorFn: (row) => row.priceSME,
        id: "priceSME",
        cell: ({ getValue, row, column: { id }, table }) => {
          const initialValue = getValue();
          // We need to keep and update the state of the cell normally
          const [value, setValue] = React.useState(initialValue);

          // When the input is blurred, we'll call our table meta's updateData function
          const onBlur = () => {
            let cellMap = tableData[row.id];
            if (!cellMap) {
              tableData[row.id] = {
                price: row.original.price,
                priceHighDel: row.original.priceHighDel,
                priceOnline: row.original.priceOnline,
                priceSuperFlash: row.original.priceSuperFlash,
                priceSME: row.original.priceSME,
                countryId: row.original.countryId,
              };
              tableData[row.id][id] = Number(value);
            } else {
              cellMap[id] = Number(value);
            }
            setTableData(tableData);
            // table.options.meta?.updateData(index, id, value);
          };

          // If the initialValue is changed external, sync it up with our state
          React.useEffect(() => {
            setValue(initialValue || "");
          }, [initialValue]);

          return (
            <input
              value={value as number}
              type="number"
              onChange={(e) => setValue(e.target.value)}
              onBlur={onBlur}
              className="editable-cell-style"
            />
          );
        },
        header: () => <>Price SME</>,
      },
    ],
    []
  );

  // const columnHelper = createColumnHelper<StdPriceClientsType>();

  // const columns = [
  //   columnHelper.accessor("srNo", {
  //     header: "Sr no",
  //     id: "srNo",
  //   }),
  //   columnHelper.accessor("countryId", {
  //     header: "Country ID",
  //     id: "countryID",
  //   }),
  //   columnHelper.accessor("countryName", {
  //     header: "Country",
  //     id: "countryName",
  //   }),
  //   columnHelper.accessor("otherCharges", {
  //     header: "Normal Price",
  //     id: "price",
  //     cell: TableCell,
  //     meta: {
  //       type: "number",
  //     },
  //   }),
  //   columnHelper.accessor("priceHighDel", {
  //     header: "High Del Price",
  //     id: "priceHighDel",
  //     cell: TableCell,
  //     meta: {
  //       type: "number",
  //     },
  //   }),
  //   columnHelper.accessor("priceOnline", {
  //     header: "On-Line",
  //     id: "priceOnline",
  //     cell: TableCell,
  //     meta: {
  //       type: "number",
  //     },
  //   }),
  //   columnHelper.accessor("priceSuperFlash", {
  //     header: "Superflash",
  //     id: "priceSuperFlash",
  //     cell: TableCell,
  //     meta: {
  //       type: "number",
  //     },
  //   }),
  //   columnHelper.display({
  //     id: "edit",
  //     cell: EditCell,
  //   }),
  // ];

  const {
    data: stdPriceData,
    isLoading,
    isSuccess,
  } = getStdPriceClientsData(currency);

  if (isSuccess) {
    // setTableData({});
  }

  const onDataEditClick = () => {
    let cellData: any = Object.values(tableData);
    if (cellData.length > 0) {
      cellData[0]["currency_id"] = +currency;
      updateStandardPrice(cellData).then((onSuccessData: any) => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.STDPRICE_DATA, currency],
        });
        setCurrency(currency);
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
                  <Button
                    type="button"
                    onClick={onDataEditClick}
                    className={"btn btn-danger btn-sm"}
                  >
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
