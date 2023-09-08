import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {BorderLayout,Card,Input,DivLayout,ActionButtons,} from "@shared/index";
import { addCurrencyFormFields,AddUpdateCurrencyType,useCurrencyApiCallHook, } from "@master/index";
import { useParams } from "react-router-dom";


export const AddUpdateCurrency: React.FC = () => {
  const methods = useForm<AddUpdateCurrencyType>();
  const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  const { mutate: addCurrency } = addCurrencyMutation();
  const { mutate: updateCurrency } = updateCurrencyMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Currency" : "Add Currency",
      heading: "Entry",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },

    formActionsConfig: {
      heading: "Action Button",
    },
  };
  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      methods.reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  if (params.id) {
    const { data: currencyData, isSuccess: currencyDataSuccess } = getCurrencyData(
      "" + params.id
    );
    if (currencyDataSuccess) {
      addCurrencyFormFields.currencyField.config.setData = currencyData?.currencyType;
      addCurrencyFormFields.symbolField.config.setData = currencyData?.currencySymbol;
      addCurrencyFormFields.currencyWordField.config.setData = currencyData?.currencyInWord;
      addCurrencyFormFields.purchesExchanegField.config.setData = currencyData?.exchangeRateRs;
      addCurrencyFormFields.pDateField.config.setData = currencyData?.entryDate;
      addCurrencyFormFields.sellExchanegField.config.setData = currencyData?.exchangeRateRsSell;
      addCurrencyFormFields.sDateField.config.setData = currencyData?.entryDateSell;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((currencyData) => {
    
    if (params.id && currencyData) {
      updateCurrency({ id: params.id, ...currencyData });
    } else {
      addCurrency(currencyData);
    }
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
                    <div className="col-md-7 col-xs-12">
                      <Input config={addCurrencyFormFields.currencyField.config} />
                    </div>

                    <div className="col-md-7 col-xs-12">
                      <Input config={addCurrencyFormFields.symbolField.config} />
                    </div>
                    <div className="card-title col-md-12 m-t-40 text-center">
                      <DivLayout
                        heading={cardConfig.formPurchesConfig.heading}
                      />
                      <hr />
                    </div>
                    <div className="col-md-7 col-xs-12">
                      <Input
                        config={addCurrencyFormFields.purchesExchanegField.config}
                      />
                      <Input
                        config={addCurrencyFormFields.pDateField.config}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <div className="col-md-12 col-xs-12">
                      <Input
                        config={addCurrencyFormFields.currencyWordField.config}
                      />
                    </div>
                    <div className="card-title col-md-12 m-t-40 text-center">
                      <DivLayout heading={cardConfig.formSellConfig.heading} />
                      <hr />
                    </div>
                    <div className="col-md-7 col-xs-12">
                      <Input
                        config={addCurrencyFormFields.sellExchanegField.config}
                      />
                      <Input config={addCurrencyFormFields.sDateField.config} />
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
