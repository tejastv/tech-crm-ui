import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Select,
  Button,
  Table,
  TableType,
} from "@shared/index";
import {
  InvoiceGenGstType,
  invoiceDetailGroupWiseFormFields,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceDetailGroupWise: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Invoice Detailed Report - Group wise",
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
      id: "invoice np",
      // cell: (info) => info.getValue(),
      header: () => <>Invoice No</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Invoice Date",
      // cell: (info) => info.getValue(),
      header: () => <>Invoice Date</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Report Name",
      // cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
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
      header: () => <>Client ref.</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Report Country</>,
    },
    {
      // accessorFn: (row) => row.stateCodeN,
      id: "Address",
      // cell: (info) => info.getValue(),
      header: () => <>Amount</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>CGST/SGST/IGST</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Total</>,
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
      globalSearchBox: true,
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
                  <div className="card-body">
                    <Select
                      config={
                        invoiceDetailGroupWiseFormFields.fyearField.config
                      }
                    />
                  </div>
                </div>

                <div className="col-md-3 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={
                        invoiceDetailGroupWiseFormFields.fromdateField.config
                      }
                    />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={
                        invoiceDetailGroupWiseFormFields.todateeField.config
                      }
                    />
                    <div className="mb-2">
                      <div className="col-md-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          Get
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card-body">
                    <Select
                      config={
                        invoiceDetailGroupWiseFormFields.groupField.config
                      }
                    />
                    <div className="mb-2 mt-3">
                      <div className="col-md-14 col-xs-12 text-right">
                        <Button
                          type="button"
                          className={"btn btn-danger btn-sm"}
                        >
                          Referesh/View
                        </Button>
                      </div>
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
              {/* </div> */}
            </BorderLayout>
            <div className="card-body">
              <BorderLayout heading={cardConfig.formActionsConfig.heading}>
                <div className="mb-2 mt-3">
                  <div className="col-md-14 col-xs-12 text-right">
                    <Button
                      type="button"
                      className={"btn btn-danger btn-sm mr-1"}
                    >
                      <i className="far fa-save"></i>
                      Export Invoice List
                    </Button>

                    <Button
                      type="button"
                      className={"btn btn-secondary btn-sm"}
                    >
                      <i className="fa fa-close"></i>
                      Cancel
                    </Button>
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
