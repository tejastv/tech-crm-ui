import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  Select,
  Button,
  Table,
  Radio,
  TableType,
  SingleCheckbox,
  NewSelect,
  NewInput,
} from "@shared/index";
import {
  InvoiceListExceWiseType,
  invoiceListExceWiseFormFields,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceListExceWise: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InvoiceListExceWiseType>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Invoice List Exce Wise",
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
  const columns: ColumnDef<InvoiceListExceWiseType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },

    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <> Mark</>,
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
      header: () => <>BillAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>DisAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>SubTotal</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>STax</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>ECees</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>STAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>ActSTAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>TotalAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Total</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>CountryID</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>CurrencyID</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>CurrencyType</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>STper</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>ExcecuitveID</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>OldFormart</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>SegmentId</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>SagmentName</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>KrishiCessPer</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>KrishiCessAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>CGSTPer</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>SGSTPer</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>IGSTPer</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>CGSTAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>SGSTAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>IGSTAmt</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>GSTN</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>GSTYN</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>ActualBuyreId </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>PartyName </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>StateId </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>ActualBuyreGSTN</>,
    },
  ];

  const tableConfig: TableType<InvoiceListExceWiseType> = {
    config: {
      tableName: "Invocie List Exce Wise",
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
        <FormProvider {...methods}>
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
                    config={invoiceListExceWiseFormFields.fYearField}
                  />

                  <Radio
                    config={
                      invoiceListExceWiseFormFields.allClientDatewiseField
                        .config
                    }
                  />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <NewInput
                        errors={errors}
                        register={register}
                        config={invoiceListExceWiseFormFields.fromDateField}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <NewInput
                        errors={errors}
                        register={register}
                        config={invoiceListExceWiseFormFields.toDateField}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <NewSelect
                        errors={errors}
                        register={register}
                        control={control}
                        config={invoiceListExceWiseFormFields.cityField}
                      />

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
                        config={invoiceListExceWiseFormFields.excecutiveField}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <NewSelect
                        errors={errors}
                        register={register}
                        control={control}
                        config={invoiceListExceWiseFormFields.emailField}
                      />
                    </div>
                    <div className="col-md-6  text-right col-xs-12">
                      <SingleCheckbox
                        config={
                          invoiceListExceWiseFormFields.markAllField.config
                        }
                      />
                    </div>
                    <div className="mb-2">
                      <div className="col-md-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
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
              </div>
            </BorderLayout>
            <div className="card-body">
              <BorderLayout heading={cardConfig.formActionsConfig.heading}>
                {/* <ActionButtons /> */}
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-2 ">
                    <div className="mb-2">
                      <div className="col-md-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          <i className="far fa-save"></i>
                          Currency Total
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-2">
                      <div className="col-md-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          {" "}
                          <i className="far fa-save"></i>
                          Export Invoice with Detail to Word
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-2">
                      <div className="col-sm-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          {" "}
                          <i className="far fa-save"></i>
                          Export Invoice List
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-2">
                      <div className="col-sm-14 col-xs-12 float-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
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
        </FormProvider>
      </Card>
    </>
  );
};
