import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  ActionButtons,
  Select,
  SingleCheckbox,
} from "@shared/index";
import { useParams } from "react-router-dom";
import { addPurchaseBillsFormFields } from "@transaction-search/index";

export const AddUpdatePurchase: React.FC = () => {
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update PurchaseBills" : "Add PurchaseBills",
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
                      
                        <Select config={addPurchaseBillsFormFields.fYearField.config}/>

                        <Input config={addPurchaseBillsFormFields.invoicedateField.config}/>
                        <Input config={ addPurchaseBillsFormFields.grsamountField.config}/>

                        <div className="col-md-7 col-xs-12 text-right">
                          <SingleCheckbox config={ addPurchaseBillsFormFields.calculateField.config }/>
                        </div>

                        <Input config={addPurchaseBillsFormFields.stField.config}/>
                                                
                        <Input config={ addPurchaseBillsFormFields.edcessField.config }/>
                        
                        <Input config={ addPurchaseBillsFormFields.invoiceamountField.config}/>

                </div>
                </div>

                <div className="col-4 col-xs-12">
                  <div className="card-body">

                      <Select config={addPurchaseBillsFormFields.suplliernameField.config}/>

                      <Input config={addPurchaseBillsFormFields.notesField.config}/>
                  </div>
                </div>

                <div className="col-4 col-xs-12">
                  <div className="card-body">
                    
                    <Input config={addPurchaseBillsFormFields.invoicenoField.config}/>

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
