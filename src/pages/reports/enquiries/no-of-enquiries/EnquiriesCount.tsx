import { FormProvider, useForm } from "react-hook-form";

import {
  Card,
  BorderLayout,
  Select,
  Button,
  Table,
  TableType,
} from "@shared/index";
import { enquiriesCountFormFields, EnquiriesCountType } from "@reports/index";
import { EnquiryType } from "@reports/index";
import { ColumnDef } from "@tanstack/react-table";

const cardConfig = {
  formLayoutConfig: {
    mainHeading: "Enquiry Details",
    heading: "Entry",
  },
  formListConfig: {
    heading: "List",
  },
  borderLayoutConfig: {
    heading: "Control Buttons",
  },
};

const columns: ColumnDef<EnquiryType>[] = [
  {
    id: "srNo",
    cell: (info) => info.getValue(),
    header: () => <>Sr.No</>,
  },
  {
    accessorFn: (row) => row.clientName,
    id: "clientName",
    cell: (info) => info.getValue(),
    header: () => <>Client Name</>,
  },
  {
    accessorFn: (row) => row.countryName,
    id: "countryName",
    cell: (info) => info.getValue(),
    header: () => <>Country</>,
  },
  {
    accessorFn: (row) => row.price,
    id: "price",
    cell: (info) => info.getValue(),
    header: () => <>Price</>,
  },
  {
    accessorFn: (row) => row.rowTotal,
    id: "rowTotal",
    cell: (info) => info.getValue(),
    header: () => <>Row Total</>,
  },
];

const tableConfig: TableType<EnquiryType> = {
  config: {
    tableName: "Company Master",
    columns: columns,
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

export const EnquiriesCount: React.FC = () => {
  const methods = useForm<EnquiriesCountType>();

  const onSubmit = methods.handleSubmit((enquiryData): void => {
    console.log("Enquiries Count submitted.", enquiryData);
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
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <Select
                      config={enquiriesCountFormFields.month.config}
                      // onChangeHandler={companyOnChangeHandler}
                    />
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <Select
                      config={enquiriesCountFormFields.year.config}
                      // onChangeHandler={companyOnChangeHandler}
                    />
                  </div>
                  <div className="col-12">
                    <Select
                      config={enquiriesCountFormFields.country.config}
                      // onChangeHandler={companyOnChangeHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <Select
                  config={enquiriesCountFormFields.city.config}
                  // onChangeHandler={companyOnChangeHandler}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col">
                    <Select
                      config={enquiriesCountFormFields.client.config}
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
            <Table config={tableConfig.config}>
              {/* {isLoading && <Loader />} */}
            </Table>
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
