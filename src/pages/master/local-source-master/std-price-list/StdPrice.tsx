import React from "react";
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
import { returnObjectBasedOnID } from "@utils/returnObjectBasedOnID";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const StdPrice: React.FC = () => {
  const methods = useForm<AddUpdateStdPrice>();
  const { getCountry } = useCountryApiCallHook();
  const { data: countryData, isLoading } = getCountry();
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
    let data: any = returnObjectBasedOnID(
      countryData,
      "countryId",
      1,
      "countryId",
      "countryName"
    );
    addStdPriceFormFields.stdcurrencey.config.setData = data
      ? {
          label: data.label,
          value: data.value,
        }
      : [];
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

  const { data: stdPriceData } = getStdPriceData(
    countryData ? "" + countryData[0].countryId : "1"
  );

  const tableConfig: TableType<StdPriceType> = {
    config: {
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

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off" className="p-t-20">
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <div className="row">
                <div className="col-3 pull-right">
                  <Select config={addStdPriceFormFields.stdcurrencey.config} />
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <Table config={tableConfig.config}>{isLoading && <Loader />}</Table>
        </BorderLayout>
      </Card>
    </>
  );
};
