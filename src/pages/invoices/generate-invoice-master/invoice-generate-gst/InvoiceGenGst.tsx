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
  const {
    register,
    control,
    handleSubmit,
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

  const columns: ColumnDef<InvoiceListType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },

    {
      // accessorFn: (row) => row.state,
      id: "Ref",
      // cell: (info) => info.getValue(),
      header: () => <>Ref</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Ref No",
      // cell: (info) => info.getValue(),
      header: () => <>Client Ref No</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Order Date",
      // cell: (info) => info.getValue(),
      header: () => <>Order Date</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Company",
      // cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Country",
      // cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Price",
      // cell: (info) => info.getValue(),
      header: () => <>Price</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Dis.",
      // cell: (info) => info.getValue(),
      header: () => <>Dis. </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Adjust",
      // cell: (info) => info.getValue(),
      header: () => <>Adjust</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Comm.	",
      // cell: (info) => info.getValue(),
      header: () => <>Comm. </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Select all ",
      // cell: (info) => info.getValue(),
      header: () => <>Select all </>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Report Date",
      // cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Service",
      // cell: (info) => info.getValue(),
      header: () => <>Service</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Enq. Price",
      // cell: (info) => info.getValue(),
      header: () => <>Enq. Price</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "E.Type",
      // cell: (info) => info.getValue(),
      header: () => <>E.Type</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "OldFormat",
      // cell: (info) => info.getValue(),
      header: () => <>OldFormat</>,
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

  const onSubmit = handleSubmit((data): void => {
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
            <div className="col-md-4">
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
            <div className="col-md-4">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={invoiceGenGstFormFields.clientField}
              />
            </div>
            <div className="col-md-4">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={invoiceGenGstFormFields.actualBuyreField}
              />
            </div>
            <hr className="mt-5" />
            <div className="col-md-6">
              <div className="row">
                {/* <div className="col-md-6 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.fromDateField}
                  />
                </div> */}
                {/* <div className="col-md-6 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceGenGstFormFields.toDateField}
                  />
                </div> */}
                <div className="col-md-6 col-xs-12">
                  {/* <NewSelect
                      errors={errors}
                      register={register}
                      control={control}
                      config={invoiceGenGstFormFields.cityField}
                    /> */}
                  {/* <div className="col-md-14 col-xs-12 text-right">
                    <Button type="button" className={"btn btn-danger btn-sm "}>
                      Get
                    </Button>
                  </div> */}
                </div>
                <div className="col-md-6 col-xs-12">
                  {/* <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={invoiceGenGstFormFields.clientField}
                  /> */}
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
                  {/* <div className="col-md-14 col-xs-12 ">
                    <Button type="button" className={"btn btn-danger btn-sm"}>
                      Refresh/View
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={invoiceGenGstFormFields.fromDateField}
                    />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={invoiceGenGstFormFields.toDateField}
                    />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <Button type="button" className={"btn btn-danger btn-sm"}>
                      Get Inquires
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xs-12">
                <Table config={tableConfig.config}>null</Table>
              </div>
              <div className="mt-2 text-center">
                <Button type="button" className={"btn btn-danger btn-sm"}>
                  Calculate
                </Button>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="row">
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.invoiceNoField}
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.dateField}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.amountField}
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.disAmountField}
                />
              </div>
              <div className="col-3">
                <Button type="button" className={"btn btn-danger btn-sm"}>
                  Get Discount
                </Button>
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.subtotalField}
                />
              </div>

              {/* </div> */}
              {/* <div className="col-sm-5 "> */}
            </div>
            <div className="row">
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.cgstField}
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.cgstPerField}
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.sgstField}
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.sGstPerField}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.igstField}
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.iGstPerField}
                />
              </div>
              <div className="col-3"></div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={invoiceGenGstFormFields.totalField}
                />
              </div>
            </div>
            <div className="col-md-5 col-xs-12">
              {/* <div className="col-sm-6 "> */}
              {/* <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={invoiceGenGstFormFields.fYearField}
              /> */}

              {/* </div> */}
              {/* <div className="col-sm-6 "> */}

              <div className="col-md-14 col-xs-12 text-right">
                {/* <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={invoiceGenGstFormFields.manualField}
                /> */}
              </div>
              {/* </div> */}
              {/* <div className="col-sm-6 "> */}

              {/* </div> */}

              {/* <NewInput
                errors={errors}
                register={register}
                config={invoiceGenGstFormFields.stField}
              /> */}

              {/* <NewInput
                errors={errors}
                register={register}
                config={invoiceGenGstFormFields.stAmountField}
              /> */}
            </div>

            {/* <div className="col-md-4 col-xs-12">
              <div className="card-body">
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={invoiceGenGstFormFields.doNotField}
                />
              </div>
            </div> */}

            <div className="col-md-3 col-xs-12">
              <div className="card-body">
                {/* <NewInput
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
                /> */}

                {/* <div className="col-md-14 col-xs-12 text-right">
                  <Button type="button" className={"btn btn-danger btn-sm"}>
                    calculate
                  </Button>
                </div> */}
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
  );
};
