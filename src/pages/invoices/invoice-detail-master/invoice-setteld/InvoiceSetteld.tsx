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
  Checkbox,
} from "@shared/index";
import {
  InvoiceListSetteldType,
  InvoiceListTdsType,
  invoiceListSetteldFormFields,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceSetteld: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Invoice List Setteld",
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
  const columns: ColumnDef<InvoiceListSetteldType>[] = [
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
      header: () => <>Address </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Total </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>AmountRecd </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>TDS </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Outstanding </>,
    },
  ];

  const tableConfig: TableType<InvoiceListSetteldType> = {
    config: {
      tableName: "Invocie List Setteld",
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
                  <Select
                    config={invoiceListSetteldFormFields.fyearField.config}
                  />

                  <Radio
                    config={
                      invoiceListSetteldFormFields.allClientDatewiseField.config
                    }
                  />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <Input
                        config={
                          invoiceListSetteldFormFields.fromdateField.config
                        }
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <Input
                        config={
                          invoiceListSetteldFormFields.todateeField.config
                        }
                      />
                    </div>

                    <div className="col-md-6 col-xs-12">
                      <Select
                        config={invoiceListSetteldFormFields.cityField.config}
                      />
                      <div className="mb-2">
                        <div className="col-md-14 col-xs-12 text-right">
                          <Button
                            type="button"
                            className={"btn btn-danger btn-sm "}
                          >
                            Get
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <Select
                        config={invoiceListSetteldFormFields.ClientField.config}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row">
                    <div className="mb-2">
                      <div className="col-md-14 col-xs-12 ">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          Refresh/View
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-12 col-xs-12">
                      <Select
                        config={
                          invoiceListSetteldFormFields.CurrencyField.config
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="col-md-12 col-xs-12">
                  <div className="card-body">
                    <Table config={tableConfig.config}>null</Table>
                  </div>
                </div>
                <div className="col-md-3 col-xs-12 ">
                  <Input
                    config={
                      invoiceListSetteldFormFields.totalAmountField.config
                    }
                  />
                </div>
                <div className="col-md-3 col-xs-12 ">
                  <Input
                    config={invoiceListSetteldFormFields.recivedField.config}
                  />
                </div>
                <div className="col-md-3 col-xs-12 ">
                  <Input
                    config={invoiceListSetteldFormFields.tdsField.config}
                  />
                </div>
                <div className="col-md-3 col-xs-12 ">
                  <Input
                    config={
                      invoiceListSetteldFormFields.outstandingField.config
                    }
                  />
                </div>
              </div>
            </BorderLayout>
            <div className="card-body">
              <BorderLayout heading={cardConfig.formActionsConfig.heading}>
                {/* <ActionButtons /> */}
                <div className="row">
                  <div className="col-md-4  "></div>

                  <div className="col-md-1">
                    <div className="mb-2">
                      <div className="col-sm-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          {" "}
                          <i className="far fa-save"></i>
                          Export
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-1">
                    <div className="mb-2">
                      <div className="col-sm-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          {" "}
                          <i className="far fa-save"></i>
                          Print-Preview
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
