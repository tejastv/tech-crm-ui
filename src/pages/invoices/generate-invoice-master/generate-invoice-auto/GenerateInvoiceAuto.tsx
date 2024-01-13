import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  Table,
  TableType,
  NewRadio,
  NewDatePicker,
  NewSelect,
  Loader,
} from "@shared/index";
import {
  GenerateInvoiceAutoType,
  generateInvoiceAutoFormFields,
  useInvoiceGenAutoGstApiCallHook,
} from "@invoices/index";
import { ColumnDef } from "@tanstack/react-table";
import {
  cleanupObject,
  formatDateString,
  selectOptionsMaker,
} from "@utils/index";
import {
  EnquiriesType,
  FinYearType,
  useFinYearApiCallHook,
} from "@pages/master";
import _ from "lodash";
import { useToaster } from "@hooks/index";

export const InvoiceGenerateAuto: React.FC = () => {
  type GenerateAutoInvoicePostRequestType = {
    fyear: string;
    enqIds: Array<number>;
  };
  const [finYearOptions, setFinYearOptions] = useState<FinYearType[]>();
  const [enquiresObj, setEnquiresObj] = useState<GenerateInvoiceAutoType>(
    {} as GenerateInvoiceAutoType
  );
  const { successMessageToaster } = useToaster();
  const [
    requiredObjectToGetGenerateInvoiceAuto,
    setRequiredObjectToCallGenerateInvoiceAuto,
  ] = useState<GenerateAutoInvoicePostRequestType>(
    {} as GenerateAutoInvoicePostRequestType
  );
  const [enquiryList, setEnquiryList] = useState<EnquiriesType[]>([]);
  const { getFinYear } = useFinYearApiCallHook();
  const { getAllEnquires, postAllEnquiresToGenerateGst } =
    useInvoiceGenAutoGstApiCallHook();
  const {
    register: fetchEnqRegister,
    handleSubmit: fetchEnqHandleSubmit,
    control: fetchEnqControl,
    trigger,
    getValues,
    getFieldState,
    formState: { errors: fetchEnqErrors },
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

  const columns = useMemo<ColumnDef<EnquiriesType>[]>(
    () => [
      {
        id: "srNo",
        cell: (info) => info.getValue(),
        header: () => <>Sr. No</>,
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
        accessorFn: (row) => row.clientName,
        id: "clientName",
        cell: (info) => info.getValue(),
        header: () => <>Client Name</>,
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
      tableName: "Invoice List",
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

  const { data: fYearData } = getFinYear();
  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(
        _.orderBy(Object.values(fYearData), ["finYear"], ["desc"])
      );
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    generateInvoiceAutoFormFields.fYearField.config.options = options;
  }

  useEffect(() => {
    getAllEnquires(enquiresObj).then((enquiries) => {
      if (enquiries && enquiries?.length > 0) {
        setEnquiryList(enquiries);
      }
    });
  }, [enquiresObj]);

  const mapEnqRequest = (enquiryForm: GenerateInvoiceAutoType) => {
    let enqData: Partial<any> = {
      startDate: formatDateString(
        new Date(enquiryForm.startDate),
        "d-m-y",
        "-"
      ),
      endDate: formatDateString(new Date(enquiryForm.endDate), "d-m-y", "-"),
      type: enquiryForm.type === "A" ? "-1" : enquiryForm.type,
    };
    return cleanupObject(enqData);
  };

  const calculateHandler = fetchEnqHandleSubmit(() => {
    console.log(requiredObjectToGetGenerateInvoiceAuto)
    if (requiredObjectToGetGenerateInvoiceAuto.enqIds == undefined) {
      alert("Please Select Enquiry");
      return;
    }
    postAllEnquiresToGenerateGst(requiredObjectToGetGenerateInvoiceAuto).then(
      (data) => {
        console.log(data);
        successMessageToaster(data)
      }
    );
  });

  const onFetchEnquirySubmit = () => {
    Promise.all([
      trigger("startDate"),
      trigger("endDate"),
      trigger("type"),
    ]).then(() => {
      if (
        !getFieldState("startDate").invalid &&
        !getFieldState("endDate").invalid &&
        !getFieldState("type").invalid
      ) {
        let formValue = getValues();
        setEnquiresObj(mapEnqRequest(formValue));
      }
    });
  };

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        id="fetchEnquiryForm"
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <NewRadio
                errors={fetchEnqErrors}
                register={fetchEnqRegister}
                control={fetchEnqControl}
                config={generateInvoiceAutoFormFields.action}
              />
            </div>
            <div className="col-md-3 col-xs-12">
              <NewDatePicker
                errors={fetchEnqErrors}
                control={fetchEnqControl}
                register={fetchEnqRegister}
                config={generateInvoiceAutoFormFields.fromDateField}
              />
            </div>
            <div className="col-md-3 col-xs-12">
              <NewDatePicker
                errors={fetchEnqErrors}
                control={fetchEnqControl}
                register={fetchEnqRegister}
                config={generateInvoiceAutoFormFields.toDateField}
              />
            </div>
            <div className="col-md-3 col-xs-12">
              <Button
                type="button"
                onClick={onFetchEnquirySubmit}
                form={"fetchEnquiryForm"}
                className={"btn btn-danger btn-sm"}
              >
                Get Inquires
              </Button>
            </div>
            <BorderLayout heading={cardConfig.tableOneConfig.mainHeading}>
              {/* Table */}
              <div className="col-md-12 col-xs-12">
                <div className="card-body">
                  {/* <Table config={tableConfig.config}>null</Table> */}
                  <Table config={tableConfig.config}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <NewSelect
                    errors={fetchEnqErrors}
                    register={fetchEnqRegister}
                    control={fetchEnqControl}
                    config={generateInvoiceAutoFormFields.fYearField}
                    onChange={(e) =>
                      setRequiredObjectToCallGenerateInvoiceAuto((prevData) => {
                        const updatedData = { ...prevData };
                        updatedData.fyear = e.value;
                        updatedData.enqIds = enquiryList.map(
                          (enquiry: EnquiriesType) => enquiry.enqId
                        );
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
                    Generate
                  </Button>
                </div>
              </div>
            </BorderLayout>
            {/* <BorderLayout heading={cardConfig.tableTwoConfig.mainHeading}>
                <div className="col-md-12 col-xs-12">
                  <div className="card-body">
                    <Table config={tableTwoConfig.config}>null</Table>
                  </div>
                </div>
              </BorderLayout> */}
          </div>
        </BorderLayout>
      </form>
    </Card>
  );
};
