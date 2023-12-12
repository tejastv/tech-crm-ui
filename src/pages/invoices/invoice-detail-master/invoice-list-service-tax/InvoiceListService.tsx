import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  ActionButtons,
  Button,
  Table,
  TableType,
  NewSelect,
  NewInput,
  NewCheckbox,
} from "@shared/index";
import { InvoiceGenGstType, invoiceGenGstFormFields } from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceListService: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<any>();
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Invoice List (Service Tax)",
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
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-3">
              Fyear All Client DateWise Specific Client DateWise
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={invoiceGenGstFormFields.clientField}
              />
            </div>
            <div className="row">
              <div className="col-3">
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={invoiceGenGstFormFields.gstField}
                />
              </div>
            </div>
            <hr />

            <hr />
            <div className="row">
              <div className="col-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.fromDateField}
                />
              </div>
              <div className="col-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.toDateField}
                />
              </div>
              {/* // From Date,ToDate View button */}
              <div className="col-4 col-xs-12">
                <Button type="button" className={"btn btn-danger btn-sm"}>
                  Get Enquires
                </Button>
              </div>
              {/* </div>   */}
            </div>

            {/* Table */}
            <div className="col-md-12 col-xs-12">
              <div className="card-body">
                <Table config={tableConfig.config}>null</Table>
              </div>
            </div>

            <div className="col-md-5 col-xs-12">
              <div className="card-body">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={invoiceGenGstFormFields.fYearField}
                />
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
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.amountField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.disAmountField}
                />
                <div className="mb-2">
                  <div className="col-md-14 col-xs-12 text-right">
                    <Button type="button" className={"btn btn-danger btn-sm"}>
                      Get Dis
                    </Button>
                  </div>
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
    </Card>
  );
};
