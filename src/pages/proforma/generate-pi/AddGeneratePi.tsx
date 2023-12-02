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
  NewCheckbox,
  NewInput,
  NewSelect,
} from "@shared/index";
import { addGeneratePiFormFields, GeneratePiType } from "@proforma/index";
import { ColumnDef } from "@tanstack/react-table";

export const AddGeneratePi: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<GeneratePiType>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Generate Invoice (PI)",
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
  const columns: ColumnDef<GeneratePiType>[] = [
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

  const tableConfig: TableType<GeneratePiType> = {
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
        {/* <FormProvider {...methods}> */}
        <form
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
          className="p-t-20"
        >
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <div className="row">
              <div className="col-4 col-xs-12">
                <div className="card-body">
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={addGeneratePiFormFields.clientField}
                  />
                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        View
                      </Button>
                    </div>
                  </div>
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.currencyField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.gstnField}
                  />
                </div>
              </div>
              {/* 2 Column */}
              <div className="col-4 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.fromdateField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.countryField}
                  />
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={addGeneratePiFormFields.stateField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.codeField}
                  />
                  <label
                    htmlFor=""
                    className="col-sm-7 control-label col-form-label"
                  ></label>

                  <div className="col-md-14 col-xs-12 text-right">
                    <NewCheckbox
                      errors={errors}
                      register={register}
                      control={control}
                      config={addGeneratePiFormFields.gstField}
                    />
                  </div>
                </div>
              </div>
              {/* 3 column */}
              <div className="col-4 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.todateeField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.symbolField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.currencyField}
                  />
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
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={addGeneratePiFormFields.fyearField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.invoicenoField}
                  />
                  <div className="col-md-14 col-xs-12 text-right">
                    <NewCheckbox
                      errors={errors}
                      register={register}
                      control={control}
                      config={addGeneratePiFormFields.manualField}
                    />
                  </div>
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.amountField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.disamountField}
                  />

                  <div className="mb-2">
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button type="button" className={"btn btn-danger btn-sm"}>
                        Get Dis
                      </Button>
                    </div>
                  </div>
                  {/* <div className="col-sm-6 "> */}

                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.stField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.cgstperField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.stamountField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.cgstField}
                  />
                </div>
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.dateField}
                  />
                  <NewCheckbox
                    errors={errors}
                    register={register}
                    control={control}
                    config={addGeneratePiFormFields.donotField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.subtotalField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.sgstperField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.igstField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.sgstField}
                  />

                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.igstField}
                  />
                </div>
              </div>

              <div className="col-md-3 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.staxField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.ecessField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.krishicessField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addGeneratePiFormFields.totalField}
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
              <ActionButtons />
            </BorderLayout>
          </div>
        </form>
      </Card>
    </>
  );
};
