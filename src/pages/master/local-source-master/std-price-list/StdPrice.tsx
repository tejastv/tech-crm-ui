import React, { useState } from "react";
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
  AddUpdateStdPriceType,
  addStdPriceFormFields,
  useStdPriceApiCallHook,
  StdPriceType,
  useCurrencyApiCallHook,
} from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@constants/query-keys";

export const StdPrice: React.FC = () => {
  const queryClient = useQueryClient(); // Get the queryClient instance
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Standard Price (Local Source)",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    borderLayoutConfig: {
      heading: "Table",
    },
  };

  const methods = useForm<AddUpdateStdPriceType>();
  const [currency, setCurrency] = useState("0");
  const { getCurrency } = useCurrencyApiCallHook();
  const { data: currencyData } = getCurrency();
  const { getStdPriceData, updateStandardPriceMutation } =
    useStdPriceApiCallHook();
  const { mutateAsync: updateStandardPrice } = updateStandardPriceMutation();

  if (currencyData) {
    addStdPriceFormFields.stdcurrencey.config.options = selectOptionsMaker(
      currencyData,
      "currencyId",
      "currencyInWord"
    );
  }

  // const columns: ColumnDef<StdPriceType>[] = [
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

  const [tableData, setTableData] = useState({} as any);

  const columns: ColumnDef<StdPriceType>[] = [
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
      updateStandardPrice(cellData).then(() => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.LOCALSOURCE_STANDARD_PRCE, currency],
        });
        setTableData({});
      });
    }
  };

  const { data: stdPriceData, isFetching } = getStdPriceData(currency);

  const tableConfig: TableType<StdPriceType> = {
    config: {
      tableName: "Standard Price (Local Source)",
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
        pageSize: 100,
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
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <div className="row">
                <div className="col-4 pull-right">
                  <Select
                    config={addStdPriceFormFields.stdcurrencey.config}
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
