import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  Table,
  TableType,
  NewSelect,
  NewInput,
} from "@shared/index";
import {
  InvoiceListFormType,
  InvoiceListType,
  invoiceListFormFields,
  useInvoiceListApiCallHook,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";
import {
  CityType,
  ClientType,
  FinYearType,
  useCityApiCallHook,
  useClientApiCallHook,
  useFinYearApiCallHook,
} from "@pages/master";
import _ from "lodash";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { usePagination } from "@hooks/usePagination";

export const InvoiceList: React.FC = () => {
  const { getFormatedFinYear } = useFinYearApiCallHook();
  const { getInvoiceList } = useInvoiceListApiCallHook();
  const { data: fYearData } = getFormatedFinYear();
  const [finYearOptions, setFinYearOptions] = useState<FinYearType[]>();
  const { getClient } = useClientApiCallHook();
  const { getCity } = useCityApiCallHook();
  const { limit, offset } = usePagination();
  // const [cityId, setCityId] = useState();
  const [cityOptions, setCityOptions] = useState<CityType[]>();
  const [invoiceList, setInvoiceList] = useState<InvoiceListType[]>([]);
  const [clientOptions, setClientOptions] = useState<Partial<ClientType>[]>([
    { clientName: "All", clientId: -1 },
  ]);
  const [searchStringClient, setSearchStringClient] = useState<string>("");

  const { data: clientData } = getClient(
    {
      limit,
      offset,
      searchString: searchStringClient,
    },
    searchStringClient.length === 3
  );

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<InvoiceListFormType>();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(
        _.orderBy(Object.values(fYearData), ["finYear"], ["desc"])
      );
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    invoiceListFormFields.fYearField.config.options = options;
  }

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(_.orderBy(Object.values(cityData), ["cityName"], ["asc"]));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    let allDataObj: any = {
      value: -1,
      label: "All",
    };
    options.unshift(allDataObj);
    invoiceListFormFields.cityField.config.options = options;
  }

  useEffect(() => {
    if (clientData) {
      setClientOptions(
        _.orderBy(Object.values(clientData.data), ["clientName"], ["asc"])
      );
    }
  }, [clientData]);

  if (clientOptions) {
    let options = selectOptionsMaker(clientOptions, "clientId", "clientName");
    invoiceListFormFields.clientField.config.options = options;
  }

  // const getCityIdHandler = (data: any) => {
  //   console.log(data);
  //   if (data) {
  //     setCityId(data.value);
  //   }
  // };

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
    setValue("allClientDatewise", "all");
  }, []);

  const columns: ColumnDef<InvoiceListType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },

    {
      accessorFn: (row) => row.invoiceNo,
      id: "invoiceNo",
      cell: (info) => info.getValue(),
      header: () => <>Invoice No</>,
    },
    {
      accessorFn: (row) => row.invoiceDate,
      id: "invoiceDate",
      cell: (info) => info.getValue(),
      header: () => <>Invoice Date</>,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      accessorFn: (row) => row.billAmount,
      id: "billAmount",
      cell: (info) => info.getValue(),
      header: () => <>Bill Amount</>,
    },
    {
      accessorFn: (row) => row.discountAmount,
      id: "discountAmount",
      cell: (info) => info.getValue(),
      header: () => <>Dis Amt</>,
    },
    {
      accessorFn: (row) => row.subTotal,
      id: "subTotal",
      cell: (info) => info.getValue(),
      header: () => <>Sub Total</>,
    },
    {
      accessorFn: (row) => row.total,
      id: "Client Name",
      cell: (info) => info.getValue(),
      header: () => <>Total</>,
    },
    {
      accessorFn: (row) => row.igstAmount,
      id: "igstAmount",
      cell: (info) => info.getValue(),
      header: () => <>IGST Amount</>,
    },
    {
      accessorFn: (row) => row.sgstAmount,
      id: "sgstAmount",
      cell: (info) => info.getValue(),
      header: () => <>SGST Amount</>,
    },
    {
      accessorFn: (row) => row.cgstAmount,
      id: "cgstAmount",
      cell: (info) => info.getValue(),
      header: () => <>CGST Amount</>,
    },
    {
      accessorFn: (row) => row.total,
      id: "total",
      cell: (info) => info.getValue(),
      header: () => <>Total</>,
    },
    {
      // accessorFn: (row) => row,
      id: "cgstAmount",
      cell: (info) => info.getValue(),
      header: () => <>Country ID</>,
    },
    {
      accessorFn: (row) => row.currencyId,
      id: "currencyId",
      cell: (info) => info.getValue(),
      header: () => <>Currency ID</>,
    },
    {
      accessorFn: (row) => row.currencyName,
      id: "currencyName",
      cell: (info) => info.getValue(),
      header: () => <>Currency Name</>,
    },
    {
      accessorFn: (row) => row.oldFormat,
      id: "oldFormat",
      cell: (info) => info.getValue(),
      header: () => <>OLD Formate</>,
    },
    {
      // accessorFn: (row) => row.s,
      id: "cgstAmount",
      cell: (info) => info.getValue(),
      header: () => <>Segment ID</>,
    },
    {
      // accessorFn: (row) => row.s,
      id: "cgstAmount",
      cell: (info) => info.getValue(),
      header: () => <>Segment Name</>,
    },
    {
      accessorFn: (row) => row.cgstPer,
      id: "cgstPer",
      cell: (info) => info.getValue(),
      header: () => <>CGST Per</>,
    },
    {
      accessorFn: (row) => row.sgstPer,
      id: "sgstPer",
      cell: (info) => info.getValue(),
      header: () => <>SGST Per</>,
    },
    {
      accessorFn: (row) => row.igstPer,
      id: "igstPer",
      cell: (info) => info.getValue(),
      header: () => <>IGST Per</>,
    },
    {
      // accessorFn: (row) => row.gs,
      id: "gst",
      cell: (info) => info.getValue(),
      header: () => <>GST</>,
    },
    {
      // accessorFn: (row) => row.gs,
      id: "gstyn",
      cell: (info) => info.getValue(),
      header: () => <>GSTYN</>,
    },
  ];

  const tableConfig: TableType<InvoiceListType> = {
    config: {
      tableName: "Invocie List",
      columns: columns,
      tableData: invoiceList,
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

  const clientOnInputChangeHandler = (clientInputValue: any) => {
    if (clientInputValue.length === 3) {
      setSearchStringClient(clientInputValue);
    }
    if (clientInputValue.length === 0) {
      setClientOptions([]);
      invoiceListFormFields.fYearField.config.options = [];
    }
  };

  const onSubmit = handleSubmit((data): void => {
    let reqObj: InvoiceListFormType = {
      clientId: data.clientId,
      startDate: data.startDate,
      endDate: data.endDate,
      fYear: data.fYear,
    };
    getInvoiceList(reqObj).then((data) => {
      if (data && data.length > 0) {
        console.log(data);
        setInvoiceList(data);
      }
    });
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
            <div className="col-md-3">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={invoiceListFormFields.fYearField}
              />
              {/* <NewRadio
                errors={errors}
                register={register}
                control={control}
                config={invoiceListFormFields.allClientDatewiseField}
                onChange={onChangeHandler}
              /> */}
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceListFormFields.fromDateField}
                  />
                </div>
                <div className="col-md-6 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={invoiceListFormFields.toDateField}
                  />
                </div>
                <div className="col-md-6 col-xs-12">
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={invoiceListFormFields.cityField}
                    // onChange={getCityIdHandler}
                  />

                  {/* <div className="col-md-14 col-xs-12 text-right">
                      <Button
                        type="button"
                        className={"btn btn-danger btn-sm "}
                      >
                        Get
                      </Button>
                    </div> */}
                </div>
                <div className="col-md-6 col-xs-12">
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={invoiceListFormFields.clientField}
                    onInputChange={clientOnInputChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                {/* <div className="col-md-4">
                    <NewCheckbox
                      errors={errors}
                      register={register}
                      control={control}
                      config={invoiceListFormFields.bobField}
                    />
                  </div> */}

                <div className="mb-2">
                  <div className="col-md-14 col-xs-12 ">
                    <Button type="submit" className={"btn btn-danger btn-sm"}>
                      Refresh/View
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="col-md-12 col-xs-12">
              <div className="card-body">
                <Table config={tableConfig.config} />
              </div>
            </div>
          </div>
        </BorderLayout>
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
      </form>
    </Card>
  );
};
