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
  addPriceGroupFormFields,
  useCityApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { ColumnDef } from "@tanstack/react-table";
import { useAxios } from "@hooks/useAxios";
import { apiUrls } from "@constants/api-urls";

export const PriceListGroup: React.FC = () => {
  const getPriceFromOtherGroupForm = useForm();
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
    addPriceGroupFormFields.pricegroupcity.config.options = cityArray;
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
    addPriceGroupFormFields.priceGroupSelect.config.options = cityWiseGroup;
  }

  const groupChangeHandler = (selectedOption: any) => {
    setTableData([]);
    setIsLoading(true);
    setGroup(selectedOption.data);
    getGroupWisePrice(selectedOption.data);
  };

  if (group) {
    addPriceGroupFormFields.priceGroupCurrency.config.setData =
      group.currencyID;
  }

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

  const onGetPriceFromOtherGroupFormSubmit =
    getPriceFromOtherGroupForm.handleSubmit((data, e): void => {
      setTableData([]);
      setIsLoading(true);
      if (e?.target.name == "stdPrice") {
        let confirmation = confirm(
          "Do you want fatch price from Standard Price?"
        );
        if (confirmation) {
          getCurrencyWisePrice(data.priceGroup.data.currencyID);
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
          setValue(initialValue || "");
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
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <div className="p-t-20">
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <FormProvider {...getPriceFromOtherGroupForm}>
              <form noValidate autoComplete="off">
                <div className="row mb-3">
                  <div className="col-md-4 col-xs-12">
                    <Select
                      config={addPriceGroupFormFields.pricegroupcity.config}
                      onChangeHandler={cityChangeHandler}
                    />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <Select
                      config={addPriceGroupFormFields.priceGroupSelect.config}
                      onChangeHandler={groupChangeHandler}
                    />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <Input
                      config={addPriceGroupFormFields.priceGroupCurrency.config}
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
            </FormProvider>
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
    </>
  );
};

// import React, { useEffect, useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";

// import {
//   BorderLayout,
//   Card,
//   Select,
//   Button,
//   Table,
//   Loader,
//   TableType,
//   TableCell,
//   EditCell,
// } from "@shared/index";
// import {
//   CountryType,
//   addPriceGroupFormFields,
//   useCityApiCallHook,
//   usePriceListGroupApiCallHook,
// } from "@master/index";
// import { selectOptionsMaker } from "@utils/selectOptionsMaker";
// import {
//   // ColumnDef,
//   // ColumnHelper,
//   createColumnHelper,
// } from "@tanstack/react-table";

// export const PriceListGroup: React.FC = () => {
//   const cardConfig = {
//     formLayoutConfig: {
//       mainHeading: "Price List (Group)",
//       heading: "Action Buttons",
//     },
//     formPurchesConfig: {
//       heading: "Purchase",
//     },
//     formSellConfig: {
//       heading: "Sell",
//     },
//     borderLayoutConfig: {
//       heading: "Table",
//     },
//   };

//   const methods = useForm();
//   const { getCity } = useCityApiCallHook();
//   const { data: cityData } = getCity();
//   const {
//     getCityWiseGroupData,
//     getGroupWiseCurrencyData,
//     getStdPriceData,
//     getPriceListData,
//     updatePriceListForGroupMutation,
//   } = usePriceListGroupApiCallHook();
//   const { mutateAsync: updatePriceGroup } = updatePriceListForGroupMutation();
//   const [city, setCity] = useState<number>(-2);
//   const [group, setGroup] = useState<number>(-2);

//   const [group, setGroup] = useState<number>(0);
//   const [stdPriceReqObj, setStdPriceReqObj] = useState<{ group: any }>();
//   const [isStdPriceBtnClicked, setIsStdPriceBtnClicked] =
//     useState<boolean>(false);

//   const [priceListGroup, setPriceListGroup] = useState<number>(-2);
//   const [priceListReqObj, setPriceListReqObj] = useState<{
//     priceListGroup: any;
//   }>();
//   const [isPriecListBtnClicked, setIsPriecListBtnClicked] =
//     useState<boolean>(false);

//   if (cityData) {
//     let cityArray = selectOptionsMaker(cityData, "cityId", "cityName");
//     cityArray.unshift({
//       label: "All",
//       value: "-1",
//     });
//     addPriceGroupFormFields.pricegroupcity.config.options = cityArray;
//   }

//   const cityChangeHandler = (selectedOption: any) => {
//     if (selectedOption) {
//       setCity(selectedOption.value);
//       setIsStdPriceBtnClicked(false);
//     }
//   };

//   const { data: cityWiseGroupData } = getCityWiseGroupData(city, city != -2);
//   if (cityWiseGroupData) {
//     let groupArray = selectOptionsMaker(
//       cityWiseGroupData,
//       "groupId",
//       "groupName"
//     );
//     addPriceGroupFormFields.priceGroupSelect.config.options = groupArray;
//     addPriceGroupFormFields.priceGroupSelect2.config.options = groupArray;
//   }

//   const groupChangeHandler = (selectedOption: any) => {
//     if (selectedOption) {
//       setGroup(selectedOption.value);
//       setIsStdPriceBtnClicked(false);
//     }
//   };

//   const { data: groupWiseCurrencyData } = getGroupWiseCurrencyData(
//     group,
//     group != -2
//   );
//   if (groupWiseCurrencyData) {
//     let currencyData = selectOptionsMaker(
//       [groupWiseCurrencyData],
//       "currencyId",
//       "currecnyName"
//     );
//     addPriceGroupFormFields.priceGroupCurrency.config.options = currencyData;
//   }

//   const currencyChangeHandler = (selectedOption: any) => {
//     if (selectedOption) {
//       setGroup(selectedOption.value);
//       setIsStdPriceBtnClicked(false);
//     }
//   };

//   const { data: stdPriceData, isLoading: stdPriceDataLoading } =
//     getStdPriceData(stdPriceReqObj?.group || 0, isStdPriceBtnClicked);

//   const getStdPrice = () => {
//     if (city != -2 && group != -2 && group != 0) {
//       setStdPriceReqObj({ group });
//       setIsStdPriceBtnClicked(true);
//       setIsPriecListBtnClicked(false);
//     } else {
//       setIsStdPriceBtnClicked(false);
//     }
//   };

//   const priceListGroupChangeHandler = (selectedOption: any) => {
//     if (selectedOption) {
//       setPriceListGroup(selectedOption.value);
//       setIsPriecListBtnClicked(false);
//     }
//   };

//   const { data: priceListData, isLoading: priceListDataLoading } =
//     getPriceListData(priceListReqObj?.priceListGroup, isPriecListBtnClicked);

//   const getPriceList = () => {
//     if (priceListGroup != -2) {
//       setPriceListReqObj({ priceListGroup });
//       setIsPriecListBtnClicked(true);
//       setIsStdPriceBtnClicked(false);
//     } else {
//       setIsPriecListBtnClicked(false);
//     }
//   };

//   useEffect(() => {
//     setIsStdPriceBtnClicked(true);
//   }, []);

//   const columnHelper = createColumnHelper<CountryType>();

//   const columns = [
//     columnHelper.accessor("srNo", {
//       header: "Sr no",
//       id: "srNo",
//     }),
//     columnHelper.accessor("countryID", {
//       header: "Country ID",
//       id: "countryID",
//     }),
//     columnHelper.accessor("countryName", {
//       header: "Country",
//       id: "countryName",
//     }),
//     columnHelper.accessor("otherCharges", {
//       header: "Normal Price",
//       id: "price",
//       cell: TableCell,
//       meta: {
//         type: "number",
//       },
//     }),
//     columnHelper.accessor("priceHighDel", {
//       header: "High Del Price",
//       id: "priceHighDel",
//       cell: TableCell,
//       meta: {
//         type: "number",
//       },
//     }),
//     columnHelper.accessor("priceOnline", {
//       header: "On-Line",
//       id: "priceOnline",
//       cell: TableCell,
//       meta: {
//         type: "number",
//       },
//     }),
//     columnHelper.accessor("priceSuperflash", {
//       header: "Superflash",
//       id: "priceSuperflash",
//       cell: TableCell,
//       meta: {
//         type: "number",
//       },
//     }),
//     columnHelper.display({
//       id: "edit",
//       cell: EditCell,
//     }),
//     // {
//     //   id: "srNo",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>Sr no</>,
//     // },
//     // {
//     //   accessorFn: (row) => row.countryID,
//     //   id: "countryId",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>Country ID</>,
//     // },
//     // {
//     //   accessorFn: (row) => row.countryName,
//     //   id: "countryName",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>Country</>,
//     // },
//     // {
//     //   accessorFn: (row) => row.otherCharges,
//     //   id: "otherCharges",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>Normal Price</>,
//     // },
//     // {
//     //   accessorFn: (row) => row.priceHighDel,
//     //   id: "priceHighDel",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>High Del Price</>,
//     // },
//     // {
//     //   accessorFn: (row) => row.priceOnline,
//     //   id: "priceOnline",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>On-Line</>,
//     // },
//     // {
//     //   accessorFn: (row) => row.priceSuperflash,
//     //   id: "priceSuperflash",
//     //   cell: (info) => info.getValue(),
//     //   header: () => <>Superflash</>,
//     // },
//   ];

//   const onDataEditClick = async (data: any) => {
//     let cellData: any = Object.values(data);
//     if (cellData.length > 0) {
//       cellData[0]["groupId"] = group;
//       await updatePriceGroup(cellData);
//     }
//   };

//   let tableConfig: TableType<CountryType> = {} as TableType<CountryType>;

//   if (isPriecListBtnClicked) {
//     tableConfig = {
//       config: {
//         tableName: "Price List (Group)",
//         columns: columns,
//         tableData: priceListData || [],
//         copyBtn: true,
//         csvBtn: true,
//         excelBtn: true,
//         pdfBtn: true,
//         printBtn: true,
//         globalSearchBox: true,
//         pagination: {
//           showItemCountDropdown: false,
//           pageSize: 1000,
//           nextPreviousBtnShow: false,
//           tableMetaDataShow: false,
//         },
//       },
//     };
//   } else {
//     tableConfig = {
//       config: {
//         tableName: "Price List (Group)",
//         columns: columns,
//         tableData: stdPriceData || [],
//         copyBtn: true,
//         csvBtn: true,
//         excelBtn: true,
//         pdfBtn: true,
//         printBtn: true,
//         globalSearchBox: true,
//         onEditClick: onDataEditClick,
//         pagination: {
//           showItemCountDropdown: false,
//           pageSize: 1000,
//           nextPreviousBtnShow: false,
//           tableMetaDataShow: false,
//         },
//       },
//     };
//   }

//   return (
//     <>
//       <Card config={cardConfig.formLayoutConfig}>
//         <FormProvider {...methods}>
//           <form noValidate autoComplete="off" className="p-t-20">
//             <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
//               <div className="row">
//                 <div className="col-md-3 col-xs-12">
//                   <Select
//                     config={addPriceGroupFormFields.pricegroupcity.config}
//                     onChangeHandler={cityChangeHandler}
//                   />
//                 </div>

//                 <div className="col-md-3 col-xs-12">
//                   <Select
//                     config={addPriceGroupFormFields.priceGroupSelect.config}
//                     onChangeHandler={groupChangeHandler}
//                   />
//                 </div>

//                 <div className="col-md-3 col-xs-12">
//                   <Select
//                     config={addPriceGroupFormFields.priceGroupCurrency.config}
//                     onChangeHandler={currencyChangeHandler}
//                   />
//                 </div>

//                 <div className="col-md-3 col-xs-12 text-right">
//                   <Button
//                     type="button"
//                     onClick={getStdPrice}
//                     className={"btn btn-danger btn-sm"}
//                   >
//                     <i className="far fa-save"></i> Get Std. Price
//                   </Button>
//                 </div>
//                 {/* <div className="pt-lg-3"></div> */}
//                 <div className="col-md-3 col-xs-12">
//                   <Select
//                     config={addPriceGroupFormFields.priceGroupSelect2.config}
//                     onChangeHandler={priceListGroupChangeHandler}
//                   />
//                 </div>

//                 <div className="col-md-3 col-xs-12">
//                   {/* <Select
//                     config={addPriceGroupFormFields.priceGroupCurrency2.config}
//                   /> */}
//                 </div>
//                 {/* <div className="pt-lg-1"></div> */}
//                 <div className="col-md-6 col-xs-12 text-right">
//                   <Button
//                     type="button"
//                     onClick={getPriceList}
//                     className={"btn btn-danger btn-sm"}
//                   >
//                     <i className="far fa-save"></i> Get Price
//                   </Button>
//                 </div>

//                 <div className="col-md-12 col-xs-12 text-right">
//                   <Button type={"submit"} className={"btn btn-danger btn-sm"}>
//                     <i className="far fa-save"></i> Save All
//                   </Button>
//                 </div>
//               </div>
//             </BorderLayout>
//           </form>
//         </FormProvider>
//         <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
//           {/* {(stdPriceDataLoading || priceListDataLoading) && <Loader />} */}

//           {!stdPriceDataLoading || !priceListDataLoading ? (
//             <Table config={tableConfig.config} />
//           ) : (
//             <Loader />
//           )}
//         </BorderLayout>
//       </Card>
//     </>
//   );
// };
