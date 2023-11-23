import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  ActionButtons,
  Select,
  SingleCheckbox,
  Button,
  Table,
  TableType,
} from "@shared/index";
import { InvoiceGenGstType, invoiceGenGstFormFields } from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceGenerateGst: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Genereate Invoice",
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
  const columns: ColumnDef<InvoiceGenGstType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Ref No</>,
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
      header: () => <>Order Date</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Price</>,
    },
    {
      // accessorFn: (row) => row.stateCodeN,
      id: "Address",
      // cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Service</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Select all </>,
    },
    {
      id: "Instruction",
      // cell: (info) => info.getValue(),
      header: () => <>Adjustment</>,
    },
  ];

  const tableConfig: TableType<InvoiceGenGstType> = {
    config: {
      tableName: "generate Pi",
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
                <div className="col-6 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={invoiceGenGstFormFields.clientField.config}
                    />
                  </div>
                </div>
                <div className="col-6 col-xs-12">
                  <div className="card-body">
                    <Input
                      config={invoiceGenGstFormFields.countryField.config}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 col-xs-12">
                    <Input
                      config={invoiceGenGstFormFields.currencyField.config}
                    />
                  </div>
                  <div className="col-4 col-xs-12">
                    <Select
                      config={invoiceGenGstFormFields.stateField.config}
                    />
                  </div>
                  <div className="col-4 col-xs-12">
                    <Input config={invoiceGenGstFormFields.gstnField.config} />
                  </div>
                  <div className="col-md-14 col-xs-12 text-right">
                    {/* <SingleCheckbox
                      config={invoiceGenGstFormFields.gstField.config}
                    /> */}
                  </div>
                  {/* // currency , Staste ad GST */}
                </div>
                <div className="row">
                  <div className="col-4 col-xs-12">
                    <Input
                      config={invoiceGenGstFormFields.actualBuyreField.config}
                    />
                  </div>
                  <div className="col-4 col-xs-12">
                    <Select
                      config={invoiceGenGstFormFields.stateField.config}
                    />
                  </div>
                  <div className="col-4 col-xs-12">
                    <Input config={invoiceGenGstFormFields.gstnField.config} />
                    <div className="col-md-14 col-xs-12 text-right">
                      <SingleCheckbox
                        config={invoiceGenGstFormFields.gstField.config}
                      />
                    </div>
                  </div>
                  {/* // Actual Buyer , Staste ad GST */}
                </div>
                <div className="row">
                  <div className="col-4 col-xs-12">
                    <Input
                      config={invoiceGenGstFormFields.fromdateField.config}
                    />
                  </div>
                  <div className="col-4 col-xs-12">
                    <Input
                      config={invoiceGenGstFormFields.todateeField.config}
                    />
                  </div>
                  {/* // From Date,ToDate View button */}
                  <div className="col-4 col-xs-12">
                    {/* <div className="col-md-14 col-xs-12 text-right"> */}
                    <Button type="button" className={"btn btn-danger btn-sm"}>
                      Get Enqires
                    </Button>
                    {/* </div> */}
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
                    <Select
                      config={invoiceGenGstFormFields.fyearField.config}
                    />

                    {/* </div> */}
                    {/* <div className="col-sm-6 "> */}
                    <Input
                      config={invoiceGenGstFormFields.invoicenoField.config}
                    />
                    <div className="col-md-14 col-xs-12 text-right">
                      <SingleCheckbox
                        config={invoiceGenGstFormFields.manualField.config}
                      />
                    </div>
                    {/* </div> */}
                    {/* <div className="col-sm-6 "> */}
                    <Input
                      config={invoiceGenGstFormFields.amountField.config}
                    />

                    {/* </div> */}
                    {/* <div className="col-sm-5 "> */}
                    <Input
                      config={invoiceGenGstFormFields.disamountField.config}
                    />

                    {/* </div> */}

                    <div className="mb-2">
                      <div className="col-md-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          Get Dis
                        </Button>
                      </div>
                    </div>
                    {/* <div className="col-sm-6 "> */}
                    <Input config={invoiceGenGstFormFields.stField.config} />

                    {/* </div> */}
                    {/* <div className="col-sm-6 "> */}
                    <Input
                      config={invoiceGenGstFormFields.cgstperField.config}
                    />
                    {/* </div> */}

                    {/* <div className="col-sm-6 "> */}
                    <Input
                      config={invoiceGenGstFormFields.stamountField.config}
                    />

                    {/* </div> */}
                    {/* <div className="col-sm-6 "> */}
                    <Input config={invoiceGenGstFormFields.cgstField.config} />
                    {/* </div> */}
                  </div>
                </div>

                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    {/* <div className="col-sm-7 "> */}
                    <Input config={invoiceGenGstFormFields.dateField.config} />
                    {/* </div> */}

                    {/* <div className="col-sm-5 "> */}
                    <SingleCheckbox
                      config={invoiceGenGstFormFields.donotField.config}
                    />
                    {/* </div> */}

                    {/* <div className="col-sm-12"> */}
                    <Input
                      config={invoiceGenGstFormFields.subtotalField.config}
                    />
                    {/* </div> */}

                    {/* <div className="col-sm-6 "> */}
                    <Input
                      config={invoiceGenGstFormFields.sgstperField.config}
                    />
                    {/* </div> */}

                    {/* <div className="col-sm-6 "> */}
                    <Input
                      config={invoiceGenGstFormFields.igstperField.config}
                    />
                    {/* </div> */}
                    {/* <div className="col-sm-6 "> */}
                    <Input config={invoiceGenGstFormFields.sgstField.config} />
                    {/* </div> */}

                    {/* <div className="col-sm-6 "> */}
                    <Input config={invoiceGenGstFormFields.igstField.config} />
                    {/* </div> */}
                  </div>
                </div>

                <div className="col-md-3 col-xs-12">
                  <div className="card-body">
                    {/* <div className="col-sm-12 "> */}
                    <Input config={invoiceGenGstFormFields.staxField.config} />
                    {/* </div>  */}
                    {/* <div className="col-sm-12 "> */}
                    <Input config={invoiceGenGstFormFields.ecessField.config} />
                    {/* </div>  */}
                    {/* <div className="col-sm-12 "> */}
                    <Input
                      config={invoiceGenGstFormFields.krishicessField.config}
                    />
                    {/* </div>  */}
                    {/* <div className="col-sm-9 "> */}
                    <Input config={invoiceGenGstFormFields.totalField.config} />
                    {/* </div>  */}
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
                <ActionButtons />
              </BorderLayout>
            </div>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
