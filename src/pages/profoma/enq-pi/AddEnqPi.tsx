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
  Loader,
  TableType,
  DivLayout,
  SingleCheckbox,
} from "@shared/index";
import { EnqPi, addEnqPiFormFields } from "@profoma/index";
import { Link } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import { ClientType } from "@pages/master";
// import {useStateApiCallHook } from "@pages/master";

export const AddEnqPi: React.FC = () => {
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
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  
                  <Input config={addEnqPiFormFields.companyField.config} />

                  <Select config={addEnqPiFormFields.yearField.config} />

                  <Input config={addEnqPiFormFields.refnoField.config} />

                  <div className="col-md-12 col-xs-12 text-right">
                  <small className="enquirynote">
                    <InputWithText config={addEnqPiFormFields.refnote.config} />
                  </small>
                  </div>

                  <Select config={addEnqPiFormFields.sourceField.config}/>

                  <Input config={addEnqPiFormFields.givenaddressField.config} />

                  <Select config={addEnqPiFormFields.stateField.config} />

                  <Input config={addEnqPiFormFields.telnoField.config} />

                  <Input config={addEnqPiFormFields.faxnoField.config} />

                  <Input config={addEnqPiFormFields.emailField.config} />

                  <Input config={addEnqPiFormFields.websiteField.config} />

                  <Input config={addEnqPiFormFields.contactField.config} />

                  <Input config={addEnqPiFormFields.designationField.config} />

                  
                </div>
                </div>

                {/* 2 Column */}
                  <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  {/* Blank Field  */}

                  <Input config={addEnqPiFormFields.blankField.config} />

                  <Input config={addEnqPiFormFields.recdonField.config} />

                  <Input config={addEnqPiFormFields.priceField.config} />


                  <Input config={addEnqPiFormFields.adjustField.config} />

                  <Select config={addEnqPiFormFields.cityField.config} />

                  <Input config={addEnqPiFormFields.zipField.config} />

                  <Select config={addEnqPiFormFields.countryField.config} />

                  <Select config={addEnqPiFormFields.localsourceField.config} />

                  <div className="col-md-14 col-xs-12 text-right">
                  <SingleCheckbox config={addEnqPiFormFields.allField.config} />
                  </div>

                  <Input config={addEnqPiFormFields.fyearField.config} />

                  <Input config={addEnqPiFormFields.bankField.config} />
                  </div>
                  </div>

                  {/* 3 Column  */}
                  <div className="col-md-4 col-xs-12">
                  <div className="card-body">

                  <Input config={addEnqPiFormFields.companyIdField.config} />

                  <Select config={addEnqPiFormFields.servicetypeField.config} />

                  <Input config={addEnqPiFormFields.dueonField.config} />

                  <Select config={addEnqPiFormFields.printstatusField.config} />
                  
                  <Input config={addEnqPiFormFields.cramountField.config} />

                  <Select config={addEnqPiFormFields.enqstatusField.config} />

                  <Input config={addEnqPiFormFields.notesforField.config} />

                  <Select config={addEnqPiFormFields.instructionField.config} />

                  <Input config={addEnqPiFormFields.cmieField.config} />    

                  <Input config={addEnqPiFormFields.rocstatusField.config} /> 

                  <Input config={addEnqPiFormFields.recodsField.config} />

                  <Input config={addEnqPiFormFields.recfinField.config} />
                </div>
                </div>

                {/* 4th Column */}
                <div className="card-title">
                <InputWithText  config={addEnqPiFormFields.clientdetailsnote.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                <div className="card-body">  

                <Input  config={addEnqPiFormFields.clientrefField.config} />
                
                <Select  config={addEnqPiFormFields.clientField.config} />

                <div className="col-md-14 col-xs-12 text-right">

                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price
                  </Button>

                </div>

                </div>
                </div>

                {/* 5th column */}
                <div className="col-md-4 col-xs-12">
                <div className="card-body">

                <Input  config={addEnqPiFormFields.requestnoField.config} />

                <Input  config={addEnqPiFormFields.clientIdField.config} />

                </div>
                </div>

                {/* Table */}
                <div className="col-md-4 col-xs-12">
                <div className="card-body">

                 <Table config={tableConfig.config}>
                  null
                 </Table>
               
               </div>
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


