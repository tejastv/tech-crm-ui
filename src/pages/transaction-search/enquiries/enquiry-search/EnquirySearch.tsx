// CompanyMaster.tsx
import React from "react";

import {
  BorderLayout,
  Button,
  Input,
  Loader,
  PageBreadcrumb,
  Select,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import {
  AddUpdateEnquiryType,
  AllEnquiriesType,
  addEnquirySearchFormFields,
  useAllEnquiriesApiCallHook,
} from "@transaction-search/index";

export const EnquirySearch: React.FC = () => {
  const { getEnquiries, deleteEnquiryMutation } = useAllEnquiriesApiCallHook();
  const { data: enquiriesData, isLoading } = getEnquiries();
  const { mutateAsync: deleteEnquiry } = deleteEnquiryMutation();

  const navigate = useNavigate();
  const methods = useForm<AddUpdateEnquiryType>();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Enquiry Details",
      buttons: [],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<AllEnquiriesType>[] = [
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
    {
      id: "selectall",
      cell: (info) => info.getValue(),
      header: () => <>Select All</>,
    },
    {
      accessorFn: (row) => row.financialYear,
      id: "financialYear",
      cell: (info) => info.getValue(),
      header: () => <>Year</>,
    },
    {
      accessorFn: (row) => row.refNo,
      id: "refNo",
      cell: (info) => info.getValue(),
      header: () => <>Ref.no</>,
    },
    {
      accessorFn: (row) => row.recdDate,
      id: "recdDate",
      cell: (info) => info.getValue(),
      header: () => <>Enq.Date</>,
    },
    {
      accessorFn: (row) => row.reportDate,
      id: "reportDate",
      cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
    },
    {
      accessorFn: (row) => row.companyName,
      id: "companyName",
      cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      accessorFn: (row) => row.givenAddress,
      id: "givenAddress",
      cell: (info) => info.getValue(),
      header: () => <>Given Address</>,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.zip,
      id: "zip",
      cell: (info) => info.getValue(),
      header: () => <>Zip</>,
    },
    {
      accessorFn: (row) => row.stateName,
      id: "stateName",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      accessorFn: (row) => row.phone,
      id: "phone",
      cell: (info) => info.getValue(),
      header: () => <>Phone</>,
    },
    {
      accessorFn: (row) => row.fax,
      id: "fax",
      cell: (info) => info.getValue(),
      header: () => <>Fax</>,
    },
    {
      accessorFn: (row) => row.email,
      id: "email",
      cell: (info) => info.getValue(),
      header: () => <>Email</>,
    },
    {
      accessorFn: (row) => row.website,
      id: "website",
      cell: (info) => info.getValue(),
      header: () => <>Website</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Contact Person</>,
    },
    {
      accessorFn: (row) => row.designation,
      id: "designation",
      cell: (info) => info.getValue(),
      header: () => <>Designation</>,
    },
    {
      accessorFn: (row) => row.bankers,
      id: "bankers",
      cell: (info) => info.getValue(),
      header: () => <>Bankers</>,
    },
    {
      accessorFn: (row) => row.notes,
      id: "notes",
      cell: (info) => info.getValue(),
      header: () => <>Notes</>,
    },
    {
      accessorFn: (row) => row.sourceName,
      id: "sourceName",
      cell: (info) => info.getValue(),
      header: () => <>Source</>,
    },
    {
      accessorFn: (row) => row.enquiryStatus,
      id: "enquiryStatus",
      cell: (info) => info.getValue(),
      header: () => <>Enq.Status</>,
    },
    {
      accessorFn: (row) => row.localSourceId,
      id: "localSource",
      cell: (info) => info.getValue(),
      header: () => <>Local Source</>,
    },
    {
      accessorFn: (row) => row.clientRefNo,
      id: "clientref",
      cell: (info) => info.getValue(),
      header: () => <>Client Ref.</>,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>client</>,
    },
    {
      accessorFn: (row) => row.clientAddress,
      id: "clientAddress",
      cell: (info) => info.getValue(),
      header: () => <>Client Address</>,
    },
    {
      accessorFn: (row) => row.clientCityName,
      id: "clientCityName",
      cell: (info) => info.getValue(),
      header: () => <>Client City</>,
    },
    {
      accessorFn: (row) => row.clientZip,
      id: "clientZip",
      cell: (info) => info.getValue(),
      header: () => <>Client Zip</>,
    },
    {
      accessorFn: (row) => row.clientState,
      id: "clientState",
      cell: (info) => info.getValue(),
      header: () => <>Client State</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Client Country</>,
    },
    {
      accessorFn: (row) => row.clientPhone,
      id: "clientPhone",
      cell: (info) => info.getValue(),
      header: () => <>Client Phone</>,
    },
    {
      accessorFn: (row) => row.clientFax,
      id: "clientFax",
      cell: (info) => info.getValue(),
      header: () => <>Client Fax</>,
    },
    {
      accessorFn: (row) => row.clientContactPerson,
      id: "clientContactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Client Contact Person</>,
    },
    {
      accessorFn: (row) => row.clientDesignation,
      id: "clientDesignation",
      cell: (info) => info.getValue(),
      header: () => <>Client Designation</>,
    },
    {
      accessorFn: (row) => row.printStatus,
      id: "printStatus",
      cell: (info) => info.getValue(),
      header: () => <>Client Print Status</>,
    },
    {
      accessorFn: (row) => row.dueDate,
      id: "dueDate",
      cell: (info) => info.getValue(),
      header: () => <>Due on</>,
    },
    {
      accessorFn: (row) => row.serviceTypeName,
      id: "serviceTypeName",
      cell: (info) => info.getValue(),
      header: () => <>Service Type </>,
    },
    {
      accessorFn: (row) => row.executiveName,
      id: "executiveName",
      cell: (info) => info.getValue(),
      header: () => <>Executive</>,
    },
    {
      accessorFn: (row) => row.requestNo,
      id: "requestNo",
      cell: (info) => info.getValue(),
      header: () => <>Request No</>,
    },
    {
      accessorFn: (row) => row.instruction,
      id: "instruction",
      cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
    {
      accessorFn: (row) => row.reportFilename,
      id: "reportFilename",
      cell: (info) => info.getValue(),
      header: () => <>Report Filename</>,
    },
    {
      accessorFn: (row) => row.groupName,
      id: "groupName",
      cell: (info) => info.getValue(),
      header: () => <>Group Name</>,
    },
    {
      accessorFn: (row) => row.reportPrice,
      id: "reportPrice",
      cell: (info) => info.getValue(),
      header: () => <>Report Price</>,
    },
    {
      accessorFn: (row) => row.reportComission,
      id: "reportComission",
      cell: (info) => info.getValue(),
      header: () => <>Report commission</>,
    },
    {
      accessorFn: (row) => row.typeofEnquiry,
      id: "typeofEnquiry",
      cell: (info) => info.getValue(),
      header: () => <>Type Of Enquiry</>,
    },
    {
      accessorFn: (row) => row.noteForComission,
      id: "noteForComission",
      cell: (info) => info.getValue(),
      header: () => <>Note For commission</>,
    },
    {
      accessorFn: (row) => row.disPer,
      id: "disPer",
      cell: (info) => info.getValue(),
      header: () => <>Dis Per</>,
    },
    {
      accessorFn: (row) => row.discount,
      id: "discount",
      cell: (info) => info.getValue(),
      header: () => <>Discount</>,
    },
    {
      accessorFn: (row) => row.adjustment,
      id: "adjustment",
      cell: (info) => info.getValue(),
      header: () => <>Adjustment</>,
    },
    {
      accessorFn: (row) => row.disType,
      id: "disType",
      cell: (info) => info.getValue(),
      header: () => <>DisType</>,
    },
    {
      accessorFn: (row) => row.clientEmail,
      id: "clientEmail",
      cell: (info) => info.getValue(),
      header: () => <>Client Email</>,
    },
    {
      accessorFn: (row) => row.enteredDate,
      id: "enteredDate",
      cell: (info) => info.getValue(),
      header: () => <>EnteredDate</>,
    },
    {
      accessorFn: (row) => row.modifiedDate,
      id: "modifiedDate",
      cell: (info) => info.getValue(),
      header: () => <>ModifiedDate</>,
    },
    {
      accessorFn: (row) => row.modifiedBy,
      id: "modifiedBy",
      cell: (info) => info.getValue(),
      header: () => <>ModifiedByUser</>,
    },
    {
      accessorFn: (row) => row.actualBuyerId,
      id: "actualBuyerId",
      cell: (info) => info.getValue(),
      header: () => <>ActualBuyerId</>,
    },
    {
      accessorFn: (row) => row.partyName,
      id: "partyName",
      cell: (info) => info.getValue(),
      header: () => <>PartyName</>,
    },
    {
      accessorFn: (row) => row.siteStatus,
      id: "siteStatus",
      cell: (info) => info.getValue(),
      header: () => <>Site status</>,
    },
    {
      accessorFn: (row) => row.remarks,
      id: "remarks",
      cell: (info) => info.getValue(),
      header: () => <>Remarks</>,
    },
    {
      accessorFn: (row) => row.clientPrice,
      id: "clientPrice",
      cell: (info) => info.getValue(),
      header: () => <>Cli Price</>,
    },
    {
      accessorFn: (row) => row.bankers,
      id: "groupPrice",
      cell: (info) => info.getValue(),
      header: () => <>Group Price</>,
    },
  ];

  const deleteCompanyClick = (enquiriesData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteEnquiry(enquiriesData.companyId);
    }
  };

  const editCompanyClick = (enquiriesData: any) => {
    console.log(enquiriesData);
    navigate(COMMON_ROUTES.EDIT.replace(":id", enquiriesData.companyId));
  };

  const tableConfig: TableType<AllEnquiriesType> = {
    config: {
      tableName: "Enqury Search",
      columns: columns,
      tableData: enquiriesData || [],
      copyBtn: true,
      csvBtn: false,
      excelBtn: true,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: true,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
      },
      onDeleteClick: deleteCompanyClick,
      onEditClick: editCompanyClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <div className="col-12">
        <BorderLayout heading={config.borderLayoutConfig.heading}>
          <FormProvider {...methods}>
            <form noValidate autoComplete="off" className="p-t-20">
              <div className="row">
                {/* <div className="col-md-2 col-xs-12">
                  <div className="pull-left col-4 col-xs-12">
                    <a href="">
                      <img
                        src="assets/images/print_label.png"
                        height="50"
                        width="auto"
                        alt="print_label"
                      />
                    </a>
                    <a href="">
                      <img
                        src="assets/images/print_labels.png"
                        height="50"
                        width="auto"
                        alt="print_labels"
                      />
                    </a>
                  </div>
                </div> */}
                {/* <div className="pull-left col-3">
                  <Select config={addEnquirySearchFormFields.clientnameField.config} />
                  <Input config={addEnquirySearchFormFields.fromdateField.config} />
                  <Input config={addEnquirySearchFormFields.todateeField.config} />
                </div> */}
                {/* </div> */}
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addEnquirySearchFormFields.clientnameField.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Input
                    config={addEnquirySearchFormFields.fromdateField.config}
                  />
                </div>

                <div className="col-md-2 col-xs-12">
                  <Input
                    config={addEnquirySearchFormFields.todateeField.config}
                  />
                </div>

                <div className="col-md-2 col-xs-12 text-left">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i> Search
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>

          {!isLoading ? <Table config={tableConfig.config} /> : <Loader />}
        </BorderLayout>
      </div>
    </>
  );
};
