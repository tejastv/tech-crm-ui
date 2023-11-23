import { FormProvider, useForm } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";

import {
  Card,
  BorderLayout,
  Select,
  Button,
  Table,
  TableType,
  Checkbox,
  SingleCheckbox,
  Radio,
} from "@shared/index";
import {
  enquiriesCountGroupCountryWiseFormFields,
  EnquiriesCountGroupCountryWiseType,
  EnquiryCountGroupCountryWiseType,
} from "@reports/index";

const cardConfig = {
  formLayoutConfig: {
    mainHeading:
      "No of Enquiry with Graph - Group wise - Client wise - Country wise",
    heading: "Entry",
  },
  formListConfig: {
    heading: "List",
  },
  borderLayoutConfig: {
    heading: "Control Button",
  },
};

const firstTableColumns: ColumnDef<EnquiryCountGroupCountryWiseType>[] = [
  {
    id: "srNo1",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
  },
  {
    accessorFn: (row) => row.countryName,
    id: "country1",
    cell: (info) => info.getValue(),
    header: () => <>Country</>,
  },
  {
    accessorFn: (row) => row.monthYear,
    id: "monthYear1",
    cell: (info) => info.getValue(),
    header: () => <>Month/Year</>,
  },
  {
    accessorFn: (row) => row.count,
    id: "count1",
    cell: (info) => info.getValue(),
    header: () => <>Count</>,
  },
];

const secondTableColumns: ColumnDef<EnquiryCountGroupCountryWiseType>[] = [
  {
    id: "srNo2",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
  },
  {
    accessorFn: (row) => row.countryName,
    id: "country2",
    cell: (info) => info.getValue(),
    header: () => <>Country</>,
  },
  {
    accessorFn: (row) => row.year,
    id: "year2",
    cell: (info) => info.getValue(),
    header: () => <>Year</>,
  },
  {
    accessorFn: (row) => row.jan,
    id: "jan2",
    cell: (info) => info.getValue(),
    header: () => <>Jan</>,
  },
  {
    accessorFn: (row) => row.feb,
    id: "feb2",
    cell: (info) => info.getValue(),
    header: () => <>Feb</>,
  },
  {
    accessorFn: (row) => row.mar,
    id: "mar2",
    cell: (info) => info.getValue(),
    header: () => <>Mar</>,
  },
  {
    accessorFn: (row) => row.apr,
    id: "apr2",
    cell: (info) => info.getValue(),
    header: () => <>Apr</>,
  },
  {
    accessorFn: (row) => row.may,
    id: "may2",
    cell: (info) => info.getValue(),
    header: () => <>May</>,
  },
  {
    accessorFn: (row) => row.jun,
    id: "jun2",
    cell: (info) => info.getValue(),
    header: () => <>Jun</>,
  },
  {
    accessorFn: (row) => row.jul,
    id: "jul2",
    cell: (info) => info.getValue(),
    header: () => <>Jul</>,
  },
  {
    accessorFn: (row) => row.aug,
    id: "aug2",
    cell: (info) => info.getValue(),
    header: () => <>Aug</>,
  },
  {
    accessorFn: (row) => row.sep,
    id: "sep2",
    cell: (info) => info.getValue(),
    header: () => <>Sep</>,
  },
  {
    accessorFn: (row) => row.oct,
    id: "oct2",
    cell: (info) => info.getValue(),
    header: () => <>Oct</>,
  },
  {
    accessorFn: (row) => row.nov,
    id: "nov2",
    cell: (info) => info.getValue(),
    header: () => <>Nov</>,
  },
  {
    accessorFn: (row) => row.dec,
    id: "dec2",
    cell: (info) => info.getValue(),
    header: () => <>Dec</>,
  },
  {
    accessorFn: (row) => row.total,
    id: "total2",
    cell: (info) => info.getValue(),
    header: () => <>Total</>,
  },
];

const thirdTableColumns: ColumnDef<EnquiryCountGroupCountryWiseType>[] = [
  {
    id: "srNo3",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
  },
  {
    accessorFn: (row) => row.client,
    id: "client3",
    cell: (info) => info.getValue(),
    header: () => <>Client</>,
  },
  {
    accessorFn: (row) => row.countryName,
    id: "country3",
    cell: (info) => info.getValue(),
    header: () => <>Country</>,
  },
  {
    accessorFn: (row) => row.monthYear,
    id: "monthYear3",
    cell: (info) => info.getValue(),
    header: () => <>Month/Year</>,
  },
  {
    accessorFn: (row) => row.count,
    id: "count3",
    cell: (info) => info.getValue(),
    header: () => <>Count</>,
  },
];

const fourthTableColumns: ColumnDef<EnquiryCountGroupCountryWiseType>[] = [
  {
    id: "srNo4",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
  },
  {
    accessorFn: (row) => row.client,
    id: "client4",
    cell: (info) => info.getValue(),
    header: () => <>Client</>,
  },
  {
    accessorFn: (row) => row.countryName,
    id: "country4",
    cell: (info) => info.getValue(),
    header: () => <>Country</>,
  },
  {
    accessorFn: (row) => row.year,
    id: "year4",
    cell: (info) => info.getValue(),
    header: () => <>Year</>,
  },
  {
    accessorFn: (row) => row.jan,
    id: "jan4",
    cell: (info) => info.getValue(),
    header: () => <>Jan</>,
  },
  {
    accessorFn: (row) => row.feb,
    id: "feb4",
    cell: (info) => info.getValue(),
    header: () => <>Feb</>,
  },
  {
    accessorFn: (row) => row.mar,
    id: "mar4",
    cell: (info) => info.getValue(),
    header: () => <>Mar</>,
  },
  {
    accessorFn: (row) => row.apr,
    id: "apr4",
    cell: (info) => info.getValue(),
    header: () => <>Apr</>,
  },
  {
    accessorFn: (row) => row.may,
    id: "may4",
    cell: (info) => info.getValue(),
    header: () => <>May</>,
  },
  {
    accessorFn: (row) => row.jun,
    id: "jun4",
    cell: (info) => info.getValue(),
    header: () => <>Jun</>,
  },
  {
    accessorFn: (row) => row.jul,
    id: "jul4",
    cell: (info) => info.getValue(),
    header: () => <>Jul</>,
  },
  {
    accessorFn: (row) => row.aug,
    id: "aug4",
    cell: (info) => info.getValue(),
    header: () => <>Aug</>,
  },
  {
    accessorFn: (row) => row.sep,
    id: "sep4",
    cell: (info) => info.getValue(),
    header: () => <>Sep</>,
  },
  {
    accessorFn: (row) => row.oct,
    id: "oct4",
    cell: (info) => info.getValue(),
    header: () => <>Oct</>,
  },
  {
    accessorFn: (row) => row.nov,
    id: "nov4",
    cell: (info) => info.getValue(),
    header: () => <>Nov</>,
  },
  {
    accessorFn: (row) => row.dec,
    id: "dec4",
    cell: (info) => info.getValue(),
    header: () => <>Dec</>,
  },
  {
    accessorFn: (row) => row.total,
    id: "total4",
    cell: (info) => info.getValue(),
    header: () => <>Row Total</>,
  },
];

const fifthTableColumns: ColumnDef<EnquiryCountGroupCountryWiseType>[] = [
  {
    id: "srNo5",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
  },
  {
    accessorFn: (row) => row.client,
    id: "client5",
    cell: (info) => info.getValue(),
    header: () => <>Client Name</>,
  },
  {
    accessorFn: (row) => row.total,
    id: "total5",
    cell: (info) => info.getValue(),
    header: () => <>Total</>,
  },
];

const firstTableConfig: TableType<EnquiryCountGroupCountryWiseType> = {
  config: {
    tableName: "First Table",
    columns: firstTableColumns,
    tableData: [],
    // tableData: companyData ? companyData : [],
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
    // onDeleteClick: deleteCompanyClick,
    // onEditClick: editCompanyClick,
  },
};

const secondTableConfig: TableType<EnquiryCountGroupCountryWiseType> = {
  config: {
    tableName: "Second Table",
    columns: secondTableColumns,
    tableData: [],
    // tableData: companyData ? companyData : [],
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
    // onDeleteClick: deleteCompanyClick,
    // onEditClick: editCompanyClick,
  },
};

const thirdTableConfig: TableType<EnquiryCountGroupCountryWiseType> = {
  config: {
    tableName: "Third Table",
    columns: thirdTableColumns,
    tableData: [],
    // tableData: companyData ? companyData : [],
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
    // onDeleteClick: deleteCompanyClick,
    // onEditClick: editCompanyClick,
  },
};

const fourthTableConfig: TableType<EnquiryCountGroupCountryWiseType> = {
  config: {
    tableName: "Fourth Table",
    columns: fourthTableColumns,
    tableData: [],
    // tableData: companyData ? companyData : [],\

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
    // onDeleteClick: deleteCompanyClick,
    // onEditClick: editCompanyClick,
  },
};

const fifthTableConfig: TableType<EnquiryCountGroupCountryWiseType> = {
  config: {
    tableName: "Fifth Table",
    columns: fifthTableColumns,
    tableData: [],
    // tableData: companyData ? companyData : [],
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
    // onDeleteClick: deleteCompanyClick,
    // onEditClick: editCompanyClick,
  },
};

export const EnquiriesCountGroupCountryWise: React.FC = () => {
  const methods = useForm<EnquiriesCountGroupCountryWiseType>();

  const onSubmit = methods.handleSubmit((enquiryData): void => {
    console.log("Enquiries Count Group Country Wise submitted.", enquiryData);
  });

  return (
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
              <div className="col-md-4 col-xs-12">
                <Select
                  config={enquiriesCountGroupCountryWiseFormFields.group.config}
                  // onChangeHandler={companyOnChangeHandler}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select
                  config={enquiriesCountGroupCountryWiseFormFields.city.config}
                  // onChangeHandler={companyOnChangeHandler}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col">
                    <Select
                      config={
                        enquiriesCountGroupCountryWiseFormFields.client.config
                      }
                      // onChangeHandler={companyOnChangeHandler}
                    />
                  </div>
                  <div className="col-auto">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      Refresh/View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </BorderLayout>
          <BorderLayout heading={cardConfig.formListConfig.heading}>
            <div className="row">
              <div className="col-2 ex1">
                <Checkbox
                  config={enquiriesCountGroupCountryWiseFormFields.year.config}
                />

                <SingleCheckbox
                  config={
                    enquiriesCountGroupCountryWiseFormFields.selectAll.config
                  }
                />

                <Button
                  type="button"
                  className="btn btn-danger  waves-effect waves-light mr-2 mb-2"
                  // onClick={routeHandler}
                >
                  {" "}
                  Fill Month
                </Button>
              </div>
              <div className="col-4 ex1">
                <Table config={firstTableConfig.config}>
                  {/* {isLoading && <Loader />} */}
                </Table>
              </div>
              <div className="col-6 ex1">
                <Table config={secondTableConfig.config}>
                  {/* {isLoading && <Loader />} */}
                </Table>
                <div className="float-right">
                  <Button
                    type="button"
                    className="btn btn-danger  waves-effect waves-light mr-2"
                    // onClick={routeHandler}
                  >
                    <i className="far fa-save pr-1"></i> Export
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 ex1">
                <SingleCheckbox
                  config={
                    enquiriesCountGroupCountryWiseFormFields.selectAll.config
                  }
                />
                <Checkbox
                  config={enquiriesCountGroupCountryWiseFormFields.month.config}
                />
              </div>
              <div className="col-4 ex1">
                <Table config={thirdTableConfig.config}>
                  {/* {isLoading && <Loader />} */}
                </Table>
              </div>
              <div className="col-6 ex1">
                <Table config={fourthTableConfig.config}>
                  {/* {isLoading && <Loader />} */}
                </Table>
                <div className="float-right">
                  <Button
                    type="button"
                    className="btn btn-danger  waves-effect waves-light mr-2"
                    // onClick={routeHandler}
                  >
                    <i className="far fa-save pr-1"></i> Export
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Table config={fifthTableConfig.config}>
                {/* {isLoading && <Loader />} */}
              </Table>
              <div className="float-right">
                <Button
                  type="button"
                  className="btn btn-danger  waves-effect waves-light mr-2"
                  // onClick={routeHandler}
                >
                  <i className="far fa-save pr-1"></i> Export
                </Button>
              </div>
            </div>
          </BorderLayout>
          <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
            <div className="text-center">
              <Button
                type="button"
                className="btn btn-danger  waves-effect waves-light mr-2"
                // onClick={routeHandler}
              >
                <i className="fas fa-file-export pr-1"></i> Export
              </Button>
              <Button
                type="button"
                className="btn btn-danger  waves-effect waves-light"
                // onClick={routeHandler}
              >
                <i className="fas fa-times-circle pr-1"></i> Cancel
              </Button>
            </div>
          </BorderLayout>
        </form>
      </FormProvider>
    </Card>
  );
};
