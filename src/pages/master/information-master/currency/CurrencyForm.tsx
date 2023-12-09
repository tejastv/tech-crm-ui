import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  DivLayout,
  ActionButtons,
} from "@shared/index";
import {
  currencyFormFields,
  CurrencyFormType,
  useCurrencyApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const CurrencyForm: React.FC = () => {
  const methods = useForm<CurrencyFormType>();
  const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } =
    useCurrencyApiCallHook();
  const { mutateAsync: addCurrency } = addCurrencyMutation();
  const { mutateAsync: updateCurrency } = updateCurrencyMutation();
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
    const { data: currencyData, isSuccess: currencyDataSuccess } =
      getCurrencyData("" + params.id);
    if (currencyDataSuccess) {
      currencyFormFields.currencyField.config.setData =
        currencyData?.currencyType;
      currencyFormFields.symbolField.config.setData =
        currencyData?.currencySymbol;
      currencyFormFields.currencyWordField.config.setData =
        currencyData?.currencyInWord;
      currencyFormFields.purchesExchanegField.config.setData =
        currencyData?.exchangeRateRs;
      currencyFormFields.pDateField.config.setData = currencyData?.entryDate;
      currencyFormFields.sellExchanegField.config.setData =
        currencyData?.exchangeRateRsSell;
      currencyFormFields.sDateField.config.setData =
        currencyData?.entryDateSell;
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
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="col-md-12 col-xs-12">
                      <Input config={currencyFormFields.currencyField.config} />
                    </div>
                    <div className="col-md-12 col-xs-12">
                      <Input config={currencyFormFields.symbolField.config} />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <Input
                      config={currencyFormFields.currencyWordField.config}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="card-title col-md-12 m-t-40 text-center">
                        <DivLayout
                          heading={cardConfig.formPurchesConfig.heading}
                        />
                        <hr />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <Input
                          config={
                            currencyFormFields.purchesExchanegField.config
                          }
                        />
                        <Input config={currencyFormFields.pDateField.config} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="card-title col-md-12 m-t-40 text-center">
                        <DivLayout
                          heading={cardConfig.formSellConfig.heading}
                        />
                        <hr />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <Input
                          config={currencyFormFields.sellExchanegField.config}
                        />
                        <Input config={currencyFormFields.sDateField.config} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BorderLayout>
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons />
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
