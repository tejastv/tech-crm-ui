import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BorderLayout, Card,Loader , Select,  Table,TableType, } from "@shared/index";
import { CountryType, AddUpdateStdPrice, addStdPriceFormFields, useCountryApiCallHook, useCurrencyApiCallHook, useStdPriceApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";

export const AddStdPrice: React.FC = () => {
  const { getCountry } = useCountryApiCallHook();
  const { getCurrency } = useCurrencyApiCallHook();
  const { getStdPriceData } = useStdPriceApiCallHook();
  const { data: countryData, isLoading } = getCountry();
  
  const methods = useForm<AddUpdateStdPrice>();
  const params = useParams();

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

  const columns: ColumnDef<CountryType>[] = [
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
      // accessorFn: (row) => row,
      id: "normalPrice",
      cell: (info) => info.getValue(),
      header: () => <>Normal Price</>,
    },
    {
      // accessorFn: (row) => row,
      id: "highdelprice",
      cell: (info) => info.getValue(),
      header: () => <>High Del Price</>,
    },
    {
      // accessorFn: (row) => row,
      id: "on-line",
      cell: (info) => info.getValue(),
      header: () => <>On-Line</>,
    },
    {
      // accessorFn: (row) => row,
      id: "superflash",
      cell: (info) => info.getValue(),
      header: () => <>Superflash</>,
    },
    // {
    //   id: "action",
    //   cell: (info) => info.getValue(),
    //   header: () => <>Action</>,
    // },
  ];

  if (params.id) {
    const { data: stdpriceData, isSuccess: stdpriceDataSuccess } = getStdPriceData(
      "" + params.id
    );
    if (stdpriceDataSuccess) {
        let currencyId = stdpriceData?.currencyID;
      }
    }
   else {
    useEffect(() => {
      methods.reset();
    }, []);
  }


  const tableConfig: TableType<CountryType> = {
    config: {
      columns: columns,
      tableData: countryData ? countryData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
    },
  };

  // const { data: currencyData, isSuccess: getCurrencySuccess } =
  // getCountry();

  const { data: currencyData, isSuccess: getCurrencySuccess } = getCurrency();
  if (currencyData) {
    addStdPriceFormFields.stdcurrencey.config.options =
    selectOptionsMaker(currencyData, "currencyId", "currencyType");
  }

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form
            // onSubmit={}
            noValidate
            autoComplete="off"
            className="p-t-20"
          >
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
