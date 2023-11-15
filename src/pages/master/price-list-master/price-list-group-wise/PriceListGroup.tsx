import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  Select,
  Button,
  Table,
  Loader,
  TableType,
  TableCell,
  EditCell,
} from "@shared/index";
import {
  CountryType,
  addPriceGroupFormFields,
  useCityApiCallHook,
  usePriceListGroupApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import {
  // ColumnDef,
  // ColumnHelper,
  createColumnHelper,
} from "@tanstack/react-table";

export const PriceListGroup: React.FC = () => {
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Group)",
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

  const methods = useForm();
  const { getCity } = useCityApiCallHook();
  const { data: cityData } = getCity();
  const {
    getCityWiseGroupData,
    getGroupWiseCurrencyData,
    getStdPriceData,
    getPriceListData,
    updatePriceListForGroupMutation,
  } = usePriceListGroupApiCallHook();
  const { mutateAsync: updatePriceGroup } = updatePriceListForGroupMutation();
  const [city, setCity] = useState<number>(-2);
  const [group, setGroup] = useState<number>(-2);

  const [currency, setCurrency] = useState<number>(0);
  const [stdPriceReqObj, setStdPriceReqObj] = useState<{ currency: any }>();
  const [isStdPriceBtnClicked, setIsStdPriceBtnClicked] =
    useState<boolean>(false);

  const [priceListGroup, setPriceListGroup] = useState<number>(-2);
  const [priceListReqObj, setPriceListReqObj] = useState<{
    priceListGroup: any;
  }>();
  const [isPriecListBtnClicked, setIsPriecListBtnClicked] =
    useState<boolean>(false);

  if (cityData) {
    let cityArray = selectOptionsMaker(cityData, "cityId", "cityName");
    cityArray.unshift({
      label: "All",
      value: "-1",
    });
    addPriceGroupFormFields.pricegroupcity.config.options = cityArray;
  }

  const cityChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setCity(selectedOption.value);
      setIsStdPriceBtnClicked(false);
    }
  };

  const { data: cityWiseGroupData } = getCityWiseGroupData(city, city != -2);
  if (cityWiseGroupData) {
    let groupArray = selectOptionsMaker(
      cityWiseGroupData,
      "groupId",
      "groupName"
    );
    addPriceGroupFormFields.priceGroupSelect.config.options = groupArray;
    addPriceGroupFormFields.priceGroupSelect2.config.options = groupArray;
  }

  const groupChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setGroup(selectedOption.value);
      setIsStdPriceBtnClicked(false);
    }
  };

  const { data: groupWiseCurrencyData } = getGroupWiseCurrencyData(
    group,
    group != -2
  );
  if (groupWiseCurrencyData) {
    let currencyData = selectOptionsMaker(
      [groupWiseCurrencyData],
      "currencyId",
      "currecnyName"
    );
    addPriceGroupFormFields.priceGroupCurrency.config.options = currencyData;
  }

  const currencyChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setCurrency(selectedOption.value);
      setIsStdPriceBtnClicked(false);
    }
  };

  const { data: stdPriceData, isLoading: stdPriceDataLoading } =
    getStdPriceData(stdPriceReqObj?.currency || 0, isStdPriceBtnClicked);

  const getStdPrice = () => {
    if (city != -2 && group != -2 && currency != 0) {
      setStdPriceReqObj({ currency });
      setIsStdPriceBtnClicked(true);
      setIsPriecListBtnClicked(false);
    } else {
      setIsStdPriceBtnClicked(false);
    }
  };

  const priceListGroupChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setPriceListGroup(selectedOption.value);
      setIsPriecListBtnClicked(false);
    }
  };

  const { data: priceListData, isLoading: priceListDataLoading } =
    getPriceListData(priceListReqObj?.priceListGroup, isPriecListBtnClicked);

  const getPriceList = () => {
    if (priceListGroup != -2) {
      setPriceListReqObj({ priceListGroup });
      setIsPriecListBtnClicked(true);
      setIsStdPriceBtnClicked(false);
    } else {
      setIsPriecListBtnClicked(false);
    }
  };

  useEffect(() => {
    setIsStdPriceBtnClicked(true);
  }, []);

  const columnHelper = createColumnHelper<CountryType>();

  const columns = [
    columnHelper.accessor("srNo", {
      header: "Sr no",
      id: "srNo",
    }),
    columnHelper.accessor("countryID", {
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
    // {
    //   id: "srNo",
    //   cell: (info) => info.getValue(),
    //   header: () => <>Sr no</>,
    // },
    // {
    //   accessorFn: (row) => row.countryID,
    //   id: "countryId",
    //   cell: (info) => info.getValue(),
    //   header: () => <>Country ID</>,
    // },
    // {
    //   accessorFn: (row) => row.countryName,
    //   id: "countryName",
    //   cell: (info) => info.getValue(),
    //   header: () => <>Country</>,
    // },
    // {
    //   accessorFn: (row) => row.otherCharges,
    //   id: "otherCharges",
    //   cell: (info) => info.getValue(),
    //   header: () => <>Normal Price</>,
    // },
    // {
    //   accessorFn: (row) => row.priceHighDel,
    //   id: "priceHighDel",
    //   cell: (info) => info.getValue(),
    //   header: () => <>High Del Price</>,
    // },
    // {
    //   accessorFn: (row) => row.priceOnline,
    //   id: "priceOnline",
    //   cell: (info) => info.getValue(),
    //   header: () => <>On-Line</>,
    // },
    // {
    //   accessorFn: (row) => row.priceSuperflash,
    //   id: "priceSuperflash",
    //   cell: (info) => info.getValue(),
    //   header: () => <>Superflash</>,
    // },
  ];

  const onDataEditClick = async (data: any) => {
    let cellData: any = Object.values(data);
    if (cellData.length > 0) {
      cellData[0]["groupId"] = group;
      await updatePriceGroup(cellData);
    }
  };

  let tableConfig: TableType<CountryType> = {} as TableType<CountryType>;

  if (isPriecListBtnClicked) {
    tableConfig = {
      config: {
        tableName: "Price List (Group)",
        columns: columns,
        tableData: priceListData || [],
        copyBtn: true,
        csvBtn: true,
        excelBtn: true,
        pdfBtn: true,
        printBtn: true,
        globalSearchBox: true,
        pagination: {
          showItemCountDropdown: false,
          pageSize: 1000,
          nextPreviousBtnShow: false,
          tableMetaDataShow: false,
        },
      },
    };
  } else {
    tableConfig = {
      config: {
        tableName: "Price List (Group)",
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
          pageSize: 1000,
          nextPreviousBtnShow: false,
          tableMetaDataShow: false,
        },
      },
    };
  }

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off" className="p-t-20">
            <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
              <div className="row">
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.pricegroupcity.config}
                    onChangeHandler={cityChangeHandler}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupSelect.config}
                    onChangeHandler={groupChangeHandler}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupCurrency.config}
                    onChangeHandler={currencyChangeHandler}
                  />
                </div>

                <div className="col-md-3 col-xs-12 text-right">
                  <Button
                    type="button"
                    onClick={getStdPrice}
                    className={"btn btn-danger btn-sm"}
                  >
                    <i className="far fa-save"></i> Get Std. Price
                  </Button>
                </div>
                {/* <div className="pt-lg-3"></div> */}
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupSelect2.config}
                    onChangeHandler={priceListGroupChangeHandler}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  {/* <Select
                    config={addPriceGroupFormFields.priceGroupCurrency2.config}
                  /> */}
                </div>
                {/* <div className="pt-lg-1"></div> */}
                <div className="col-md-6 col-xs-12 text-right">
                  <Button
                    type="button"
                    onClick={getPriceList}
                    className={"btn btn-danger btn-sm"}
                  >
                    <i className="far fa-save"></i> Get Price
                  </Button>
                </div>

                <div className="col-md-12 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i> Save All
                  </Button>
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {/* {(stdPriceDataLoading || priceListDataLoading) && <Loader />} */}

          {!stdPriceDataLoading || !priceListDataLoading ? (
            <Table config={tableConfig.config} />
          ) : (
            <Loader />
          )}
        </BorderLayout>
      </Card>
    </>
  );
};
