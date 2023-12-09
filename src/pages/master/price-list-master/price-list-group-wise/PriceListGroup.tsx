import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  NewSelect,
  Button,
  Table,
  TableType,
  Loader,
  NewInput,
} from "@shared/index";
import {
  CityType,
  ClientType,
  ClientWisePriceType,
  priceGroupFormFields,
  useCityApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { ColumnDef } from "@tanstack/react-table";
import { useAxios } from "@hooks/useAxios";
import { apiUrls } from "@constants/api-urls";

export const PriceListGroup: React.FC = () => {
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
  let [tableCellData, setTableCellData] = useState({} as any);
  let [tableData, setTableData] = useState<Array<any>>([] as any);
  let [cityWiseGroup, setCityWiseGroup] = useState<Array<any>>([] as any);
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let [tableHeading, setTableHeading] = useState<string>("");
  const [group, setGroup] = useState<ClientType>({} as ClientType);

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Group)",
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
    priceGroupFormFields.pricegroupcity.config.options = options;
  }

  const cityChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      // setCity(selectedOption.value);
      getCityWiseGroup(selectedOption);
    }
  };

  const getCityWiseGroup = async (clientObj: any) => {
    const response = await instance.get(
      apiUrls.GET_CITY_WISE_CLIENT_GROUP.replace("{id}", "" + clientObj.value)
    );
    const data = response.data.data;
    if (data) {
      let groupArray = selectOptionsMaker(data, "groupId", "groupName", true);
      setCityWiseGroup(groupArray);
    }
  };

  if (cityWiseGroup) {
    priceGroupFormFields.priceGroupSelect.config.options = cityWiseGroup;
  }

  const groupChangeHandler = (selectedOption: any) => {
    setTableData([]);
    setIsLoading(true);
    setGroup(selectedOption.data);
    getGroupWisePrice(selectedOption.data);
  };

  useEffect(() => {
    if (
      priceGroupFormFields.priceGroupCurrency.config.name ==
      "Pricegroupcurrencey"
    ) {
      setValue(
        priceGroupFormFields.priceGroupCurrency.config.name,
        group.currencyName
      );
    }
  }, [group]);

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

  const getCurrencyWisePrice = async (id: number) => {
    const response = await instance.get(
      apiUrls.GET_UPDATE_DELETE_STDPRICE_CLIENTS.replace("{id}", "" + id)
    );
    const data = response.data.data;
    if (data) {
      setTableData(data);
      setIsLoading(false);
      setTableHeading("Standard Price");
    }
  };

  const onGetPriceFromOtherGroupFormSubmit = handleSubmit((data, e): void => {
    setTableData([]);
    setIsLoading(true);
    if (e?.target.name == "stdPrice") {
      let confirmation = confirm(
        "Do you want fatch price from Standard Price?"
      );
      if (confirmation) {
        getCurrencyWisePrice(data.priceGroup.data.currencyId);
      }
    }
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
      const response = await instance.post(
        apiUrls.GET_GROUP_WISE_PRICE.replace("{id}", "" + group.groupId),
        clonedTableData
      );
      const data = response.data.data;
      if (data) {
        getGroupWisePrice(group);
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
            <div className="row mb-3">
              <div className="col-md col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={priceGroupFormFields.pricegroupcity}
                  onChange={cityChangeHandler}
                />
              </div>
              <div className="col-md col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={priceGroupFormFields.priceGroupSelect}
                  onChange={groupChangeHandler}
                />
              </div>
              <div className="col-md col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={priceGroupFormFields.priceGroupCurrency}
                />
              </div>
              <div className="col-md-auto col-xs-12">
                <Button
                  type="submit"
                  className={"btn btn-danger btn-sm w-100"}
                  name="stdPrice"
                  onClick={onGetPriceFromOtherGroupFormSubmit}
                >
                  <i className="far fa-save"></i> Get Std. Price
                </Button>
              </div>
            </div>
            <div className="row justify-content-end">
              {/* <div className="col-md-2">
                    <Button
                      type="submit"
                      name="fromGroup"
                      onClick={onGetPriceFromOtherGroupFormSubmit}
                      className={"btn btn-danger btn-sm w-100"}
                    >
                      <i className="far fa-save"></i> Get Price (From Group)
                    </Button>
                  </div> */}
              <div className="col-md-2">
                <Button
                  type="button"
                  name="saveAll"
                  onClick={onSaveBtnClickHandler}
                  className={"btn btn-danger btn-sm w-100"}
                >
                  <i className="far fa-save"></i> Save All
                </Button>
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
