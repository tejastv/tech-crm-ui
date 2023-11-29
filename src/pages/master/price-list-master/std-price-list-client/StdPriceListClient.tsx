import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Button,
  Card,
  Loader,
  Select,
  Table,
  // TableCell,
  TableType,
} from "@shared/index";
import {
  AddStdPriceClientsType,
  CurrencyWisePrice,
  addStdPriceClientsFormFields,
  useCurrencyApiCallHook,
  useStdPriceClientsApiCallHook,
} from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { queryKeys } from "@constants/query-keys";
import { useQueryClient } from "@tanstack/react-query";

export const StdPriceListClient: React.FC = () => {
  const queryClient = useQueryClient(); // Get the queryClient instance
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

  let [tableData, setTableData] = useState({} as any);

  const columns: ColumnDef<CurrencyWisePrice>[] = [
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
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          cellMapDataHandler(row, id, value);
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
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          cellMapDataHandler(row, id, value);
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
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          cellMapDataHandler(row, id, value);
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
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          cellMapDataHandler(row, id, value);
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
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          cellMapDataHandler(row, id, value);
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
  ];

  const cellMapDataHandler = (row: any, id: any, value: any) => {
    if (tableData == undefined) return;
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

  const onDataEditClick = () => {
    let cellData: any = Object.values(tableData);
    if (cellData.length > 0) {
      cellData[0]["currency_id"] = +currency;
      updateStandardPrice(cellData).then(async () => {
        tableData = {};
        setTableData(tableData);
        console.log(tableData);
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.PRICE_LIST_STANDARD_PRICE, currency],
        });
      });
    }
  };

  const { data: stdPriceData, isFetching } = getStdPriceClientsData(currency);

  const tableConfig: TableType<CurrencyWisePrice> = {
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
              {currency !== "0" && (
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
              )}
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {!isFetching ? <Table config={tableConfig.config} /> : <Loader />}
        </BorderLayout>
      </Card>
    </>
  );
};
