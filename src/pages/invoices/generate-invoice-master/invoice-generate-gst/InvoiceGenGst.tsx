import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  Table,
  TableType,
  NewSelect,
  NewDatePicker,
  IndeterminateCheckbox,
  NewInput,
} from "@shared/index";
import {
  EnqueryCalculatedDataType,
  InvoiceGenGstFormType,
  SaveInvoiceFormRequestType,
  invoiceGenGstFormFields,
  useInvoiceGenGstApiCallHook,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";
import {
  ClientType,
  FinYearType,
  useActualBuyerApiCallHook,
  useClientApiCallHook,
  useFinYearApiCallHook,
} from "@pages/master";
import {
  cleanupObject,
  formatDateString,
  selectOptionsMaker,
} from "@utils/index";
import { usePagination } from "@hooks/usePagination";

import { EnquiriesType } from "@transaction-search/index";
import _ from "lodash";

export const InvoiceGenerateGst: React.FC = () => {
  const {
    register: fetchEnqRegister,
    control: fetchEnqControl,
    handleSubmit: fetchEnqHandleSubmit,
    trigger,
    getValues,
    getFieldState,
    formState: { errors: fetchEnqErrors },
  } = useForm<InvoiceGenGstFormType>();

  const pdfBaseUrl = import.meta.env.VITE_BASE_URL_PDF;

  const {
    register: displayDataFieldRegister,
    // control: displayDataFieldControl,
    handleSubmit: saveInvoice,
    formState: { errors: displayDataFieldErrors },
    reset: displayDataFieldReset,
  } = useForm<EnqueryCalculatedDataType>();

  const { getFormatedFinYear } = useFinYearApiCallHook();
  const { getClient } = useClientApiCallHook();
  const { getActualBuyerBasedOnClientId } = useActualBuyerApiCallHook();
  const { getEnquires, getCalculatedDataBasedOnEnquires, saveInoice } =
    useInvoiceGenGstApiCallHook();
  type CalculateTotalObj = {
    finYear: string;
    actualBuyerId?: number;
    client_id: string;
    enqIds?: Array<number>;
  };
  const [finYearOptions, setFinYearOptions] = useState<FinYearType[]>();
  const [clientOptions, setClientOptions] = useState<ClientType[]>();
  const [clientId, setClientId] = useState<number>();
  const [searchStringClient, setSearchStringClient] = useState<string>("");
  const [requiredObjectToCalculateTotal, setRequiredObjectToCalculateTotal] =
    useState<CalculateTotalObj>({} as CalculateTotalObj);
  const [enquiresObj, setEnquiresObj] = useState<InvoiceGenGstFormType>(
    {} as InvoiceGenGstFormType
  );
  const [enquiryList, setEnquiryList] = useState<EnquiriesType[]>([]);
  const [selected, setSelected] = useState<EnquiriesType[]>([]);
  const { data: fYearData } = getFormatedFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(
        _.orderBy(Object.values(fYearData), ["finYear"], ["desc"])
      );
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    invoiceGenGstFormFields.fYearField.config.options = options;
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
    invoiceGenGstFormFields.client.config.options = options;
  }

  useEffect(() => {
    getActualBuyerBasedOnClientId(clientId && { client_id: clientId }).then(
      (actualBuyer) => {
        if (actualBuyer) {
          invoiceGenGstFormFields.actualBuyreField.config.options = actualBuyer;
        }
      }
    );
  }, [clientId]);

  useEffect(() => {
    getEnquires(enquiresObj).then((enquiries) => {
      if (enquiries && enquiries?.length > 0) {
        setEnquiryList(enquiries);
      }
    });
  }, [enquiresObj]);

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Invoice List",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Button",
    },
  };

  const columns = useMemo<ColumnDef<EnquiriesType>[]>(
    () => [
      {
        id: "srNo",
        cell: (info) => info.getValue(),
        header: () => <>SRNO</>,
      },
      {
        accessorFn: (row) => row.refNo,
        id: "refNo",
        cell: (info) => info.getValue(),
        header: () => <>Ref</>,
      },
      {
        accessorFn: (row) => row.clientRef,
        id: "clientRefNo",
        cell: (info) => info.getValue(),
        header: () => <>Client Ref No</>,
      },
      {
        accessorFn: (row) => row.recdDate,
        id: "recdDate",
        cell: (info) => info.getValue(),
        header: () => <>Order Date</>,
      },
      {
        accessorFn: (row) => row.companyName,
        id: "companyName",
        cell: (info) => info.getValue(),
        header: () => <>Company</>,
      },
      {
        accessorFn: (row) => row.countryName,
        id: "countryName",
        cell: (info) => info.getValue(),
        header: () => <>Country</>,
      },
      {
        accessorFn: (row) => row.creditAmount,
        id: "creditAmount",
        cell: (info) => info.getValue(),
        header: () => <>Price</>,
      },
      {
        accessorFn: (row) => row.discount,
        id: "discount",
        cell: (info) => info.getValue(),
        header: () => <>Dis. </>,
      },
      {
        accessorFn: (row) => row.adjustment,
        id: "adjustment",
        cell: (info) => info.getValue(),
        header: () => <>Adjust</>,
      },
      {
        accessorFn: (row) => row.reportComission,
        id: "reportComission",
        cell: (info) => info.getValue(),
        header: () => <>Comm. </>,
      },
      {
        id: "Select all ",
        cell: ({ row }) => {
          return (
            <div className="px-1">
              <IndeterminateCheckbox
                {...{
                  checked: row.getIsSelected(),
                  disabled: !row.getCanSelect(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                }}
              />
            </div>
          );
        },
        header: ({ table }) => {
          return (
            <>
              Select all
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
            </>
          );
        },
      },
      {
        accessorFn: (row) => row.reportDate,
        id: "reportDate",
        cell: (info) => info.getValue(),
        header: () => <>Report Date</>,
      },
      {
        accessorFn: (row) => row.serviceTypeName,
        id: "serviceTypeName",
        cell: (info) => info.getValue(),
        header: () => <>Service</>,
      },
      {
        accessorFn: (row) => row.reportPrice,
        id: "reportPrice",
        cell: (info) => info.getValue(),
        header: () => <>Enq. Price</>,
      },
      {
        accessorFn: (row) => row.typeofEnquiry,
        id: "typeofEnquiry",
        cell: (info) => info.getValue(),
        header: () => <>E.Type</>,
      },
    ],
    []
  );

  const tableConfig: TableType<any> = {
    config: {
      tableName: "Invocie List",
      columns: columns,
      tableData: enquiryList,
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
      invoiceGenGstFormFields.client.config.options = [];
    }
  };

  const getClientValue = (clientId: number) => {
    if (clientId) {
      setClientId(clientId);
    }
  };

  useEffect(() => {
    setRequiredObjectToCalculateTotal((prevData) => {
      const updatedData = { ...prevData };
      selected.length > 0
        ? (updatedData.enqIds = selected.map((client) => client.enqId))
        : delete updatedData.enqIds;
      return updatedData;
    });
  }, [selected]);

  const mapEnqRequest = (enquiryForm: InvoiceGenGstFormType) => {
    let enqData: Partial<any> = {
      startDate: formatDateString(
        new Date(enquiryForm.startDate),
        "d-m-y",
        "-"
      ),
      endDate: formatDateString(new Date(enquiryForm.endDate), "d-m-y", "-"),
      clientId: enquiryForm.clientId.value,
      actualBuyerId: enquiryForm.actualBuyerId.value,
    };
    return cleanupObject(enqData);
  };

  const calculateHandler = fetchEnqHandleSubmit(() => {
    if (requiredObjectToCalculateTotal.enqIds == undefined) {
      alert("Please Select Enquiry");
      return;
    }
    getCalculatedDataBasedOnEnquires(requiredObjectToCalculateTotal).then(
      (data) => {
        if (data && Object.values(data).length > 0) {
          displayDataFieldReset(data);
        }
      }
    );
  });

  const onFetchEnquirySubmit = () => {
    Promise.all([
      trigger("clientId"),
      trigger("actualBuyerId"),
      trigger("startDate"),
      trigger("endDate"),
    ]).then(() => {
      if (
        !getFieldState("clientId").invalid &&
        !getFieldState("actualBuyerId").invalid &&
        !getFieldState("startDate").invalid &&
        !getFieldState("endDate").invalid
      ) {
        let formValue = getValues();
        setEnquiresObj(mapEnqRequest(formValue));
      }
    });
  };

  const saveApiCall = (flag: boolean) => {
    if (flag != null) {
      const onSaveInvoiceHandler = saveInvoice((data): void => {
        // console.log(data, requiredObjectToCalculateTotal);
        let reqObj: SaveInvoiceFormRequestType = {
          invoiceMasterDto: {
            invoiceNo: data.invoiceNo,
            invoiceDate: new Date().toISOString(),
            clientId: requiredObjectToCalculateTotal.client_id,
            billAmt: data.amount,
            subTotal: data.subTotal,
            total: data.total,
            currencyId: 0,
            serviceTax: 0,
            eduCess: 0,
            edCessAmt: 0,
            serviceTaxPer: 0,
            edCessPer: 0,
            lockedSTaxSubmitted: "s",
            oldFormat: "s",
            krishiCessPer: 0,
            krishiCessAmt: 0,
            actualBuyerId: requiredObjectToCalculateTotal.actualBuyerId,
            crDays: 0,
            locked: "s",
            disAmt: data.discount,
            stper: 0,
            stamt: 0,
            staxAmt: 0,
            cgstper: data.cgstPer,
            sgstper: data.sgstPer,
            igstper: data.igstPer,
            cgstamt: data.cgstAmount,
            sgstamt: data.sgstAmount,
            igstamt: data.igstAmount,
            fyear: requiredObjectToCalculateTotal.finYear,
          },
          enquiryId: requiredObjectToCalculateTotal.enqIds?.length
            ? requiredObjectToCalculateTotal.enqIds
            : [],
        };
        saveInoice(reqObj, flag != undefined && flag).then((data) => {
          if (data && Object.values(data).length > 0) {
            // console.log(data);
            if (flag) {
              let downloadUrl = `${pdfBaseUrl}${data.invoiceLink}`;
              window.open(`${downloadUrl}`);
            }
          }
        });
      });
      onSaveInvoiceHandler();
      trigger();
    }
  };

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
        <form id="fetchEnquiryForm" autoComplete="off" className="p-t-20">
          <div className="row">
            <div className="col-md-4">
              <NewSelect
                errors={fetchEnqErrors}
                register={fetchEnqRegister}
                control={fetchEnqControl}
                config={invoiceGenGstFormFields.client}
                onChange={(e) => {
                  getClientValue(e.value);
                  setRequiredObjectToCalculateTotal((prevData) => {
                    const updatedData = { ...prevData };
                    updatedData.client_id = e.value;
                    return updatedData;
                  });
                }}
                onInputChange={clientOnInputChangeHandler}
              />
            </div>
            <div className="col-md-4">
              <NewSelect
                errors={fetchEnqErrors}
                register={fetchEnqRegister}
                control={fetchEnqControl}
                config={invoiceGenGstFormFields.actualBuyreField}
                onChange={(e) =>
                  setRequiredObjectToCalculateTotal((prevData) => {
                    const updatedData = { ...prevData };
                    updatedData.actualBuyerId = e.value;
                    return updatedData;
                  })
                }
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
                    config={invoiceGenGstFormFields.fromDateField}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <NewDatePicker
                    errors={fetchEnqErrors}
                    register={fetchEnqRegister}
                    control={fetchEnqControl}
                    config={invoiceGenGstFormFields.toDateField}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Button
                    onClick={onFetchEnquirySubmit}
                    form={"fetchEnquiryForm"}
                    type="button"
                    className={"btn btn-danger btn-sm"}
                  >
                    Get Inquires
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <Table config={tableConfig.config} setSelectedRows={setSelected} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <NewSelect
              errors={fetchEnqErrors}
              register={fetchEnqRegister}
              control={fetchEnqControl}
              config={invoiceGenGstFormFields.fYearField}
              onChange={(e) =>
                setRequiredObjectToCalculateTotal((prevData) => {
                  const updatedData = { ...prevData };
                  updatedData.finYear = e.value;
                  return updatedData;
                })
              }
            />
          </div>
          <div className="col-md-3">
            <Button
              type="button"
              onClick={calculateHandler}
              className={"btn btn-danger btn-sm"}
            >
              Calculate
            </Button>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="row">
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.invoiceNoField}
            />
          </div>
          {/* <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.dateField}
            />
          </div> */}
        </div>
        <div className="row">
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.amountField}
            />
          </div>
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
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
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.subtotalField}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.cgstField}
            />
          </div>
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.cgstPerField}
            />
          </div>
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.sgstField}
            />
          </div>
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.sGstPerField}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.igstField}
            />
          </div>
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.iGstPerField}
            />
          </div>
          <div className="col-3"></div>
          <div className="col-3">
            <NewInput
              errors={displayDataFieldErrors}
              register={displayDataFieldRegister}
              config={invoiceGenGstFormFields.totalField}
            />
          </div>
        </div>
      </BorderLayout>
      <BorderLayout heading={cardConfig.formActionsConfig.heading}>
        <div className="row justify-content-end">
          <div className="col-md-5 text-right">
            <Button
              type="button"
              onClick={() => {
                saveApiCall(false);
                // setIsPdfRequired(false);
              }}
              className={"btn btn-danger btn-sm mr-2"}
            >
              <i className="far fa-save"></i> Save Invoice
            </Button>
            <Button
              type="button"
              onClick={() => {
                saveApiCall(true);
                // setIsPdfRequired(true);
              }}
              className={"btn btn-danger btn-sm mr-2"}
            >
              <i className="far fa-save"></i> Save & Generate Invoice
            </Button>
            <Button type="button" className={"btn btn-danger btn-sm"}>
              <i className="far fa-window-close"></i> Cancel
            </Button>
          </div>
        </div>
      </BorderLayout>
    </Card>
  );
};
