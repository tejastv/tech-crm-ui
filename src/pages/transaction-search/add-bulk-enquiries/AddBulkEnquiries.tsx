// CompanyMaster.tsx
import React from "react";

import {
  BorderLayout,
  Button,
  Input,
  InputWithText,
  Loader,
  PageBreadcrumb,
  Select,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import {
  AddUpdateClientType,
  CompanyType,
  useCompanyApiCallHook,
} from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { addBulkEnquiriesFormFields } from "@transaction-search/index";

export const AddBulkEnquiries: React.FC = () => {
  const { getCompany, deleteCompanyMutation } = useCompanyApiCallHook();
  const { data: companyData, isLoading } = getCompany();
  const { mutateAsync: deleteCompany } = deleteCompanyMutation();
  const navigate = useNavigate();
  const methods = useForm<AddUpdateClientType>();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Bulk Enquiries",
      buttons: [
        {
          btnTitle: "",
          btnRoute: "",
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CompanyType>[] = [
    {
      id: "selectall",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Bulk Enquiry Id</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "city",
      cell: (info) => info.getValue(),
      header: () => <>Client</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "Zip",
      cell: (info) => info.getValue(),
      header: () => <>Total Entries</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const deleteCompanyClick = (companyData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteCompany(companyData.companyId);
    }
  };

  const editCompanyClick = (companyData: any) => {
    console.log(companyData);
    navigate(COMMON_ROUTES.EDIT.replace(":id", companyData.companyId));
  };

  const tableConfig: TableType<CompanyType> = {
    config: {
      tableName: "Company Master",
      columns: columns,
      tableData: companyData ? companyData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
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
                <div className="col-md-5 col-xs-12">
                  <Select
                    config={addBulkEnquiriesFormFields.clientnameField.config}
                  />
                </div>
                <div className="col-md-5 col-xs-12">
                  <Input
                    config={addBulkEnquiriesFormFields.uploadfileField.config}
                  />
                  <div className="col-md-9">
                    <small className="text-center">
                      <InputWithText
                        config={
                          addBulkEnquiriesFormFields.uploadFilenote.config
                        }
                      />
                    </small>
                  </div>
                </div>
                <div className="col-md-2 col-xs-12 text-left">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Submit
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>

          <Table config={tableConfig.config}>{isLoading && <Loader />}</Table>
        </BorderLayout>
      </div>
    </>
  );
};
