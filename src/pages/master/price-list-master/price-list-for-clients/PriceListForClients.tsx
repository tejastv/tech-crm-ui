import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  Button,
  Table,
  TableType,
  Loader,
  NewSelect,
  NewInput,
} from "@shared/index";
import {
  CityType,
  ClientType,
  ClientWisePriceType,
  priceClientFormFields,
  useCityApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { ColumnDef } from "@tanstack/react-table";
import { useAxios } from "@hooks/useAxios";
import { apiUrls } from "@constants/api-urls";

export const PriceListForClients: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const { instance } = useAxios();
  const { getCity } = useCityApiCallHook();

  const { data: cityData } = getCity();
  // const [city, setCity] = useState<number>(-2);
  // const [group, setGroup] = useState<number>(-2);
  const [client, setClient] = useState<ClientType>({} as ClientType);
  let [tableCellData, setTableCellData] = useState({} as any);
  let [tableData, setTableData] = useState<Array<any>>([] as any);
  let [cityWiseClient, setCityWiseClient] = useState<Array<any>>([] as any);
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let [tableHeading, setTableHeading] = useState<string>("");
  let [apiUrl, setApiUrl] = useState<string>("");

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

  const [cityOptions, setCityOptions] = useState<CityType[]>();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName");
    options.unshift({
      label: "All",
      value: -1,
    });
    priceClientFormFields.pricecity.config.options = options;
  }

  const cityChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      // setCity(selectedOption.value);
      getCityWiseClient(selectedOption);
    }
  };

  const getCityWiseClient = async (clientObj: any) => {
    let queryParam = new URLSearchParams({
      cityId: clientObj.value,
    }).toString();
    let URL = `${apiUrls.GET_CLIENT_BY_CITY_ID}?${queryParam}`;
    const response = await instance.get(URL);
    const data = response.data.data;
    if (data) {
      let groupArray = selectOptionsMaker(
        data.records,
        "clientId",
        "clientName",
        true
      );
      setCityWiseClient(groupArray);
    }
  };

  if (cityWiseClient) {
    priceClientFormFields.priceClient.config.options = cityWiseClient;
  }

  const getClientWisePrice = async (clientObj: ClientType) => {
    const response = await instance.get(
      apiUrls.CLIENT_WISE_PRICE.replace("{id}", "" + clientObj.clientId)
    );
    const data = response.data.data;
    if (data) {
      setTableData(data);
      setIsLoading(false);
      setTableHeading("Client wise Price");
    }
  };

  const getCurrencyWisePrice = async (clientObj: ClientType) => {
    const response = await instance.get(
      apiUrls.GET_UPDATE_DELETE_STDPRICE_CLIENTS.replace(
        "{id}",
        "" + clientObj.currencyId
      )
    );
    const data = response.data.data;
    if (data) {
      setTableData(data);
      setIsLoading(false);
      setTableHeading("Standard Price");
    }
  };

  const getGroupWisePrice = async (clientObj: ClientType) => {
    const response = await instance.get(
      apiUrls.GET_GROUP_WISE_PRICE.replace("{id}", "" + clientObj.groupId)
    );
    const data = response.data.data;
    if (data) {
      setTableData(data);
      setIsLoading(false);
      setTableHeading("Group wise Price");
    }
  };

  const clientChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setTableData([]);
      setIsLoading(true);
      setClient(selectedOption.data);
      getClientWisePrice(selectedOption.data);
      setApiUrl(
        apiUrls.CLIENT_WISE_PRICE.replace(
          "{id}",
          "" + selectedOption.data.clientId
        )
      );
    }
  };

  useEffect(() => {
    if (
      priceClientFormFields.priceClientCurrency.config.name ==
      "Priceclientcurrencey"
    ) {
      setValue(
        priceClientFormFields.priceClientCurrency.config.name,
        client.currencyName
      );
    }
    if (priceClientFormFields.priceGroup.config.name == "priceGroup") {
      setValue(priceClientFormFields.priceGroup.config.name, client.groupName);
    }
  }, [client]);

  const onGetPriceFromOtherGroupFormSubmit = handleSubmit((data, e): void => {
    let url = "";
    setTableData([]);
    setIsLoading(true);
    if (e?.target.name == "stdPrice") {
      let confirmation = confirm(
        "Do you want fatch price from Standard Price?"
      );
      if (confirmation) {
        url = apiUrls.CLIENT_WISE_PRICE.replace(
          "{id}",
          "" + data.Priceclient.value
        );
        getCurrencyWisePrice(client);
      }
    } else if (e?.target.name == "fromGroup") {
      let confirmation = confirm("Do you want fatch price from Group?");
      if (confirmation) {
        url = apiUrls.GET_GROUP_WISE_PRICE.replace(
          "{id}",
          "" + data.Priceclient.value
        );
        getGroupWisePrice(client);
      }
    }
    setApiUrl(url);
  });

  const onSaveBtnClickHandler = async () => {
    let cellData = Object.values(tableCellData);
    let clonedTableData: any = [];
    if (cellData.length > 0) {
      clonedTableData = [...tableData];
      clonedTableData.forEach((data: any) => {
        cellData.forEach((cell: any) => {
          if (data.countryId === cell.countryId) {
            data.price = cell.price;
            data.priceHighDel = cell.priceHighDel;
            data.priceOnline = cell.priceOnline;
            data.priceSME = cell.priceSME;
            data.priceSuperFlash = cell.priceSuperFlash;
          }
        });
      });
    }
    if (clonedTableData.length > 0) {
      setIsLoading(true);
      setTableData([]);
      const response = await instance.post(apiUrl, clonedTableData);
      const data = response.data.data;
      if (data) {
        getClientWisePrice(client);
      }
    }
  };

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
          setValue(initialValue || 0);
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
          setValue(initialValue || 0);
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
          setValue(initialValue || 0);
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
          setValue(initialValue || 0);
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
          setValue(initialValue || 0);
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
      tableData: tableData,
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
    <Card config={cardConfig.formLayoutConfig}>
      <div className="p-t-20">
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <form noValidate autoComplete="off">
            <div className="row">
              <div className="col-md-3 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={priceClientFormFields.pricecity}
                  onChange={cityChangeHandler}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={priceClientFormFields.priceClient}
                  onChange={clientChangeHandler}
                />
              </div>
              <div className="col-md-2 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={priceClientFormFields.priceClientCurrency}
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
                <NewInput
                  errors={errors}
                  register={register}
                  config={priceClientFormFields.priceGroup}
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
            <div className="row">
              <div className="col-md-7" />
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
            </div>
            <div className="row justify-content-space-between mt-3">
              <div className="offset-7 col-md-4">
                <div className="text-center">
                  <Button
                    type="button"
                    name="saveAll"
                    onClick={onSaveBtnClickHandler}
                    className={"btn btn-danger btn-sm"}
                  >
                    <i className="far fa-save"></i> Save All
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </BorderLayout>
      </div>
      <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
        {tableHeading && (
          <label className="custom-label" htmlFor="tableHeading">
            {tableHeading}
          </label>
        )}
        {tableData.length > 0 ? (
          <Table config={tableConfig.config} />
        ) : (
          isLoading && <Loader />
        )}
      </BorderLayout>
    </Card>
  );
};
