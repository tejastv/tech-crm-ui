import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  Select,
  Button,
  Input,
  Table,
  TableType,
  Loader,
} from "@shared/index";
import {
  ClientType,
  ClientWisePriceType,
  addPriceClientFormFields,
  useCityApiCallHook,
  useClientApiCallHook,
  // useClientGroupApiCallHook,
  usePriceListForClientsApiCallHook,
  // usePriceListGroupApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { ColumnDef } from "@tanstack/react-table";

export const PriceListForClients: React.FC = () => {
  const getPriceFromOtherGroupForm = useForm();
  // const otherFormGroupForm = useForm();
  // const getPriceForm = useForm();

  const { getCity } = useCityApiCallHook();
  const { getClientsByCityId } = useClientApiCallHook();
  // const { getClientGroup } = useClientGroupApiCallHook();
  // const { getGroupWiseCurrencyData } = usePriceListGroupApiCallHook();
  const {
    // getCurrencyAndGroupByClientID,
    getClientWisePrice,
    getStdPriceClientsData,
    getCurrencyWiseStandardPrice,
  } = usePriceListForClientsApiCallHook();
  const { data: cityData } = getCity();
  const [city, setCity] = useState<number>(-2);
  // const [group, setGroup] = useState<number>(-2);
  const [client, setClient] = useState<ClientType>({} as ClientType);
  let [tableCellData, setTableCellData] = useState({} as any);
  // const [client2, setClient2] = useState<number>(-2);
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Client)",
      heading: "Filter",
    },
    formButtonsConfig: {
      heading: "Buttons",
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

  if (cityData) {
    let cityArray = selectOptionsMaker(cityData, "cityId", "cityName");
    cityArray.unshift({
      label: "All",
      value: -1,
    });
    addPriceClientFormFields.pricecity.config.options = cityArray;
  }

  const { data: cityWiseClientsData } = getClientsByCityId(
    { cityId: city },
    city != -2
  );

  if (cityWiseClientsData) {
    let groupArray = selectOptionsMaker(
      cityWiseClientsData.records,
      "clientID",
      "clientName",
      true
    );
    addPriceClientFormFields.priceClient.config.options = groupArray;
    // addPriceClientFormFields.priceClient2.config.options = groupArray;
  }

  const cityChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setCity(selectedOption.value);
    }
  };

  const { data: clientWisePrice, isFetching: clientWisePriceFacting } =
    getClientWisePrice("" + client.clientID, !!client.clientID);

  const clientChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setClient(selectedOption.data);
      // setIsStdPriceBtnClicked(false);
    }
  };

  if (client) {
    addPriceClientFormFields.priceClientCurrency.config.setData =
      client.currencyName;
    addPriceClientFormFields.priceGroup.config.setData = client.groupName;
  }

  const {
    data: currencyWisePrice,
    isFetching: currencyWisePriceDataFatching,
    refetch: refatchStandardPrice,
  } = getCurrencyWiseStandardPrice("" + client.currencyID);

  const onGetPriceFromOtherGroupFormSubmit =
    getPriceFromOtherGroupForm.handleSubmit((data, e): void => {
      console.log("value", data, e);
      if (e?.target.name == "stdPrice") {
        refatchStandardPrice();
      } else if (e?.target.name == "fromGroup") {
      }
    });

  const columns: ColumnDef<ClientWisePriceType>[] = [
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
    if (tableCellData == undefined) return;
    let cellMap = tableCellData[row.id];
    if (!cellMap) {
      tableCellData[row.id] = {
        price: row.original.price,
        priceHighDel: row.original.priceHighDel,
        priceOnline: row.original.priceOnline,
        priceSuperFlash: row.original.priceSuperFlash,
        priceSME: row.original.priceSME,
        countryId: row.original.countryId,
      };
      tableCellData[row.id][id] = Number(value);
    } else {
      cellMap[id] = Number(value);
    }
    setTableCellData(tableCellData);
    // table.options.meta?.updateData(index, id, value);
  };

  const tableConfig: TableType<any> = {
    config: {
      tableName: "",
      columns: columns,
      tableData: [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: false,
      pagination: {
        showItemCountDropdown: false,
        pageSize: -1,
        nextPreviousBtnShow: false,
        tableMetaDataShow: false,
      },
    },
  };

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <div className="p-t-20">
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <FormProvider {...getPriceFromOtherGroupForm}>
              <form noValidate autoComplete="off">
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.pricecity.config}
                      onChangeHandler={cityChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceClient.config}
                      onChangeHandler={clientChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Input
                      config={
                        addPriceClientFormFields.priceClientCurrency.config
                      }
                    />
                    {/* <div className="row justify-content-end">
                      <div className="col-md-12 col-xs-12 text-right">
                        <Button
                          type={"submit"}
                          className={"btn btn-danger btn-sm mb-2"}
                        >
                          <i className="far fa-save"></i>Get Std. Price
                        </Button>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-md-3  col-xs-12">
                    <Input
                      config={addPriceClientFormFields.priceGroup.config}
                    />

                    {/* <div className="row justify-content-end">
                      <div className="col-md-12 col-xs-12 text-right">
                        <Button
                          type={"submit"}
                          className={"btn btn-danger btn-sm mb-2"}
                        >
                          <i className="far fa-save"></i>Get Price(From Group)
                        </Button>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-2">
                    <Button
                      type="submit"
                      className={"btn btn-danger btn-sm w-100"}
                      name="stdPrice"
                      onClick={onGetPriceFromOtherGroupFormSubmit}
                    >
                      <i className="far fa-save"></i> Get Std. Price
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                      type="submit"
                      name="fromGroup"
                      onClick={onGetPriceFromOtherGroupFormSubmit}
                      className={"btn btn-danger btn-sm w-100"}
                    >
                      <i className="far fa-save"></i> Get Price (From Group)
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                      type={"submit"}
                      className={"btn btn-danger btn-sm w-100"}
                    >
                      <i className="far fa-save"></i> Save All
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </BorderLayout>
        </div>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {!clientWisePriceFacting ? (
            <Table
              config={{
                ...tableConfig.config,
                tableData: clientWisePrice || [],
              }}
            />
          ) : (
            <Loader />
          )}
          {!currencyWisePriceDataFatching ? (
            <Table
              config={{
                ...tableConfig.config,
                tableData: currencyWisePrice || [],
              }}
            />
          ) : (
            <Loader />
          )}
        </BorderLayout>
      </Card>
    </>
  );
};

// const { data: groupWiseCurrencyData } = getGroupWiseCurrencyData(
//   group,
//   group != -2
// );
// if (groupWiseCurrencyData) {
//   let currencyData = selectOptionsMaker(
//     [groupWiseCurrencyData],
//     "currencyId",
//     "currecnyName"
//   );
//   addPriceClientFormFields.priceCurrencyClient.config.options = currencyData;
// }

// const groupChangeHandler = (selectedOption: any) => {
//   if (selectedOption) {
//     setGroup(selectedOption.value);
//     // setIsStdPriceBtnClicked(false);
//   }
// };

// const { data: clientWiseCurrencyAndGroup } = getCurrencyAndGroupByClientID(
//   client,
//   client != -2
// );

// if (clientWiseCurrencyAndGroup) {
//   let currency = [
//     {
//       value: clientWiseCurrencyAndGroup.currencyId,
//       label: clientWiseCurrencyAndGroup.currencyName,
//     },
//   ];
//   let group = [
//     {
//       value: clientWiseCurrencyAndGroup.groupId,
//       label: clientWiseCurrencyAndGroup.groupName,
//     },
//   ];
//   addPriceClientFormFields.priceClientCurrency.config.options = currency;
//   addPriceClientFormFields.priceGroup.config.options = group;
// }

// const { data: clientGroupData } = getClientGroup();
// if (clientGroupData) {
//   addPriceClientFormFields.priceGroup2.config.options = selectOptionsMaker(
//     clientGroupData,
//     "groupId",
//     "groupName"
//   );
// }

// const onOtherFormGroupFormSubmit = otherFormGroupForm.handleSubmit(
//   (data): void => {
//     console.log("value", data);
//   }
// );

// const onGetPriceFormSubmit = getPriceForm.handleSubmit((data): void => {
//   console.log("value", data);
// });

// const { data: clientWiseCurrency } = getCurrencyAndGroupByClientID(
//   client2,
//   client2 != -2
// );

// if (clientWiseCurrency) {
//   let currency = [
//     {
//       value: clientWiseCurrency.currencyId,
//       label: clientWiseCurrency.currencyName,
//     },
//   ];

//   addPriceClientFormFields.priceCurrencyGroup.config.options = currency;
// }

// const client2ChangeHandler = (selectedOption: any) => {
//   if (selectedOption) {
//     setClient2(selectedOption.value);
//     // setIsStdPriceBtnClicked(false);
//   }
// };
{
  /* <FormProvider {...otherFormGroupForm}>
              <form
                noValidate
                onSubmit={onOtherFormGroupFormSubmit}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceGroup2.config}
                      onChangeHandler={groupChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={
                        addPriceClientFormFields.priceCurrencyClient.config
                      }
                    />
                  </div>

                  <div className="col-md-2 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i> Get Price(From Other
                      Group)
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider> */
}
{
  /* <FormProvider {...getPriceForm}>
              <form
                noValidate
                onSubmit={onGetPriceFormSubmit}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceClient2.config}
                      onChangeHandler={client2ChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={
                        addPriceClientFormFields.priceCurrencyGroup.config
                      }
                    />
                  </div>
                  <div className="col-md-1 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i> Get Price
                    </Button>
                  </div>
                </div>
                <div className="row m-6 justify-content-center">
                  <div className="col-mt-6 col-xs-12 text-center">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i> Save All
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider> */
}
{
  /* <BorderLayout
            heading={cardConfig.formButtonsConfig.heading}
          ></BorderLayout> */
}
{
  /* <div className="col-md-2">
                <Button
                  type={"submit"}
                  className={"btn btn-danger btn-sm w-100"}
                >
                  <i className="far fa-save"></i> Get Price (Other Group)
                </Button>
              </div>
              <div className="col-md-2">
                <Button
                  type={"submit"}
                  className={"btn btn-danger btn-sm w-100"}
                >
                  <i className="far fa-save"></i> Get Price
                </Button>
              </div> */
}
