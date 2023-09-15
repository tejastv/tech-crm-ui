import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  Loader,
  Select,
  Table,
  TableType,
} from "@shared/index";
import {
  AddUpdateStdPrice,
  addStdPriceFormFields,
  useCountryApiCallHook,
  useStdPriceApiCallHook,
  StdPriceType,
} from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const StdPrice: React.FC = () => {
  const methods = useForm<AddUpdateStdPrice>();
  const [country, setCountry] = useState("0");
  const { getCountry } = useCountryApiCallHook();
  const { data: countryData } = getCountry();
  const { getStdPriceData } = useStdPriceApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Std. Price List (Local Source)",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    borderLayoutConfig: {
      heading: "Table",
    },
  };

  if (countryData) {
    addStdPriceFormFields.stdcurrencey.config.options = selectOptionsMaker(
      countryData,
      "countryId",
      "countryName"
    );
  }

  const columns: ColumnDef<StdPriceType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.countryID,
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
      cell: (info) => info.getValue(),
      header: () => <>Normal Price</>,
    },
    {
      accessorFn: (row) => row.priceHighDel,
      id: "priceHighDel",
      cell: (info) => info.getValue(),
      header: () => <>High Del Price</>,
    },
    {
      accessorFn: (row) => row.priceOnline,
      id: "on-line",
      cell: (info) => info.getValue(),
      header: () => <>On-Line</>,
    },
    {
      accessorFn: (row) => row.priceSuperflash,
      id: "superflash",
      cell: (info) => info.getValue(),
      header: () => <>Superflash</>,
    },
  ];

  const { data: stdPriceData, isLoading: isStdPriceDataLoading } =
    getStdPriceData(country);

  const tableConfig: TableType<StdPriceType> = {
    config: {
      tableName: "Std. Price List (Local Source)",
      columns: columns,
      tableData: stdPriceData ? stdPriceData : [],
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
      setCountry("" + selectedOption.value);
    }
  };

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off" className="p-t-20">
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <div className="row">
                <div className="col-3 pull-right">
                  <Select
                    config={addStdPriceFormFields.stdcurrencey.config}
                    onChangeHandler={handleSelectChange}
                  />
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <Table config={tableConfig.config}>
            {isStdPriceDataLoading && <Loader />}
          </Table>
        </BorderLayout>
      </Card>
    </>
  );
};
