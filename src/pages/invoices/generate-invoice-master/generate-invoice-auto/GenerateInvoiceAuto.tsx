import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  Table,
  TableType,
  NewInput,
  NewSelect,
  NewRadio,
} from "@shared/index";
import {
  GenerateInvoiceAutoType,
  generateInvoiceAutoFormFields,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceGenerateAuto: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const {
    register,
    control,
    formState: { errors },
  } = useForm<GenerateInvoiceAutoType>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Genereate Invoice (Auto GST)",
      heading: "Entry",
    },
    tableOneConfig: {
      mainHeading: "Generated Invoice List",
      // heading: "Entry",
    },
    tableTwoConfig: {
      mainHeading: "Skipped Invoice List",
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
  const columns: ColumnDef<GenerateInvoiceAutoType>[] = [
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
      header: () => <>Dis.</>,
    },

    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Comm.</>,
    },
    {
      id: "Instruction",
      // cell: (info) => info.getValue(),
      header: () => <>Adjust</>,
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
      header: () => <>E.Type</>,
    },
  ];

  const tableConfig: TableType<GenerateInvoiceAutoType> = {
    config: {
      tableName: "generate Invoice Auto",
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
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
      },
    },
  };

  // 2nd Table

  const columnsTwo: ColumnDef<GenerateInvoiceAutoType>[] = [
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
      header: () => <>Client Name</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <> Client GSTN</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Report On</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Ref No</>,
    },
  ];

  const tableTwoConfig: TableType<GenerateInvoiceAutoType> = {
    config: {
      tableName: "generate Invoice Auto",
      columns: columnsTwo,
      tableData: [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: true,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
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
              <div className="col-md-6 col-xs-12">
                <div className="card-body">
                  <NewRadio
                    errors={errors}
                    register={register}
                    control={control}
                    config={generateInvoiceAutoFormFields.action}
                  />
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={generateInvoiceAutoFormFields.client}
                  />
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 Column */}
              <div className="col-md-6 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={generateInvoiceAutoFormFields.fromDateField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={generateInvoiceAutoFormFields.toDateField}
                  />
                </div>
              </div>

              <BorderLayout heading={cardConfig.tableOneConfig.mainHeading}>
                {/* Table */}
                <div className="col-md-12 col-xs-12">
                  <div className="card-body">
                    <Table config={tableConfig.config}>null</Table>
                  </div>
                </div>
              </BorderLayout>
              <BorderLayout heading={cardConfig.tableTwoConfig.mainHeading}>
                <div className="col-md-12 col-xs-12">
                  <div className="card-body">
                    <Table config={tableTwoConfig.config}>null</Table>
                  </div>
                </div>
              </BorderLayout>
            </div>
          </BorderLayout>
        </form>
      </Card>
    </>
  );
};
