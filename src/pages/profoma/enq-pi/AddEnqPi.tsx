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
  SingleCheckbox,
} from "@shared/index";
import { addEnqPiFormFields } from "@profoma/index";
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
                  <div className="row">

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.companyField.config} />
                  </div>

                  <div className="col-sm-7 ">
                  <Select config={addEnqPiFormFields.yearField.config} />
                  </div>

                  <div className="col-sm-5 ">
                  <Input config={addEnqPiFormFields.refnoField.config} />
                  <small className="enquirynote">
                    <InputWithText config={addEnqPiFormFields.refnote.config} />
                  </small>
                  </div>

                  <div className="col-12">
                  <Select config={addEnqPiFormFields.sourceField.config}/>
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.givenaddressField.config} />
                  </div>

                  <div className="col-12">
                  <Select config={addEnqPiFormFields.stateField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.telnoField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.faxnoField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.emailField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.websiteField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.contactField.config} />
                  </div>

                  <div className="col-12">                  
                  <Input config={addEnqPiFormFields.designationField.config} />
                  </div>
                  </div>
                </div>
                </div>
                  <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  <div className="row">
                  {/* Blank Field  */}

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.blankField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.recdonField.config} />
                  </div>

                  <div className="col-7">
                  <Input config={addEnqPiFormFields.priceField.config} />
                  </div>

                   <div className="col-5">                 
                  <Input config={addEnqPiFormFields.adjustField.config} />
                  </div>

                  <div className="col-12">
                  <Select config={addEnqPiFormFields.cityField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.zipField.config} />
                  </div>

                  <div className="col-12">
                  <Select config={addEnqPiFormFields.countryField.config} />
                  </div>

                  <div className="col-10">
                  <Select config={addEnqPiFormFields.localsourceField.config} />
                  </div>

                  <div className="col-2">
                  <SingleCheckbox config={addEnqPiFormFields.allField.config} />
                  </div>

                  <div className="col-md-12 col-xs-12">  
                  <Input config={addEnqPiFormFields.fyearField.config} />
                  </div>

                  <div className="col-md-12 col-xs-12">
                  <Input config={addEnqPiFormFields.bankField.config} />
                  </div>
                  </div>
                  </div>
                  </div>

                  {/* 3 Column  */}
                  <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                  <Input config={addEnqPiFormFields.companyIdField.config} />
                  </div>

                  <div className="col-6">
                  <Select config={addEnqPiFormFields.servicetypeField.config} />
                  </div>

                  <div className="col-6">
                  <Input config={addEnqPiFormFields.dueonField.config} />
                  </div>

                  <div className="col-6">
                  <Select config={addEnqPiFormFields.printstatusField.config} />
                  </div>
                  
                  <div className="col-6">
                  <Input config={addEnqPiFormFields.cramountField.config} />
                  </div>

                  <div className="col-12">
                  <Select config={addEnqPiFormFields.enqstatusField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.notesforField.config} />
                  </div>

                  <div className="col-12">
                  <Select config={addEnqPiFormFields.instructionField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.cmieField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.rocstatusField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.recodsField.config} />
                  </div>

                  <div className="col-12">
                  <Input config={addEnqPiFormFields.recfinField.config} />
                  </div>
                  </div>
                </div>
                </div>

                {/* 4th Column */}
                <div className="card-title">
                <InputWithText  config={addEnqPiFormFields.clientdetailsnote.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                <div className="card-body">
                <div className="row">
                <div className="col-12">
                <Input  config={addEnqPiFormFields.clientrefField.config} />
                </div>
                <div className="col-10">
                <Select  config={addEnqPiFormFields.clientField.config} />
                </div>

                <div className="col-md-1 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price
                  </Button>
                </div>
                
                </div>
                </div>
                </div>

                {/* 5th column */}
                <div className="col-md-4 col-xs-12">
                <div className="card-body">
                <div className="row">

                <div className="col-12">
                <Input  config={addEnqPiFormFields.requestnoField.config} />
                </div>

                <div className="col-12">
                <Input  config={addEnqPiFormFields.clientIdField.config} />
                </div>

                </div>
                </div>
                </div>

                <div className="col-md-4 col-xs-12">
                <div className="card-body">
                <div className="row">
                 <Table config={tableConfig.config}>
                  null
                 </Table>
               </div>
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


