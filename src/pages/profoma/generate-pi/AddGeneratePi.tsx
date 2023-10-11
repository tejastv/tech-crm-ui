import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  ActionButtons,
  Select,
  SingleCheckbox,
  Button,
  Table,
  TableType,
} from "@shared/index";
import { addGeneratePiFormFields, GeneratePiType } from "@profoma/index";
import { ColumnDef } from "@tanstack/react-table";

export const AddGeneratePi: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Genereate Invoice (PI)",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Button",
    },
  };
  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      //   methods.reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  //   if (params.id) {
  //     const { data: currencyData, isSuccess: currencyDataSuccess } = getCurrencyData(
  //       "" + params.id
  //     );
  //     if (currencyDataSuccess) {
  //       addCurrencyFormFields.currencyField.config.setData = currencyData?.currencyType;
  //       addCurrencyFormFields.symbolField.config.setData = currencyData?.currencySymbol;
  //       addCurrencyFormFields.currencyWordField.config.setData = currencyData?.currencyInWord;
  //       addCurrencyFormFields.purchesExchanegField.config.setData = currencyData?.exchangeRateRs;
  //       addCurrencyFormFields.pDateField.config.setData = currencyData?.entryDate;
  //       addCurrencyFormFields.sellExchanegField.config.setData = currencyData?.exchangeRateRsSell;
  //       addCurrencyFormFields.sDateField.config.setData = currencyData?.entryDateSell;
  //     }
  //   } else {
  //     useEffect(() => {
  //       methods.reset();
  //     }, []);
  //   }
  const columns: ColumnDef<GeneratePiType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Ref No</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Client Ref No</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Order Date</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Price</>,
    },
    {
      // accessorFn: (row) => row.stateCodeN,
      id: "Address",
      // cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Service</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Select all </>,
    },
    {
      id: "Instruction",
      // cell: (info) => info.getValue(),
      header: () => <>Adjustment</>,
    },
  ];
			


  const tableConfig: TableType<GeneratePiType> = {
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


  const methods = useForm();
  const onSubmit = methods.handleSubmit((data): void => {
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
                    <div className="col-4 col-xs-12">
                    <div className="card-body">

                        <Select config={addGeneratePiFormFields.clientField.config} />
                     
                    <div className="col-md-14 col-xs-12 text-right">
                            <Button
                              type="button"
                              className={"btn btn-danger btn-sm"}>
                              View
                            </Button>
                    </div>
                    
                      <Input config={addGeneratePiFormFields.currencyField.config}/>

                      <Input config={addGeneratePiFormFields.gstnField.config}/> 
                        </div>      
                    </div> 
{/* 2 Column */}
                <div className="col-4 col-xs-12">
                  <div className="card-body">
                      
                        <Input config={addGeneratePiFormFields.fromdateField.config} />

                        <Input config={addGeneratePiFormFields.countryField.config} />

                        <Select config={addGeneratePiFormFields.stateField.config} />

                        <Input config={addGeneratePiFormFields.codeField.config} />

                          
                        <label htmlFor="" className="col-sm-7 control-label col-form-label"></label>

                        <div className="col-md-14 col-xs-12 text-right">
                          
                        <SingleCheckbox config={addGeneratePiFormFields.gstField.config} />
                         
                        </div>

                  </div>
                </div>
{/* 3 column */}
                <div className="col-4 col-xs-12">
                  <div className="card-body">
                      
                    <Input config={addGeneratePiFormFields.todateeField.config } />

                    <Input config={ addGeneratePiFormFields.symbolField.config } />

                    <Input config={ addGeneratePiFormFields.currencyField.config } />

                  </div>
                </div>

                {/* Table */}
                <div className="col-md-12 col-xs-12">
                  <div className="card-body">
                  
                 <Table config={tableConfig.config}>
                  null
        </Table>
                </div> 
                </div>
  
                <div className="col-md-5 col-xs-12">
                  <div className="card-body">
                  
                  
                    {/* <div className="col-sm-6 "> */}
                 <Select config={addGeneratePiFormFields.fyearField.config} />
                  
               {/* </div> */}
               {/* <div className="col-sm-6 "> */}
               <Input config={addGeneratePiFormFields.invoicenoField.config} />  
               <div className="col-md-14 col-xs-12 text-right">
                            
               <SingleCheckbox config={addGeneratePiFormFields.manualField.config} />  
               </div>  
                    {/* </div> */}
                    {/* <div className="col-sm-6 "> */}
                 <Input config={addGeneratePiFormFields.amountField.config} />
                  
               {/* </div> */}
               {/* <div className="col-sm-5 "> */}
               <Input config={addGeneratePiFormFields.disamountField.config} />   
               
               {/* </div> */}
               <div className="col-md-14 col-xs-12 text-right">
                          
               <Button
                    type="button"
                    className={"btn btn-danger btn-sm"}>
                    Get Dis
                    </Button>   
                    </div>
                {/* <div className="col-sm-6 "> */}
                 <Input config={addGeneratePiFormFields.stField.config} />
                  
               {/* </div> */}
               {/* <div className="col-sm-6 "> */}
               <Input config={addGeneratePiFormFields.cgstperField.config} />    
                    {/* </div> */}


                {/* <div className="col-sm-6 "> */}
                 <Input config={addGeneratePiFormFields.stamountField.config} />
                  
               {/* </div> */}
               {/* <div className="col-sm-6 "> */}
               <Input config={addGeneratePiFormFields.cgstField.config} />    
                    {/* </div> */}
                </div>
                </div> 
                 

                 <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  
                  
                    {/* <div className="col-sm-7 "> */}
                    <Input config={addGeneratePiFormFields.dateField.config} />
                    {/* </div> */}

                    {/* <div className="col-sm-5 "> */}
                    <SingleCheckbox config={addGeneratePiFormFields.donotField.config} />    
                    {/* </div> */}
                    
                    {/* <div className="col-sm-12"> */}
                 <Input config={addGeneratePiFormFields.subtotalField.config} />
               {/* </div> */}

               {/* <div className="col-sm-6 "> */}
                    <Input config={addGeneratePiFormFields.sgstperField.config} />
                    {/* </div> */}

                    {/* <div className="col-sm-6 "> */}
                    <Input config={addGeneratePiFormFields.igstperField.config} />    
                    {/* </div> */}
               {/* <div className="col-sm-6 "> */}
                    <Input config={addGeneratePiFormFields.sgstField.config} />
                    {/* </div> */}

                    {/* <div className="col-sm-6 "> */}
                    <Input config={addGeneratePiFormFields.igstField.config} />    
                    {/* </div> */}

              
               </div>
               </div>

                <div className="col-md-3 col-xs-12">
                  <div className="card-body">
                    

                     {/* <div className="col-sm-12 "> */}
                    <Input config={addGeneratePiFormFields.staxField.config} />    
                    {/* </div>  */}
                     {/* <div className="col-sm-12 "> */}
                    <Input config={addGeneratePiFormFields.ecessField.config} />    
                    {/* </div>  */}
                     {/* <div className="col-sm-12 "> */}
                    <Input config={addGeneratePiFormFields.krishicessField.config} />    
                    {/* </div>  */}
                     {/* <div className="col-sm-9 "> */}
                    <Input config={addGeneratePiFormFields.totalField.config} />    
                    {/* </div>  */}
                    <div className="col-md-14 col-xs-12 text-right">
                     <Button
                    type="button"
                    className={"btn btn-danger btn-sm"}>
                    calculate
                    </Button>   
                    </div> 
                   
                    </div>
                  </div>
              </div>
            </BorderLayout>
            <div className="card-body">
              <BorderLayout heading={cardConfig.formActionsConfig.heading}>
                <ActionButtons />
              </BorderLayout>
            </div>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
