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
  NewDatePicker,
} from "@shared/index";
import { InvoiceListType, invoiceGenGstFormFields } from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";
import {
  ActualBuyerType,
  ClientType,
  FinYearType,
  useActualBuyerApiCallHook,
  useClientApiCallHook,
  useFinYearApiCallHook,
} from "@pages/master";
import { selectOptionsMaker } from "@utils/index";
import { usePagination } from "@hooks/usePagination";
import { fetchEnquiryFormFields } from "./invoiceGenGstFormFields";
import { useEnquiriesApiCallHook } from "@pages/transaction-search";

export const InvoiceGenerateGst: React.FC = () => {
  const {
    register: fetchEnqRegister,
    control: fetchEnqControl,
    handleSubmit: fetchEnqHandleSubmit,
    formState: { errors: fetchEnqErrors },
  } = useForm<any>();

  const { getFinYear } = useFinYearApiCallHook();
  const { getClient } = useClientApiCallHook();
  const { getActualBuyer, getActualBuyerBasedOnClientId } =
    useActualBuyerApiCallHook();
  const { getEnquiries } = useEnquiriesApiCallHook();

  const [finYearOptions, setFinYearOptions] = useState<FinYearType[]>();
  const [clientOptions, setClientOptions] = useState<ClientType[]>();
  const [clientId, setClientId] = useState<number>(-2);
  const [actualBuyerOptions, setActualBuyerOptions] =
    useState<ActualBuyerType[]>();
  const [searchStringClient, setSearchStringClient] = useState<string>("");

  const [enquiryList, setEnquiryList] = useState<any>();
  const [fetchEnqFormData, setFetchEnqFormData] = useState<any>();

  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(Object.values(fYearData));
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    fetchEnquiryFormFields.fYearField.config.options = options;
  }

  const { limit, offset } = usePagination();

  const { data: clientData } = getClient(
    {
      limit,
      offset,
      searchString: searchStringClient,
    },
    searchStringClient.length === 3
  );

  useEffect(() => {
    if (clientData?.data) {
      setClientOptions(Object.values(clientData.data));
    }
  }, [clientData?.data]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientId", "clientName");
    fetchEnquiryFormFields.client.config.options = options;
  }

  useEffect(() => {
    getActualBuyerBasedOnClientId({ client_id: clientId }).then(
      (actualBuyer) => {
        if (actualBuyer) {
          setActualBuyerOptions(actualBuyer);
        }
      }
    );
  }, [clientId]);

  if (actualBuyerOptions?.length) {
    let options = selectOptionsMaker(
      actualBuyerOptions,
      "partyId",
      "partyName"
    );
    fetchEnquiryFormFields.actualBuyreField.config.options = options;
  }

  // const { data: enquiryData } = getEnquiries(
  //   fetchEnqFormData,
  //   fetchEnqFormData != undefined
  // );

  // useEffect(() => {
  //   setEnquiryList(enquiryData);
  // }, [enquiryData]);

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

  const onFetchEnquirySubmit = fetchEnqHandleSubmit((data): void => {
    // setFetchEnqFormData({
    //   clientId: data.client.value,
    // });

    console.log("value", data);
  });

  const clientOnInputChangeHandler = (clientInputValue: any) => {
    if (clientInputValue.length === 3) {
      setSearchStringClient(clientInputValue);
    }
    if (clientInputValue.length === 0) {
      setClientOptions([]);
      fetchEnquiryFormFields.client.config.options = [];
    }
  };

  const getClientValue = (clientId: number) => {
    if (clientId) {
      setClientId(clientId);
    }
  };

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
        <>
          <form
            onSubmit={onFetchEnquirySubmit}
            id="fetchEnquiryForm"
            autoComplete="off"
            className="p-t-20"
          >
            <div className="row">
              <div className="col-md-4">
                <NewSelect
                  errors={fetchEnqErrors}
                  register={fetchEnqRegister}
                  control={fetchEnqControl}
                  config={fetchEnquiryFormFields.fYearField}
                />
              </div>
              <div className="col-md-4">
                <NewSelect
                  errors={fetchEnqErrors}
                  register={fetchEnqRegister}
                  control={fetchEnqControl}
                  config={fetchEnquiryFormFields.client}
                  onChange={(e) => {
                    getClientValue(e.value);
                  }}
                  onInputChange={clientOnInputChangeHandler}
                />
              </div>
              <div className="col-md-4">
                <NewSelect
                  errors={fetchEnqErrors}
                  register={fetchEnqRegister}
                  control={fetchEnqControl}
                  config={fetchEnquiryFormFields.actualBuyreField}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4 col-xs-12">
                    <NewDatePicker
                      errors={fetchEnqErrors}
                      control={fetchEnqControl}
                      register={fetchEnqRegister}
                      config={fetchEnquiryFormFields.fromDateField}
                    />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <NewDatePicker
                      errors={fetchEnqErrors}
                      register={fetchEnqRegister}
                      control={fetchEnqControl}
                      config={fetchEnquiryFormFields.toDateField}
                    />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <Button
                      form={"fetchEnquiryForm"}
                      type="submit"
                      className={"btn btn-danger btn-sm"}
                    >
                      Get Inquires
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* <div className="row">
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
            </div> */}
        </>
      </BorderLayout>
      {/* <div className="card-body">
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          
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
      </div> */}
    </Card>
  );
};
