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
} from "@shared/index";
import {
  enquiriesCountGraphViewFormFields,
  EnquiriesCountGraphViewType,
  EnquiryCountGraphViewType,
} from "@reports/index";

const cardConfig = {
  formLayoutConfig: {
    mainHeading: "No of Enquiry with Graph",
    heading: "Entry",
  },
  formListConfig: {
    heading: "List",
  },
  borderLayoutConfig: {
    heading: "Control Buttons",
  },
};

const firstTableColumns: ColumnDef<EnquiryCountGraphViewType>[] = [
  {
    id: "srNo1",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
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

const secondTableColumns: ColumnDef<EnquiryCountGraphViewType>[] = [
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

const firstTableConfig: TableType<EnquiryCountGraphViewType> = {
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

const secondTableConfig: TableType<EnquiryCountGraphViewType> = {
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

const thirdTableColumns: ColumnDef<EnquiryCountGraphViewType>[] = [
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
    accessorFn: (row) => row.year,
    id: "year3",
    cell: (info) => info.getValue(),
    header: () => <>Year</>,
  },
  {
    accessorFn: (row) => row.jan,
    id: "jan3",
    cell: (info) => info.getValue(),
    header: () => <>Jan</>,
  },
  {
    accessorFn: (row) => row.feb,
    id: "feb3",
    cell: (info) => info.getValue(),
    header: () => <>Feb</>,
  },
  {
    accessorFn: (row) => row.mar,
    id: "mar3",
    cell: (info) => info.getValue(),
    header: () => <>Mar</>,
  },
  {
    accessorFn: (row) => row.apr,
    id: "apr3",
    cell: (info) => info.getValue(),
    header: () => <>Apr</>,
  },
  {
    accessorFn: (row) => row.may,
    id: "may3",
    cell: (info) => info.getValue(),
    header: () => <>May</>,
  },
  {
    accessorFn: (row) => row.jun,
    id: "jun3",
    cell: (info) => info.getValue(),
    header: () => <>Jun</>,
  },
  {
    accessorFn: (row) => row.jul,
    id: "jul3",
    cell: (info) => info.getValue(),
    header: () => <>Jul</>,
  },
  {
    accessorFn: (row) => row.aug,
    id: "aug3",
    cell: (info) => info.getValue(),
    header: () => <>Aug</>,
  },
  {
    accessorFn: (row) => row.sep,
    id: "sep3",
    cell: (info) => info.getValue(),
    header: () => <>Sep</>,
  },
  {
    accessorFn: (row) => row.oct,
    id: "oct3",
    cell: (info) => info.getValue(),
    header: () => <>Oct</>,
  },
  {
    accessorFn: (row) => row.nov,
    id: "nov3",
    cell: (info) => info.getValue(),
    header: () => <>Nov</>,
  },
  {
    accessorFn: (row) => row.dec,
    id: "dec3",
    cell: (info) => info.getValue(),
    header: () => <>Dec</>,
  },
  {
    accessorFn: (row) => row.total,
    id: "total3",
    cell: (info) => info.getValue(),
    header: () => <>Total</>,
  },
];

const thirdTableConfig: TableType<EnquiryCountGraphViewType> = {
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

export const EnquiriesCountGraphView: React.FC = () => {
  const methods = useForm<EnquiriesCountGraphViewType>();

  const onSubmit = methods.handleSubmit((enquiryData): void => {
    console.log("Enquiries Count Graph View submitted.", enquiryData);
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
                  config={enquiriesCountGraphViewFormFields.city.config}
                  // onChangeHandler={companyOnChangeHandler}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col">
                    <Select
                      config={enquiriesCountGraphViewFormFields.client.config}
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
                  config={enquiriesCountGraphViewFormFields.year.config}
                />

                <SingleCheckbox
                  config={enquiriesCountGraphViewFormFields.selectAll.config}
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
                  config={enquiriesCountGraphViewFormFields.selectAll.config}
                />
                <Checkbox
                  config={enquiriesCountGraphViewFormFields.month.config}
                />
              </div>
              <div className="col-4 ex1" />
              <div className="col-6 ex1">
                <Table config={thirdTableConfig.config}>
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
