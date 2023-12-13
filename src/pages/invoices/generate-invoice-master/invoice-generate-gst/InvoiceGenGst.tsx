import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  Table,
  TableType,
  NewSelect,
  NewInput,
  NewCheckbox,
} from "@shared/index";
import { InvoiceListType, invoiceGenGstFormFields } from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceGenerateGst: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const {
    register,
    control,
    formState: { errors },
  } = useForm<InvoiceListType>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Invoice List",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Button",
    },
  };
  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      //   methods.reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  //   if (params.id) {
  //     const { data: currencyData, isSuccess: currencyDataSuccess } = getCurrencyData(
  //       "" + params.id
  //     );
  //     if (currencyDataSuccess) {
  //       addCurrencyFormFields.currencyField.config.setData = currencyData?.currencyType;
  //       addCurrencyFormFields.symbolField.config.setData = currencyData?.currencySymbol;
  //       addCurrencyFormFields.currencyWordField.config.setData = currencyData?.currencyInWord;
  //       addCurrencyFormFields.purchesExchanegField.config.setData = currencyData?.exchangeRateRs;
  //       addCurrencyFormFields.pDateField.config.setData = currencyData?.entryDate;
  //       addCurrencyFormFields.sellExchanegField.config.setData = currencyData?.exchangeRateRsSell;
  //       addCurrencyFormFields.sDateField.config.setData = currencyData?.entryDateSell;
  //     }
  //   } else {
  //     useEffect(() => {
  //       methods.reset();
  //     }, []);
  //   }
  const columns: ColumnDef<InvoiceListType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },

    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Invoice No</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Invoice Date</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Client Ref No</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Report Country</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Company Name</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Bill Amt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Total Amt</>,
    },
  ];

  const tableConfig: TableType<InvoiceListType> = {
    config: {
      tableName: "Invocie List",
      columns: columns,
      tableData: [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: false,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: false,
        tableMetaDataShow: false,
      },
    },
  };

  const methods = useForm();
  const onSubmit = methods.handleSubmit((data): void => {
    console.log("value", data);
  });

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <form
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
          className="p-t-20"
        >
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <div className="row">
              <div className="col-md-3">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={invoiceGenGstFormFields.fYearField}
                />
                {/* <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={invoiceGenGstFormFields.allClientDatewiseField}
                /> */}
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={invoiceGenGstFormFields.fromDateField}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={invoiceGenGstFormFields.toDateField}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    {/* <NewSelect
                      errors={errors}
                      register={register}
                      control={control}
                      config={invoiceGenGstFormFields.cityField}
                    /> */}
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button
                        type="button"
                        className={"btn btn-danger btn-sm "}
                      >
                        Get
                      </Button>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <NewSelect
                      errors={errors}
                      register={register}
                      control={control}
                      config={invoiceGenGstFormFields.clientField}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-4">
                    {/* <NewCheckbox
                      errors={errors}
                      register={register}
                      control={control}
                      config={invoiceGenGstFormFields.bobField}
                    /> */}
                  </div>

                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 ">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        Refresh/View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Table */}
              <div className="col-md-12 col-xs-12">
                <div className="card-body">
                  <Table config={tableConfig.config}>null</Table>
                </div>
              </div>

              <div className="col-md-5 col-xs-12">
                <div className="card-body">
                  {/* <div className="col-sm-6 "> */}
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={invoiceGenGstFormFields.fYearField}
                  />

                  {/* </div> */}
                  {/* <div className="col-sm-6 "> */}
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.invoiceNoField}
                  />
                  <div className="col-md-14 col-xs-12 text-right">
                    <NewCheckbox
                      errors={errors}
                      register={register}
                      control={control}
                      config={invoiceGenGstFormFields.manualField}
                    />
                  </div>
                  {/* </div> */}
                  {/* <div className="col-sm-6 "> */}
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.amountField}
                  />

                  {/* </div> */}
                  {/* <div className="col-sm-5 "> */}
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.disAmountField}
                  />

                  {/* </div> */}

                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        Get Dis
                      </Button>
                    </div>
                  </div>

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.stField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.cgstPerField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.stAmountField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.cgstField}
                  />
                </div>
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  {/* <div className="col-sm-7 "> */}
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.dateField}
                  />
                  <NewCheckbox
                    errors={errors}
                    register={register}
                    control={control}
                    config={invoiceGenGstFormFields.doNotField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.subtotalField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.sGstPerField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.iGstPerField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.sgstField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.igstField}
                  />
                </div>
              </div>

              <div className="col-md-3 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.sTaxField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.eCessField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.krishiCessField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.totalField}
                  />
                  <div className="col-md-14 col-xs-12 text-right">
                    <Button type="button" className={"btn btn-danger btn-sm"}>
                      calculate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </BorderLayout>
          <div className="card-body">
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              {/* <ActionButtons /> */}
              <div className="row">
                <div className="col-md-1 ">
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        <i className="far fa-save"></i>
                        Currency Total
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        <i className="far fa-save"></i>
                        Export Invoice With Detail to word
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 ">
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        <i className="far fa-save"></i>
                        Export Invoice With Detail to Excel
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 ">
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        <i className="far fa-save"></i>
                        Invoicein Excel
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 ">
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        <i className="far fa-save"></i>
                        Export Invoice List
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        Print Preview
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="col-md-1 text-right">
                  <div className="mb-2">
                    <div className="col-sm-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        <i className="far fa-window-close"></i>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </BorderLayout>
          </div>
        </form>
      </Card>
    </>
  );
};
