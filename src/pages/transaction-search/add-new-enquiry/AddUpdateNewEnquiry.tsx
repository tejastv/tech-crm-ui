import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  Select,
  Button,
  InputWithText,
  ActionButtons,
  Table,
  TableType,
} from "@shared/index";
import { ClientType, addEnquiryFormFields } from "@transaction-search/index";
import { Link } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
// import {useStateApiCallHook } from "@pages/master";

export const AddEnquiry: React.FC = () => {
  // const { getState } = useStateApiCallHook();
  // const { data: stateData, isLoading } = getState();

  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Enquiry",
      heading: "Enquiry",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Action Button",
    },
  };


  const columns: ColumnDef<ClientType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      // accessorFn: (row) => row.stateCodeN,
      id: "Address",
      // cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
    {
      id: "Instruction",
      // cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
  ];

  const tableConfig: TableType<ClientType> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData : [],
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
    },
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log("value", data);
  });

  return (
    <>
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
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
            
                  <Input config={addEnquiryFormFields.companyenquiry.config} />
                  <Select config={addEnquiryFormFields.yearenquiry.config} />
                  <div className="col-md-4 col-xs-12">
                  <Input config={addEnquiryFormFields.refnoenquiry.config} />
                  <small className="enquirynote">
                    <InputWithText config={addEnquiryFormFields.refnote.config} />
                  </small>
                  </div>
                  <Select config={addEnquiryFormFields.sourceenquiry.config}/>
                  <Input config={addEnquiryFormFields.givenaddressEnquiry.config} />
                  <Select config={addEnquiryFormFields.cityenquiry.config} />
                  <Select config={addEnquiryFormFields.stateenquiry.config} />
                  <Select config={addEnquiryFormFields.countryenquiry.config} />
                  <Input config={addEnquiryFormFields.zipenquiry.config} />
                  <Input config={addEnquiryFormFields.telnoenquiry.config} />
                  <Input config={addEnquiryFormFields.faxnoenquiry.config} />
                  <Input config={addEnquiryFormFields.emailenquiry.config} />
                  <Input config={addEnquiryFormFields.websiteenquiry.config} />
                  <Input config={addEnquiryFormFields.contactenquiry.config} />
                  <Input config={addEnquiryFormFields.designationenquiry.config} />
                </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <Input config={addEnquiryFormFields.blankenquiry.config} />
                  <Input config={addEnquiryFormFields.givenname.config} />
                  <Input config={addEnquiryFormFields.recdon.config} />
                  <Select config={addEnquiryFormFields.enqtype.config} />
                  <Select config={addEnquiryFormFields.localsourceenquiry.config} />
                  <div className="col-md-6 col-xs-12">  
                  <Select config={addEnquiryFormFields.servicetype.config} />
                  </div>
                  <div className="col-md-6 col-xs-12">
                  <Input config={addEnquiryFormFields.dueon.config} />
                  </div>
                  <Select config={addEnquiryFormFields.printstatus.config} />
                  <Select config={addEnquiryFormFields.enqstatus.config} />
                  <Select config={addEnquiryFormFields.svisit.config} />
                  <Input config={addEnquiryFormFields.notesforenquiry.config} />
                  <Input config={addEnquiryFormFields.notesforadj.config} />
                  <Input config={addEnquiryFormFields.instructionenquiry.config} />
                </div>
                </div>

                <h6 className="card-title col-12">Client Details</h6>
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  <Input config={addEnquiryFormFields.clientrefenquiry.config} />
                  <div className="col-sm-9">
                  <Select config={addEnquiryFormFields.clientenquiry.config} />
                  </div>
                  <div className="col-md-2 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price
                  </Button>
                </div>
                  <Input config={addEnquiryFormFields.requestnoenquiry.config} />
                </div>
                </div>
                
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  <Input config={addEnquiryFormFields.clientIdenquiry.config} />
                  <div className="col-md-12">
                  <div className="col-sm-9">
                  <Select config={addEnquiryFormFields.actualbureyenquiry.config} />
                  </div>
                  <div className="col-sm-1">
                  <i className="fa fa-refresh"></i>
                  </div>
                  </div>
                  <Link to={""} className="card-title"><InputWithText  config={addEnquiryFormFields.actualbuyeraddnote.config} /></Link>
                  <Input config={addEnquiryFormFields.priceenquiry.config} />
                </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  
                 <Table config={tableConfig.config}>
                  null
                 </Table>
                </div> 
                </div>
                
                <div className="card-title">
                <InputWithText  config={addEnquiryFormFields.discountcommissionnote.config} />
                </div>
                <div className="col-3">
                <Input  config={addEnquiryFormFields.disenquiry.config} />
                <Input  config={addEnquiryFormFields.discountenquiry.config} />
                </div>
                <div className="col-3">
                <Input  config={addEnquiryFormFields.adjustenquiry.config} />
                <div className="col-md-2 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>View Adjust
                  </Button>
                </div>
                <Input  config={addEnquiryFormFields.commenquiry.config} />
                </div>
                <div className="card-title col-12">
                <InputWithText  config={addEnquiryFormFields.discounttypenote .config} />
                </div>
                </div>
                
            </BorderLayout>
          </form>
        </FormProvider>
       
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
              <ActionButtons />
            </BorderLayout>
      </Card>
    </>
  );
};


